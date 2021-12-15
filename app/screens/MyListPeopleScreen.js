import React, { useContext } from "react";
import { StyleSheet, Alert } from "react-native";
import { List } from "react-native-paper";

import appContext from "../context/appContext";
import Screen from "../components/common/Screen";
import Listmembergroupheader from "../components/ListMemberGroupHeader";
import Listmemberlistitem from "../components/ListMemberListItem";

const getFormatedPeople = (list) => {
  const people = [
    {
      title: "Members",
      set: list.members.filter(
        (m) => !list.admins.map((a) => a.id).includes(m.id)
      ),
      add: () => {},
    },
    {
      title: "Owner",
      set: list.admins.filter((a) => a.id == list.creator),
    },
    {
      title: "Coowners",
      set: list.admins.filter((a) => a.id != list.creator),
      add: () => {},
    },
  ];
  return [people[1], people[2], people[0]];
};

const Mylistpeoplescreen = () => {
  const { list, user } = useContext(appContext);
  const people = getFormatedPeople(list);

  return (
    <Screen style={styles.container}>
      {people.map((group) => (
        <React.Fragment key={group.title}>
          <Listmembergroupheader group={group} />
          <List.Section style={{ width: "95%", marginHorizontal: "2.5%" }}>
            {group.set.map((item) => (
              <Listmemberlistitem
                key={item.id}
                item={item}
                isKickable={
                  !(
                    item.id == list.creator ||
                    user.id == item.id ||
                    (people[1].set.map((a) => a.id).includes(user.id) &&
                      group.title === "Coowners")
                  )
                }
              />
            ))}
          </List.Section>
        </React.Fragment>
      ))}
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "stretch" },
});

export default Mylistpeoplescreen;
