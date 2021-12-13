import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Screen from "../components/common/Screen";
import UrlIcon from "./../components/UrlIcon";

const ListScreen = ({ children, route }) => {
  if (route) {
    console.log("listparams: ", route.params);
    const list = route.params || null;
    return (
      list && (
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
            {children}
          </View>
        </Screen>
      )
    );
  }
};

const styles = StyleSheet.create({});

export default ListScreen;
