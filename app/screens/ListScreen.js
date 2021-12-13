import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Screen from "../components/common/Screen";
import UrlIcon from "./../components/UrlIcon";

const ListScreen = ({ route }) => {
  const list = route.params;
  return (
    <Screen>
      <View
        style={{
          backgroundColor: list.theme_color.hex,
          alignItems: "center",
          height: 85,
          width: "100%",
        }}
      >
        <UrlIcon
          icon={list.icon}
          color={list.theme_color.hex}
          size={50}
          style={{
            position: "relative",
            top: 62.5,
          }}
        />
      </View>

      {/* <Text>{list.id}</Text> */}
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
