import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { SearchBar } from "react-native-elements";
import { Button, List } from "react-native-paper";
import Color from "../classes/Color";

import Screen from "../components/common/Screen";
import Listmemberlistitem from "../components/ListMemberListItem";
import appContext from "../context/appContext";
import useList from "../hooks/useList";

const Listinvitescreen = ({ route }) => {
  const { listMethods } = useContext(appContext);
  const list = useList();
  const { onInvite, title } = route.params;
  const [filter, setFilter] = useState("");
  const [users, setUsers] = useState([]);

  function getFilteredUsers() {
    return users;
  }

  useEffect(() => {
    listMethods.getUsers().then(({ ok, data }) => {
      if (ok) setUsers(data);
    });
  }, []);

  return (
    <Screen /*style={{ alignItems: "stretch" }}*/>
      <Text style={styles.title}>{title}</Text>
      <SearchBar
        lightTheme
        placeholder="Search users by username or email..."
        containerStyle={styles.search}
        inputContainerStyle={styles.innerSearch}
        onChangeText={(t) => setFilter(t)}
        onClear={(t) => setFilter("")}
        value={filter}
      />
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
                  onPress={async () => await onInvite(item)}
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
