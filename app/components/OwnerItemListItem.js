import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import { Button } from "react-native-paper";

import Color from "../classes/Color";
import IconButton from "./common/IconButton";

const noImage =
  "https://lh3.googleusercontent.com/proxy/PtpPLE4CCGxFdkLHzhONJDXw5NVwbGT9LfNCcjr1nXkcPC6Jb1Bz6w2OXbPb6TA5jc3ndBcY9q5LR1JzBrvoZGYIP7eaT9hdnLRxJ6U8ce6tG27vh35vnftHo2qrnMwbAhAYthCVkq8eBQpaopfewnMFLeJBGmz697YMk6AgBWqYeBb_tSOmH60k-QhIt2ZpOdv4mdV4n_p7lvjhqnhRo9E4pkpIKe11UPbOoTlV3ymMNexXVc6g7HHEbDFQ5u0sJ5RdOqNaKJDIt8-YgngZuUAhRP7BuAfZC-72M10kD5R_0_nn0rK33ShHVu31ldu4Hxv_99nonR_A9h-Wh1NYN333_N7ZX7veZRemcH7GZfjBWG17p51ilbQQH6MAvm--NjVW2hwUTvOMP8CH9hY9_Dkp4KRAblKNBV8UNXeCQT_FvhBMJCaMsYiMP89rDaE6AhJhQiU3onmDAP-Fp4rIaTXGQwascLo1_8rC2spPAjB2fBCIgeZTK251Qz3xKimfD8Ugmy5P-B8S20-dozF7ZzdMxa1Yce5ZvuoN1r7Xl3T0EsspCgyFM92F7qVdCSztQQzhCxg";
const width = Dimensions.get("window").width - 20;

const IMAGE_SIZE = { height: width / 2, width: width / 2 };

const Owneritemlistitem = ({ item }) => {
  const [imageSize, setImageSize] = useState({ height: 0, width: 0 });
  useEffect(() => {
    Image.getSize(item.image_link || noImage, (width, height) => {
      if (width > height) {
        height = (IMAGE_SIZE.width * height) / width - 2;
        width = IMAGE_SIZE.width - 2;
      } else {
        width = (IMAGE_SIZE.height * width) / height - 2;
        height = IMAGE_SIZE.height - 2;
      }
      setImageSize({ width, height });
    });
  }, []);
  return (
    <View style={styles.container}>
      <View style={[styles.imageContainer, IMAGE_SIZE]}>
        <Image
          style={[imageSize]}
          source={{ uri: item.image_link || noImage }}
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{JSON.parse(item.description)}</Text>
        </View>
        <View style={styles.buttonGroup}>
          <Button
            color={"dodgerblue"}
            compact={true}
            // mode="contained"
            onPress={async () => {}}
          >
            Edit
          </Button>
          <Button
            color={Color.dangerRed}
            compact={true}
            // mode="contained"
            onPress={async () => {}}
          >
            Delete
          </Button>
          {/* <IconButton
            style={styles.leave}
            icon={{ name: "edit", size: 35, color: "dodgerblue" }}
            // onPress={() => onEdit(item.id)}
          />
          <IconButton
            style={styles.leave}
            icon={{ name: "delete", size: 35, color: Color.dangerRed }}
            // onPress={() => onDelete(item.id)}
          /> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: 400,
    width: "100%",
    // alignItems: "center",
    // backgroundColor: Color.lightGray,
    flexDirection: "row",
    padding: 10,
    // borderBottomWidth: 1,
    borderColor: Color.darkGray,
    paddingVertical: 15,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.lighterGray,
    borderColor: Color.lightGray,
    borderWidth: 1,
  },
  infoContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    borderBottomWidth: 2,
    paddingBottom: 5,
    borderColor: Color.lightGray,
  },
  description: {
    color: Color.darkGray,
    paddingBottom: 5,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default Owneritemlistitem;
