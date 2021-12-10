import React from "react";
import { View, StyleSheet } from "react-native";

import Color from "../../../classes/Color";
import AppText from "../AppText";

const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) return null;
  return <AppText style={styles.error}>{error}</AppText>;
};

const styles = StyleSheet.create({
  error: {
    color: Color.red,
    fontWeight: "700",
    fontSize: 18,
    marginHorizontal: 10,
    overflow: "scroll",
  },
});

export default ErrorMessage;
