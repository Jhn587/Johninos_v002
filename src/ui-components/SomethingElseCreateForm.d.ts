/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
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
export declare type SomethingElseCreateFormInputValues = {};
export declare type SomethingElseCreateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SomethingElseCreateFormOverridesProps = {
    SomethingElseCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type SomethingElseCreateFormProps = React.PropsWithChildren<{
    overrides?: SomethingElseCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SomethingElseCreateFormInputValues) => SomethingElseCreateFormInputValues;
    onSuccess?: (fields: SomethingElseCreateFormInputValues) => void;
    onError?: (fields: SomethingElseCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SomethingElseCreateFormInputValues) => SomethingElseCreateFormInputValues;
    onValidate?: SomethingElseCreateFormValidationValues;
} & React.CSSProperties>;
export default function SomethingElseCreateForm(props: SomethingElseCreateFormProps): React.ReactElement;
