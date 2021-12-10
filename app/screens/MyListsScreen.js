import React, { useContext } from "react";
import { View, Text, ScrollView, StyleSheet, ToastAndroid } from "react-native";

import appContext from "../context/appContext";
import Screen from "../components/common/Screen";
import Listslist from "../components/ListsList";
import Listslistbutton from "../components/ListsListButton";
import MyListsListItem from "../components/MyListsListItem";

const MylistsScreen = ({ route, navigation }) => {
  const ctx = useContext(appContext);

  const handleActivate = async (id) => {
    ctx.loader.set(true);
    const { ok, list } = await ctx.listMethods.getList(id);
    ctx.loader.set(false);
    if (ok) {
      navigation.navigate("List", list);
    }
  };

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
        <Listslist renderItem={renderItem} data={ctx.lists} />
        <Listslistbutton
          title="Create List"
          onPress={() => navigation.navigate("Create List")}
        />
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MylistsScreen;
