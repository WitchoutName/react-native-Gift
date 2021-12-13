import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
} from "react-native";
import Color from "../classes/Color";
import { useNavigation } from "@react-navigation/native";

import { getUserImage } from "../services/userService";
import IconButton from "./common/IconButton";
import UrlIcon from "./UrlIcon";
import appContext from "../context/appContext";

const MyListsListItem = ({ item, onActivate, onDelete, onEdit }) => {
  const ctx = useContext(appContext);

  return (
    <TouchableOpacity onPress={() => onActivate(item.id)} style={[styles.item]}>
      <UrlIcon icon={item.icon} color={item.theme_color.hex} size={32} />
      <Text numberOfLines={1} style={styles.text}>
        {item.title}
      </Text>
      <View style={styles.btnGroup}>
        <IconButton
          style={styles.leave}
          icon={{ name: "edit", size: 17, color: "dodgerblue" }}
          onPress={() => onEdit(item.id)}
        />
        <IconButton
          style={styles.leave}
          icon={{ name: "delete", size: 18, color: Color.dangerRed }}
          onPress={() => onDelete(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginHorizontal: 10,
    borderWidth: 1.2,
    borderColor: Color.primaryOrange,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    flex: 8,
    fontSize: 16,
    marginLeft: 8,
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
