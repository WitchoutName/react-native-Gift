import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Color from "../classes/Color";

import UrlIcon from "./UrlIcon";

const Listscreenheadertitle = ({ list }) => {
  return (
    <View
      style={{
        alignItems: "center",
        // paddingTop: 33,
      }}
    >
      <UrlIcon
        icon={list.icon}
        color={list.theme_color.hex}
        size={50}
        style={{
          position: "absolute",
          top: 20,
        }}
      />
      <Text style={styles.text}>{list.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Color.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Listscreenheadertitle;
