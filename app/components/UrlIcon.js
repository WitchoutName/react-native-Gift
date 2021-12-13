import React from "react";
import { View, StyleSheet, Image } from "react-native";

const UrlIcon = ({ icon, color, size, style = {} }) => {
  return (
    (icon && (
      <View
        style={[
          {
            backgroundColor: color || "dodgerblue",
            width: size,
            height: size,
            borderRadius: size / 2,
            justifyContent: "center",
            alignItems: "center",
          },
          style,
        ]}
      >
        {icon.image && (
          <Image
            style={{
              height: size * 0.6,
              width: size * 0.6,
            }}
            source={{ uri: icon.image }}
          />
        )}
      </View>
    )) || <View></View>
  );
};

export default UrlIcon;
