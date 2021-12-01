import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Listicon = ({ url }) => {
  return <Image style={styles.mask} source={{ uri: url }} />;
};

const styles = StyleSheet.create({
  mask: {
    height: 32,
    width: 32,
    borderRadius: 25,
  },
});

export default Listicon;
