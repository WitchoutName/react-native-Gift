import React, { useState, useEffect, useContext, useRef } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { SearchBar } from "react-native-elements";
import { Button, List } from "react-native-paper";
import Color from "../classes/Color";

import Screen from "../components/common/Screen";
import Listmemberlistitem from "../components/ListMemberListItem";
import appContext from "../context/appContext";
import useList from "../hooks/useList";

const Listinvitescreen = ({ route, navigation }) => {
  const { listMethods, user } = useContext(appContext);
  const list = useList();
  const { onInvite, title, type } = route.params;
  const [filter, setFilter] = useState("");
  const [users, setUsers] = useState([]);
  const searchBar = useRef(null);

  function getFilteredUsers() {
    return users
      .filter(
        (u) =>
          !(
            u.id == list.creator ||
            (list.members.map((m) => m.id).includes(u.id) && type == "M") ||
            (list.admins.map((m) => m.id).includes(u.id) && type == "A") ||
            u.id == user.id
          )
      )
      .filter(
        (u) =>
          filter &&
          (u.username.toLowerCase().includes(filter.toLowerCase()) ||
            u.email.toLowerCase().includes(filter.toLowerCase()))
      )
      .slice(0, 15);
  }

  useEffect(() => {
    listMethods.getUsers().then(({ ok, data }) => {
      if (ok) {
        setUsers(data);
        searchBar.current.focus();
      }
    });
  }, []);
  return (
    <Screen /*style={{ alignItems: "stretch" }}*/>
      <Text style={styles.title}>{title}</Text>
      <SearchBar
        lightTheme
        ref={searchBar}
        placeholder="Search users by username or email..."
        containerStyle={styles.search}
        inputContainerStyle={styles.innerSearch}
        onChangeText={(t) => setFilter(t)}
        onClear={(t) => setFilter("")}
        value={filter}
      />
      {!!users.length && filter == "" && (
        <Text
          style={{
            fontSize: 24,
            color: Color.lightGray,
            position: "relative",
            top: 20,
          }}
        >
          Users loaded!
        </Text>
      )}
      <ScrollView style={{ width: "100%" }}>
        <List.Section
          style={{
            width: "95%",
            marginHorizontal: "2.5%",
          }}
        >
          {getFilteredUsers().map((item) => (
            <Listmemberlistitem
              key={item.id}
              item={item}
              right={() => (
                <Button
                  color={Color.successGreen}
                  compact={true}
                  onPress={async () => {
                    if (await onInvite(item)) navigation.goBack();
                  }}
                >
                  Invite
                </Button>
              )}
            />
          ))}
        </List.Section>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginTop: 15,
  },
  search: {
    width: "95%",
    padding: 0,
    marginTop: 15,
    borderWidth: 0,
    backgroundColor: Color.white,
    borderColor: Color.white,
    elevation: 0,
  },
  innerSearch: {
    // width: "95%",
    backgroundColor: Color.lightGray,
  },
});

export default Listinvitescreen;
