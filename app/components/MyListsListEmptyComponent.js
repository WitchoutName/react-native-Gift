import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Color from "../classes/Color";
import MyListsListItem from "./MyListsListItem";
import UrlIcon from "./UrlIcon";

const DummyListItem = () => {
  const [width, setWidth] = useState(
    Math.floor(Math.random() * (210 - 57)) + 57
  );
  return (
    <View style={styles.dummy}>
      <View style={{ flexDirection: "row", alignItems: "center", flex: 9.5 }}>
        <UrlIcon icon={{}} color={Color.lightGray} size={32} />
        <View
          style={{
            backgroundColor: Color.lightGray,
            marginLeft: 10,
            height: 23,
            width: width,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          flex: 2,
        }}
      >
        <UrlIcon icon={{}} color={Color.lightGray} size={28} />
        <UrlIcon icon={{}} color={Color.lightGray} size={28} />
      </View>
    </View>
  );
};

const MyListsListEmptyComponent = () => {
  return (
    <View style={styles.container}>
      <DummyListItem />
      <DummyListItem />
      <DummyListItem />
      <DummyListItem />
      <DummyListItem />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  dummy: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginHorizontal: 10,
    marginTop: 10,
    width: "95%",
    height: 50,
    borderWidth: 2,
    borderColor: Color.lightGray,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default MyListsListEmptyComponent;
