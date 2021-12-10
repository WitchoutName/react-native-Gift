import React from "react";
import { Platform, StatusBar, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AppNavigatorBar from "./AppNavigatorBar";
import { MyListsNavigator } from "./MainNavigators";
import OthersListsScreen from "./../screens/OthersListsScreen";
import CatalogScreen from "./../screens/CatalogScreen";
import ProfileScreen from "./../screens/ProfileScreen";
import Color from "../classes/Color";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarHideOnKeyboard: true,
      tabBarStyle: [{ display: "flex" }],
    }}
    tabBar={(props) => <AppNavigatorBar {...props} />}
  >
    <Tab.Screen
      name="myLists"
      component={MyListsNavigator}
      options={{ title: "My lists" }}
    />
    {/* <Tab.Screen name="Others Lists" component={OthersListsScreen} /> */}
    <Tab.Screen name="Catalog" component={CatalogScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
    <Tab.Screen name="Activity" component={ProfileScreen} />
  </Tab.Navigator>
);

export default AppNavigator;
