import React from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

const AppFormField = ({ name, ...rest }) => {
  const { setFieldTouched, setFieldValue, errors, values, touched } =
    useFormikContext();

  return (
    <>
      <AppTextInput
        onChangeText={(text) => setFieldValue(name, text)}
        onBlur={() => setFieldTouched(name)}
        value={values[name]}
        hasError={errors[name]}
        {...rest}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

const styles = StyleSheet.create({});

export default AppFormField;
