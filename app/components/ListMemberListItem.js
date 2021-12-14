import React from "react";
import { Image, StyleSheet } from "react-native";
import { List, Avatar } from "react-native-paper";

import IconButton from "./common/IconButton";
import Color from "../classes/Color";

const Listmemberlistitem = ({ item, isKickable }) => {
  return (
    <List.Item
      key={item.id}
      title={item.username}
      description={item.email}
      left={() => (
        <Avatar.Image
          size={60}
          source={() => (
            <Image
              style={{ width: 60, height: 60, borderRadius: 30 }}
              source={{ uri: item.image }}
            />
          )}
        />
      )}
      right={() =>
        isKickable && (
          <IconButton
            style={styles.leave}
            icon={{ name: "delete", size: 23, color: Color.dangerRed }}
            onPress={() => onEdit(item.id)}
          />
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
