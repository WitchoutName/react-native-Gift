import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import * as Icons from "@expo/vector-icons";
import Color from "../../classes/Color";

const iconSets = {
  delete: { set: "MaterialCommunityIcons", name: "close-thick" },
  edit: { set: "MaterialIcons" },
};

function composeIcon({ name, color, size }) {
  const iconSet = iconSets[name];
  if (iconSet) {
    const Component = Icons[iconSet.set];
    return <Component name={iconSet.name || name} color={color} size={size} />;
  }
  return null;
}

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
      {composeIcon(props.icon)}
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
