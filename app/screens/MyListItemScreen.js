import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ListScreen from "./ListScreen";

const MyListitemScreen = ({ route }) => {
  // console.log(route.props);
  return (
    <ListScreen route={route}>
      <View>
        <Text>items</Text>
      </View>
    </ListScreen>
  );
};

const styles = StyleSheet.create({});

export default MyListitemScreen;
