import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

import Color from "../../classes/Color";

const AppButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.touch}>
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
    padding: 10,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    color: Color.successGreen,
  },
});

export default AppButton;
