import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Screen from "../components/common/Screen";
import Listslist from "../components/ListsList";
import Listslistbutton from "../components/ListsListButton";
import MyListsListItem from "../components/MyListsListItem";

const data = [
  {
    id: "0",
    title: "Kids Christmas",
  },
  {
    id: "1",
    title: "My Birthday",
  },
  {
    id: "12",
    title: "My Birthday",
  },
  {
    id: "13",
    title: "My Birthday",
  },
  {
    id: "15",
    title: "My Birthday",
  },
  {
    id: "154",
    title: "My Birthday",
  },
  {
    id: "145",
    title: "My Birthday",
  },
  {
    id: "178",
    title: "My Birthday",
  },
  {
    id: "132",
    title: "My Birthday",
  },
  {
    id: "1412",
    title: "My Birthday",
  },
  {
    id: "1455",
    title: "My Birthday",
  },
];

const MylistsScreen = ({ route }) => {
  const handleActivate = () => {};
  const handleEdit = () => {};
  const handleDelete = () => {};

  const renderItem = ({ item, index }) => {
    return (
      <MyListsListItem
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

export default MylistsScreen;
