import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Color from "../classes/Color";

const Listslistbutton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <View style={[styles.touch, {}]}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touch: {
    borderRadius: 3,
    borderWidth: 1.5,
    borderColor: Color.successGreen,
    padding: 20,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    color: Color.successGreen,
  },
});

export default Listslistbutton;
