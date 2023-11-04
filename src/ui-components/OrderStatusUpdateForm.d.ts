/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { OrderStatus } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OrderStatusUpdateFormInputValues = {
    orderId?: string;
    customerId?: string;
    storeId?: string;
    order?: string;
};
export declare type OrderStatusUpdateFormValidationValues = {
    orderId?: ValidationFunction<string>;
    customerId?: ValidationFunction<string>;
    storeId?: ValidationFunction<string>;
    order?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrderStatusUpdateFormOverridesProps = {
    OrderStatusUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    orderId?: PrimitiveOverrideProps<TextFieldProps>;
    customerId?: PrimitiveOverrideProps<TextFieldProps>;
    storeId?: PrimitiveOverrideProps<TextFieldProps>;
    order?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type OrderStatusUpdateFormProps = React.PropsWithChildren<{
    overrides?: OrderStatusUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    orderStatus?: OrderStatus;
    onSubmit?: (fields: OrderStatusUpdateFormInputValues) => OrderStatusUpdateFormInputValues;
    onSuccess?: (fields: OrderStatusUpdateFormInputValues) => void;
    onError?: (fields: OrderStatusUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OrderStatusUpdateFormInputValues) => OrderStatusUpdateFormInputValues;
    onValidate?: OrderStatusUpdateFormValidationValues;
} & React.CSSProperties>;
export default function OrderStatusUpdateForm(props: OrderStatusUpdateFormProps): React.ReactElement;
