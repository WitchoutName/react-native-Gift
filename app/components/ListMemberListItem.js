import React from "react";
import { Image, StyleSheet } from "react-native";
import { List, Avatar } from "react-native-paper";

import IconButton from "./common/IconButton";
import Color from "../classes/Color";
import { getUserImage } from "./../services/userService";
import Userimage from "./common/UserImage";
import { Button } from "react-native-paper";

const Listmemberlistitem = ({ item, isKickable }) => {
  return (
    <List.Item
      key={item.id}
      title={item.username}
      description={item.email}
      left={() => <Userimage user={item} />}
      right={() =>
        isKickable && (
          <Button
            color={Color.dangerRed}
            compact={true}
            onPress={() => console.log("Pressed")}
          >
            Kick
          </Button>
        )
      }
    />
  );
};

const styles = StyleSheet.create({
  leave: {
    width: 35,
    height: 35,
    borderWidth: 3,
  },
});

export default Listmemberlistitem;
