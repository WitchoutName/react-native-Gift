import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./app/navigation/AppNavigator";
import GlobalState from "./app/context/GlobalState";
import { View } from "react-native";
import Loader from "./app/components/common/Loader";
import appContext from "./app/context/appContext";

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
