import React from "react";
import { View, StyleSheet, Text } from "react-native";

const AppText = ({ style, children, ...rest }) => {
  return (
    <Text style={{ ...styles.text, ...style }} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    //fontFamily: "varela",
    fontSize: 20,
  },
});

export default AppText;
