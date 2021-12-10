import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Color from "../../classes/Color";

const AppTextInput = ({ icon, hasError, ...otherProps }) => {
  return (
    <View style={{ ...styles.container, marginBottom: hasError ? 3 : 10 }}>
      {icon && (
        <MaterialCommunityIcons name={icon} size={20} style={styles.icon} />
      )}
      <TextInput
        style={styles.textInput}
        placeholderTextColor={Color.inputText}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    borderRadius: 5,
    flexDirection: "row",
    width: "80%",
    padding: 8,
    marginVertical: 10,
    // elevation: 10,
    borderColor: Color.darkGray,
    borderWidth: 0.5,
  },
  textInput: {
    fontSize: 18,
    padding: 1,
    fontWeight: "600",
    //fontFamily: "varela",
    width: "70%",
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
