/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { getOrderStatus } from "../graphql/queries";
import { updateOrderStatus } from "../graphql/mutations";
export default function OrderStatusUpdateForm(props) {
  const {
    id: idProp,
    orderStatus: orderStatusModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    orderId: "",
    customerId: "",
    storeId: "",
    order: "",
    orderStatus: "",
  };
  const [orderId, setOrderId] = React.useState(initialValues.orderId);
  const [customerId, setCustomerId] = React.useState(initialValues.customerId);
  const [storeId, setStoreId] = React.useState(initialValues.storeId);
  const [order, setOrder] = React.useState(initialValues.order);
  const [orderStatus, setOrderStatus] = React.useState(
    initialValues.orderStatus
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = orderStatusRecord
      ? { ...initialValues, ...orderStatusRecord }
      : initialValues;
    setOrderId(cleanValues.orderId);
    setCustomerId(cleanValues.customerId);
    setStoreId(cleanValues.storeId);
    setOrder(
      typeof cleanValues.order === "string" || cleanValues.order === null
        ? cleanValues.order
        : JSON.stringify(cleanValues.order)
    );
    setOrderStatus(cleanValues.orderStatus);
    setErrors({});
  };
  const [orderStatusRecord, setOrderStatusRecord] =
    React.useState(orderStatusModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getOrderStatus.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getOrderStatus
        : orderStatusModelProp;
      setOrderStatusRecord(record);
    };
    queryData();
  }, [idProp, orderStatusModelProp]);
  React.useEffect(resetStateValues, [orderStatusRecord]);
  const validations = {
    orderId: [],
    customerId: [],
    storeId: [],
    order: [{ type: "JSON" }],
    orderStatus: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          orderId: orderId ?? null,
          customerId: customerId ?? null,
          storeId: storeId ?? null,
          order: order ?? null,
          orderStatus: orderStatus ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: updateOrderStatus.replaceAll("__typename", ""),
            variables: {
              input: {
                id: orderStatusRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "OrderStatusUpdateForm")}
      {...rest}
    >
      <TextField
        label="Order id"
        isRequired={false}
        isReadOnly={false}
        value={orderId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              orderId: value,
              customerId,
              storeId,
              order,
              orderStatus,
            };
            const result = onChange(modelFields);
            value = result?.orderId ?? value;
          }
          if (errors.orderId?.hasError) {
            runValidationTasks("orderId", value);
          }
          setOrderId(value);
        }}
        onBlur={() => runValidationTasks("orderId", orderId)}
        errorMessage={errors.orderId?.errorMessage}
        hasError={errors.orderId?.hasError}
        {...getOverrideProps(overrides, "orderId")}
      ></TextField>
      <TextField
        label="Customer id"
        isRequired={false}
        isReadOnly={false}
        value={customerId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              orderId,
              customerId: value,
              storeId,
              order,
              orderStatus,
            };
            const result = onChange(modelFields);
            value = result?.customerId ?? value;
          }
          if (errors.customerId?.hasError) {
            runValidationTasks("customerId", value);
          }
          setCustomerId(value);
        }}
        onBlur={() => runValidationTasks("customerId", customerId)}
        errorMessage={errors.customerId?.errorMessage}
        hasError={errors.customerId?.hasError}
        {...getOverrideProps(overrides, "customerId")}
      ></TextField>
      <TextField
        label="Store id"
        isRequired={false}
        isReadOnly={false}
        value={storeId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              orderId,
              customerId,
              storeId: value,
              order,
              orderStatus,
            };
            const result = onChange(modelFields);
            value = result?.storeId ?? value;
          }
          if (errors.storeId?.hasError) {
            runValidationTasks("storeId", value);
          }
          setStoreId(value);
        }}
        onBlur={() => runValidationTasks("storeId", storeId)}
        errorMessage={errors.storeId?.errorMessage}
        hasError={errors.storeId?.hasError}
        {...getOverrideProps(overrides, "storeId")}
      ></TextField>
      <TextAreaField
        label="Order"
        isRequired={false}
        isReadOnly={false}
        value={order}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              orderId,
              customerId,
              storeId,
              order: value,
              orderStatus,
            };
            const result = onChange(modelFields);
            value = result?.order ?? value;
          }
          if (errors.order?.hasError) {
            runValidationTasks("order", value);
          }
          setOrder(value);
        }}
        onBlur={() => runValidationTasks("order", order)}
        errorMessage={errors.order?.errorMessage}
        hasError={errors.order?.hasError}
        {...getOverrideProps(overrides, "order")}
      ></TextAreaField>
      <TextField
        label="Order status"
        isRequired={false}
        isReadOnly={false}
        value={orderStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              orderId,
              customerId,
              storeId,
              order,
              orderStatus: value,
            };
            const result = onChange(modelFields);
            value = result?.orderStatus ?? value;
          }
          if (errors.orderStatus?.hasError) {
            runValidationTasks("orderStatus", value);
          }
          setOrderStatus(value);
        }}
        onBlur={() => runValidationTasks("orderStatus", orderStatus)}
        errorMessage={errors.orderStatus?.errorMessage}
        hasError={errors.orderStatus?.hasError}
        {...getOverrideProps(overrides, "orderStatus")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || orderStatusModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || orderStatusModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
