/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { SomethingElse } from "../API.ts";
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
export declare type SomethingElseUpdateFormInputValues = {};
export declare type SomethingElseUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SomethingElseUpdateFormOverridesProps = {
    SomethingElseUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type SomethingElseUpdateFormProps = React.PropsWithChildren<{
    overrides?: SomethingElseUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    somethingElse?: SomethingElse;
    onSubmit?: (fields: SomethingElseUpdateFormInputValues) => SomethingElseUpdateFormInputValues;
    onSuccess?: (fields: SomethingElseUpdateFormInputValues) => void;
    onError?: (fields: SomethingElseUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SomethingElseUpdateFormInputValues) => SomethingElseUpdateFormInputValues;
    onValidate?: SomethingElseUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SomethingElseUpdateForm(props: SomethingElseUpdateFormProps): React.ReactElement;
