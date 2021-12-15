import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Color from "../../classes/Color";
import { getUserImage } from "./../../services/userService";

const Userimage = ({ user, size = 50 }) => {
  return (
    <View
      style={[
        styles.container,
        { width: size, height: size, borderRadius: size / 2 },
      ]}
    >
      <Image
        style={{
          width: size * 0.8,
          height: size * 0.8,
          borderRadius: size / 2,
          backgroundColor: "white",
        }}
        source={{ uri: getUserImage(user) }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: Color.darkGray,
    borderWidth: 1.2,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Userimage;
