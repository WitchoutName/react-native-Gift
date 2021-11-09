import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
} from "react-native";
import Color from "../classes/Color";

import { getUserImage } from "../services/userService";
import IconButton from "./common/IconButton";

const MyListsListItem = ({
  item,
  onActivateList,
  onDeleteList,
  onEditList,
}) => {
  return (
    <TouchableOpacity
      onPress={() => onActivateList(item.id)}
      style={[styles.item]}
    >
      <Text numberOfLines={1} style={styles.text}>
        {item.title}
      </Text>
      <View style={styles.btnGroup}>
        <IconButton
          style={styles.leave}
          icon={{ name: "edit", size: 17, color: "dodgerblue" }}
          onPress={() => onEditList(item.id)}
        />
        <IconButton
          style={styles.leave}
          icon={{ name: "delete", size: 18, color: Color.dangerRed }}
          onPress={() => onDeleteList(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderWidth: 1.5,
    borderColor: Color.primaryOrange,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    flex: 8,
    fontSize: 16,
  },
  leave: {
    margin: 0,
    height: 30,
    width: 30,
  },
  btnGroup: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default MyListsListItem;
