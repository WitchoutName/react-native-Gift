import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import Color from "../../classes/Color";

const Containeredimage = ({ imageUri, dimensions }) => {
  const [imageSize, setImageSize] = useState({ height: 0, width: 0 });
  useEffect(() => {
    Image.getSize(imageUri, (width, height) => {
      if (width > height) {
        height = (dimensions.width * height) / width - 2;
        width = dimensions.width - 2;
      } else {
        width = (dimensions.height * width) / height - 2;
        height = dimensions.height - 2;
      }
      setImageSize({ width, height });
    });
  }, []);
  return (
    <View style={[styles.imageContainer, dimensions]}>
      <Image style={[imageSize]} source={{ uri: imageUri }} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.lighterGray,
    borderColor: Color.lightGray,
    borderWidth: 1,
  },
});

export default Containeredimage;
