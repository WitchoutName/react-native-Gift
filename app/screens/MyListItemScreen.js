import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import Screen from "../components/common/Screen";
import Listslist from "../components/ListsList";
import Owneritemlistitem from "../components/OwnerItemListItem";
import appContext from "../context/appContext";
import ListScreen from "./ListScreen";

const MyListitemScreen = ({ route }) => {
  // console.log(route.params);
  const { currentLists } = useContext(appContext);
  const list = currentLists[currentLists.active];
  const renderItem = (item) => <Owneritemlistitem item={item.item} />;
  return (
    <Screen>
      <Listslist data={list.item_set} renderItem={renderItem} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MyListitemScreen;
