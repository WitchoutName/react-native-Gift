import React from "react";
import { View, StyleSheet } from "react-native";

import * as Icons from "@expo/vector-icons";

const iconSets = {
  delete: { set: "MaterialCommunityIcons", name: "close-thick" },
  edit: { set: "MaterialIcons" },
  notifications: { set: "Ionicons" },
};

function ComposeIcon({ name, color, size }) {
  const iconSet = iconSets[name];
  if (iconSet) {
    const Component = Icons[iconSet.set];
    return <Component name={iconSet.name || name} color={color} size={size} />;
  }
  return null;
}

export default ComposeIcon;
