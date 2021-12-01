import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import Screen from "../components/common/Screen";
import Listslist from "../components/ListsList";
import Listslistbutton from "../components/ListsListButton";
import OthersListsListItem from "../components/OthersListsListItem";

const OthersListsScreen = ({ route }) => {
  const handleActivate = () => {};
  const handleEdit = () => {};
  const handleDelete = () => {};

  const renderItem = ({ item, index }) => {
    return (
      <OthersListsListItem
        item={item}
        index={index}
        onActivateList={handleActivate}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    );
  };

  return (
    <Screen>
      <ScrollView
        contentContainerStyle={{ alignItems: "center", paddingBottom: 20 }}
      >
        <Listslist renderItem={renderItem} data={data} />
        <Listslistbutton title="Create List" />
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default OthersListsScreen;
