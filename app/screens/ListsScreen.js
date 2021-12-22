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
import Listmembergroupheader from "./../components/ListMemberGroupHeader";

const ListsScreen = ({ route, navigation }) => {
  const mode = route.name === "My Lists" ? "my" : "others";
  const { user, listMethods, lists } = useContext(appContext);
  const [refreshing, setRefreshing] = useState(false);
  const currentLists = lists.filter((l) => {
    const isMyList = l.creator == user.id;
    // console.log(route.name, isMyList, l.creator);
    return (mode === "my") === isMyList;
  });

  const handleActivate = async (id) => {
    listMethods.getList(id).then(({ ok, data, isMine }) => {
      if (ok)
        navigation.navigate(isMine ? "MyList" : "OthersList", {
          ...listMethods.getFormatedList(data),
        });
    });
  };

  const handleEdit = (id) => {
    navigation.navigate("manageList", { mode: "edit", id });
  };
  const handleDelete = (id) => {
    listMethods.deleteList(id);
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
            onRefresh={() => listMethods.getLists({ loader: false })}
          />
        }
      >
        {mode == "my" ? (
          <>
            <Listslist
              renderItem={renderItem}
              data={currentLists}
              ListEmptyComponent={MyListsListEmptyComponent}
            />
            <Listslistbutton
              title="Create List"
              onPress={() =>
                navigation.navigate("manageList", { mode: "create" })
              }
            />
          </>
        ) : (
          ["Coowner", "Member"].map((t) => {
            const myLists = currentLists.filter(
              (l) =>
                l.admins.map((a) => a.id).includes(user.id) == (t == "Coowner")
            );
            return (
              !!myLists.length && (
                <React.Fragment key={t}>
                  <Listmembergroupheader group={{ title: [t] }} />
                  <Listslist renderItem={renderItem} data={myLists} />
                </React.Fragment>
              )
            );
          })
        )}
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ListsScreen;
