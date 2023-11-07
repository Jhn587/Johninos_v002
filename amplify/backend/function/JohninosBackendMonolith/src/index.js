/* Amplify Params - DO NOT EDIT
	API_JOHNINOSV002_GRAPHQLAPIENDPOINTOUTPUT
	API_JOHNINOSV002_GRAPHQLAPIIDOUTPUT
	API_JOHNINOSV002_GRAPHQLAPIKEYOUTPUT
	API_JOHNINOSV002_ORDERSTATUSTABLE_ARN
	API_JOHNINOSV002_ORDERSTATUSTABLE_NAME
	ENV
	FUNCTION_DYNAMODBTRIGGER_NAME
	REGION
Amplify Params - DO NOT EDIT */


import crypto from '@aws-crypto/sha256-js';
import { defaultProvider } from '@aws-sdk/credential-provider-node';
import { SignatureV4 } from '@aws-sdk/signature-v4';
import { HttpRequest } from '@aws-sdk/protocol-http';
import { default as fetch, Request } from 'node-fetch';

const GRAPHQL_ENDPOINT = process.env.API_JOHNINOSV002_GRAPHQLAPIENDPOINTOUTPUT;
const AWS_REGION = process.env.AWS_REGION || 'us-east-1';
const { Sha256 } = crypto;

const query = /* GraphQL */ `
  query GetPizzaOrder {
    listOrderStatuses(filter: {orderId: {eq: "test_order"}}) {
      items {
        orderStatus
      }
    }
  }
`;

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
export const handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  for (const record of event.Records) {
    console.log(record.eventID);
    console.log(record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);

  }
  queryOrderStatus(event).then((output) => {
  	console.log(output)
  });
  console.log(output);
  return Promise.resolve('Successfully processed DynamoDB record');
};

export const handleOrder = async(order) => {
	// if order is placed

	// if order is paid for

	// if order is ready for delivery

};

export const queryOrderStatus = async(event) => {
	console.log(`EVENT: ${JSON.stringify(event)}`);

  const endpoint = new URL(GRAPHQL_ENDPOINT);

  const signer = new SignatureV4({
    credentials: defaultProvider(),
    region: AWS_REGION,
    service: 'appsync',
    sha256: Sha256
  });

  const requestToBeSigned = new HttpRequest({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      host: endpoint.host
    },
    hostname: endpoint.host,
    body: JSON.stringify({ query }),
    path: endpoint.pathname
  });

  const signed = await signer.sign(requestToBeSigned);
  const request = new Request(endpoint, signed);

  let statusCode = 200;
  let body;
  let response;

  try {
    response = await fetch(request);
    body = await response.json();
    if (body.errors) statusCode = 400;
  } catch (error) {
    statusCode = 500;
    body = {
      errors: [
        {
          message: error.message
        }
      ]
    };
  }

  return {
    statusCode,
    //  Uncomment below to enable CORS requests
    // headers: {
    //   "Access-Control-Allow-Origin": "*",
    //   "Access-Control-Allow-Headers": "*"
    // }, 
    body: JSON.stringify(body)
  };
};