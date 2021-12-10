import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit} />;
};

export default SubmitButton;
