import React, { useContext } from "react";
import { StyleSheet, Alert } from "react-native";
import { List, Button } from "react-native-paper";

import Color from "../classes/Color";
import appContext from "../context/appContext";
import Screen from "../components/common/Screen";
import Listmembergroupheader from "../components/ListMemberGroupHeader";
import Listmemberlistitem from "../components/ListMemberListItem";
import useList from "../hooks/useList";

const getInvited = (list) => {
  let invited = { M: [], A: [], O: [] };
  (list.listinvite_set || []).forEach((i) => {
    invited[i.member_type].push(i);
  });
  return invited;
};
const Mylistpeoplescreen = ({ navigation }) => {
  const { user, listMethods, loader } = useContext(appContext);
  const list = useList();
  const invited = getInvited(list);
  let people = [
    {
      title: ["Members", "M"],
      set: list.members.filter(
        (m) => !list.admins.map((a) => a.id).includes(m.id)
      ),
      add: () => {
        navigation.navigate("inviteToList", {
          onInvite: async (listUser) => {
            loader.set(true);
            await listMethods.inviteUser(list, listUser, "M");
            await listMethods.getList(list.id);
            loader.set(false);
            navigation.goBack();
          },
          title: "Invite a member",
        });
      },
      clickable: list.admins.map((a) => a.id).includes(user.id),
    },
    {
      title: ["Owner", "O"],
      set: list.admins.filter((a) => a.id == list.creator),
    },
    {
      title: ["Coowners", "A"],
      set: list.admins.filter((a) => a.id != list.creator),
      add: () => {},
      clickable: list.creator == user.id,
    },
  ];
  people = [people[1], people[2], people[0]];

  function getUserKickable(listUser) {
    return !(
      listUser.id == list.creator ||
      user.id == listUser.id ||
      (people[1].set.map((a) => a.id).includes(user.id) &&
        group.title[0] === "Coowners")
    );
  }

  function getRight(item, joined = true) {
    return joined
      ? () =>
          getUserKickable(item) && (
            <Button
              color={Color.dangerRed}
              compact={true}
              onPress={() => listMethods.kickUser(list, item)}
            >
              Kick
            </Button>
          )
      : () => (
          <Button
            color={Color.dangerRed}
            compact={true}
            onPress={() => listMethods.cancelInvite(list, item)}
          >
            Cancel invite
          </Button>
        );
  }

  const addMember = (config) => {};

  return (
    <Screen style={styles.container}>
      {people.map((group) => (
        <React.Fragment key={group.title[0]}>
          <Listmembergroupheader group={group} />
          <List.Section style={{ width: "95%", marginHorizontal: "2.5%" }}>
            {group.set.map((item) => (
              <Listmemberlistitem
                key={item.id}
                item={item}
                right={getRight(item, true)}
              />
            ))}
            {invited[group.title[1]].map((item) => (
              <Listmemberlistitem
                key={item.user.id}
                style={{ backgroundColor: Color.lightGray }}
                item={item.user}
                right={getRight(item.user, false)}
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
