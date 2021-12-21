import React, { useContext } from "react";
import { View, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./app/navigation/AppNavigator";
import GlobalState from "./app/context/GlobalState";
import Loader from "./app/components/common/Loader";
import appContext from "./app/context/appContext";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

export default function App() {
  return (
    <GlobalState>
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
        <Loader />
      </View>
    </GlobalState>
  );
}
