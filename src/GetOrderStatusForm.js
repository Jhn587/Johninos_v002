import React from 'react';
import { API } from "aws-amplify";

export class GetOrderStatusForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {orderId: '', orderStatus: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({orderId: event.target.value});
  }

  handleSubmit(event) {
    alert('A orderId was submitted: ' + this.state.orderId);
    let orderStatus = this.getOrderStatus(this.state.orderId);
    this.setState({orderId: this.state.orderId, orderStatus: orderStatus});
    event.preventDefault();
  }

  getOrderStatus(inputOrderId) {
  	let selectQuery =   `query GetPizzaOrder($orderId: String!) {
		  listOrderStatuses(filter: {orderId: {eq: $orderId}}) {
		    items {
		      orderStatus
		    }
		  }
		}
		`;
  	try {
	  API.graphql({
	    query: selectQuery,
	    variables: { orderId: inputOrderId }
	  }).then(output => {
	 	this.setState({orderId: inputOrderId, orderStatus: output.data.listOrderStatuses.items[0].orderStatus}) 
	  });



    } catch (err) {
      console.error('GraphQL error:', err);
    }
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Order Id:
          <input type="text" value={this.state.orderId} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {this.state.orderId} : {this.state.orderStatus}
      </div>
    );
  }
}