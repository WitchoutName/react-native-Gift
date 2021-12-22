import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Userimage from "./common/UserImage";

const Activityuser = ({ user }) => {
  return (
    <View style={styles.container}>
      <Userimage user={user} size={25} />
      <Text>{user.username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default Activityuser;
