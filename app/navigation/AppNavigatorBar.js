import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useKeyboard } from "@react-native-community/hooks";

import ComposeIcon from "../components/common/ComposeIcon";
import Color from "../classes/Color";

const BottomIcon = ({ icon, color }) => (
  <View style={styles.bottomIcon}>{icon(color)}</View>
);

const tabIcons = [
  (color) => <FontAwesome5 name="user-alt" size={24} color={color} />,
  (color) => <FontAwesome5 name="user-friends" size={24} color={color} />,
  (color) => <FontAwesome5 name="list" size={26} color={color} />,
  (color) => <FontAwesome5 name="user-circle" size={28} color={color} />,
  (color) => <ComposeIcon name="notifications" size={28} color={color} />,
].map((x) => {
  return (color) => <BottomIcon icon={x} color={color} />;
});

export default function AppNavigatorBar({ state, descriptors, navigation }) {
  const [active, setActive] = useState(true);
  const keyboard = useKeyboard();

  // useEffect(() => {
  //   Keyboard.addListener("keyboardDidHide", () => setActive(true));
  //   Keyboard.addListener("keyboardWillShow", () => setActive(false));
  //   return () => {
  //     Keyboard.removeListener("keyboardDidHide");
  //     Keyboard.removeListener("keyboardWillShow");
  //   };
  // });
  return (
    !keyboard.keyboardShown && (
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          let additionalStyle = {};
          if (isFocused) {
            additionalStyle["backgroundColor"] = Color.primaryOrange;
            additionalStyle["borderTopLeftRadius"] = index === 0 ? 10 : 10;
            additionalStyle["borderTopRightRadius"] =
              index === state.routes.length - 1 ? 10 : 10;
            additionalStyle["height"] = "125%";
          }

          return (
            <TouchableWithoutFeedback
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
            >
              <View style={[styles.innerItem, additionalStyle]}>
                {tabIcons[index](isFocused ? Color.white : Color.darkGray)}
                <Text
                  style={{
                    fontSize: 14,
                    color: isFocused ? Color.white : Color.darkGray,
                  }}
                >
                  {label}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.lightGray,
  },
  innerItem: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
    paddingVertical: 10,
  },
  bottomIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
