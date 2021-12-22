import React, { useContext } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import Screen from "../components/common/Screen";
import Listslist from "../components/ListsList";
import Memberitemlistitem from "../components/MemberItemListItem";
import Owneritemlistitem from "../components/OwnerItemListItem";
import appContext from "../context/appContext";
import useList from "../hooks/useList";

const MyListitemScreen = ({ route }) => {
  const { user } = useContext(appContext);
  const list = useList();
  const renderItem = ({ item }) => {
    console.log(item);
    if (list.admins.map((a) => a.id).includes(user.id))
      return item.is_visible_to_admins && <Owneritemlistitem item={item} />;
    else if (item.created_by == user.id) return <></>;
    else return <Memberitemlistitem item={item} members={list.members} />;
  };
  return (
    <Screen>
      {/* <TextInput
        multiline
        numberOfLines={7}
        onChangeText={(t) => console.log(JSON.parse(JSON.stringify(t)))}
      /> */}
      <Listslist data={list.item_set} renderItem={renderItem} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MyListitemScreen;
