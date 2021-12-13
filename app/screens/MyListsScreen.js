import React, { useContext, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  RefreshControl,
} from "react-native";

import appContext from "../context/appContext";
import Screen from "../components/common/Screen";
import Listslist from "../components/ListsList";
import Listslistbutton from "../components/ListsListButton";
import MyListsListItem from "../components/MyListsListItem";
import MyListsListEmptyComponent from "../components/MyListsListEmptyComponent";

const MylistsScreen = ({ route, navigation }) => {
  const ctx = useContext(appContext);
  const [refreshing, setRefreshing] = useState(false);

  const handleActivate = async (id) => {
    ctx.listMethods.getList(id, navigation);
  };

  const handleEdit = (id) => {
    navigation.navigate("manageList", { mode: "edit", id });
  };
  const handleDelete = (id) => {
    ctx.listMethods.deleteList(id);
  };

  const renderItem = ({ item, index }) => {
    return (
      <MyListsListItem
        item={item}
        index={index}
        onActivate={handleActivate}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    );
  };

  return (
    <Screen>
      <ScrollView
        contentContainerStyle={{ alignItems: "center", paddingBottom: 20 }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => ctx.listMethods.getLists({ loader: false })}
          />
        }
      >
        <Listslist
          renderItem={renderItem}
          data={ctx.lists}
          ListEmptyComponent={MyListsListEmptyComponent}
        />
        <Listslistbutton
          title="Create List"
          onPress={() => navigation.navigate("manageList", { mode: "create" })}
        />
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MylistsScreen;
