import React, { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Color from "../classes/Color";

const IMAGE_SIZE = { height: 180, width: 140 };

const Owneritemlistitem = ({ item }) => {
  const [imageSize, setImageSize] = useState({ height: 0, width: 0 });
  //   Image.getSize(item.image_link, (width, height) => {
  //     if (width > height) {
  //       height = (IMAGE_SIZE.width * height) / width;
  //       width = IMAGE_SIZE.width;
  //       setImageSize({ width, height });
  //     } else {
  //       width = (IMAGE_SIZE.height * width) / height;
  //       height = IMAGE_SIZE.height;
  //       setImageSize({ width, height });
  //     }
  //     setImageSize({ width, height });
  //   });
  return (
    <View style={styles.container}>
      <Image style={[styles.image]} source={{ uri: item.image_link }} />
      <Text>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 400,
    width: "100%",
    alignItems: "center",
    backgroundColor: Color.lightGray,
    flexDirection: "row",
    padding: 10,
  },
  image: {
    height: "50%",
    width: "50%",
  },
});

export default Owneritemlistitem;
