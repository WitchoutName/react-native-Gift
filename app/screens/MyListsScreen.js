import React, { useContext } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import appContext from "../context/appContext";
import Screen from "../components/common/Screen";
import Listslist from "../components/ListsList";
import Listslistbutton from "../components/ListsListButton";
import MyListsListItem from "../components/MyListsListItem";

const user = {
  id: "0",
  username: "Jack Benkins",
  email: "j.ben@gmail.com",
  image_url:
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thelocal.se%2F20181221%2Fmysweden-i-enjoy-having-a-chat-with-a-random-person-but-its-difficult-to-do-that-here%2F&psig=AOvVaw1PNlD0GT2K4DpX7kIB5YAT&ust=1638387822346000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOjh4rfswPQCFQAAAAAdAAAAABAJ",
};

const otherUsers = [
  {
    id: "1",
    username: "Jack Benkins",
    email: "j.ben@gmail.com",
    image_url:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwackishlyawesomerandomness.fandom.com%2Fwiki%2FRandom_Person&psig=AOvVaw1PNlD0GT2K4DpX7kIB5YAT&ust=1638387822346000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOjh4rfswPQCFQAAAAAdAAAAABAO",
  },
  {
    id: "2",
    username: "Jack Benkins",
    email: "j.ben@gmail.com",
    image_url:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thelocal.se%2F20181221%2Fmysweden-i-enjoy-having-a-chat-with-a-random-person-but-its-difficult-to-do-that-here%2F&psig=AOvVaw1PNlD0GT2K4DpX7kIB5YAT&ust=1638387822346000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOjh4rfswPQCFQAAAAAdAAAAABAJ",
  },
];

const data = [
  {
    id: "0",
    title: "Kids Christmas",
    icon: "https://lh6.googleusercontent.com/gqYGDTA7ZEhuiYMGRfzFuMyergCwo05bg5rfZR5y2ZmQJftlnmIP2igEcYxti3IBtS_-X4PIz8Z-jw=w1880-h939",
    admins: {},
  },
  {
    id: "1",
    title: "My Birthday",
    icon: "https://lh6.googleusercontent.com/gqYGDTA7ZEhuiYMGRfzFuMyergCwo05bg5rfZR5y2ZmQJftlnmIP2igEcYxti3IBtS_-X4PIz8Z-jw=w1880-h939",
  },
  {
    id: "12",
    title: "My Birthday",
    icon: "https://lh6.googleusercontent.com/gqYGDTA7ZEhuiYMGRfzFuMyergCwo05bg5rfZR5y2ZmQJftlnmIP2igEcYxti3IBtS_-X4PIz8Z-jw=w1880-h939",
  },
];

const MylistsScreen = ({ route }) => {
  const ctx = useContext(appContext);
  const handleActivate = () => {};
  const handleEdit = () => {};
  const handleDelete = () => {};

  const renderItem = ({ item, index }) => {
    return (
      <>
        <MyListsListItem
          item={item}
          index={index}
          onActivateList={handleActivate}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </>
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
