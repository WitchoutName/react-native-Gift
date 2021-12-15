import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";
import Color from "../classes/Color";
import IconButton from "./common/IconButton";

const Listmembergroupheader = ({ group }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{group.title}</Text>
      {group.add && (
        <Button color={Color.successGreen} compact={true} onPress={group.add}>
          Add
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
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
