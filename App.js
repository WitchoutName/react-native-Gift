import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./app/navigation/AppNavigator";
import GlobalState from "./app/context/GlobalState";

export default function App() {
  return (
    <GlobalState>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </GlobalState>
  );
}
