import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Color from "../classes/Color";

const Listmembergroupheader = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    marginLeft: "2.5%",
    width: "95%",
    borderColor: Color.darkGray,
    borderBottomWidth: 0.5,
  },
  text: {
    fontSize: 18,
  },
});

export default Listmembergroupheader;
