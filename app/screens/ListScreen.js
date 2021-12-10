import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Screen from "../components/common/Screen";

const ListScreen = ({ route }) => {
  return (
    <Screen>
      <Text>{route.params.id}</Text>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
