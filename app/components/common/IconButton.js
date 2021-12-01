import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import Color from "../../classes/Color";
import ComposeIcon from "./ComposeIcon";

const IconButton = (props) => {
  // console.log(props.icon);
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={props.onPress}
      style={{
        ...styles.button,
        ...props.style,
        ...{
          borderColor: props.icon.color,
          // height: props.size,
          // width: props.size,
        },
      }}
    >
      <ComposeIcon
        name={props.icon.name}
        color={props.icon.color}
        size={props.icon.size}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: Color.primaryOrange,
    backgroundColor: "transparent",
    width: 50,
    height: 50,
    fontSize: 20,
  },
});

export default IconButton;
