import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import Color from "../../classes/Color";
import appContext from "../../context/appContext";

const screenWidth = Dimensions.get("window").width;

const Screen = (props) => {
  const ctx = useContext(appContext);

  return (
    <View style={{ ...styles.container, ...props.style }}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Color.white,
    padding: 0,
    margin: 0,
    paddingBottom: 0,
    height: 0,
    flexGrow: 1,
    flex: 1,
  },
});

export default Screen;
