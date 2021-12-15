import React from "react";
import { Platform, StatusBar, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CardStyleInterpolators } from "@react-navigation/stack";

import AppNavigatorBar from "./AppNavigatorBar";
import { MyListsNavigator, OthersListsNavigator } from "./MainNavigators";
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
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
    tabBar={(props) => <AppNavigatorBar {...props} />}
  >
    <Tab.Screen
      name="myLists"
      component={MyListsNavigator}
      options={{ title: "My lists" }}
    />
    <Tab.Screen
      name="othersLists"
      options={{ title: "Others Lists" }}
      component={OthersListsNavigator}
    />
    <Tab.Screen name="Catalog" component={CatalogScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
    <Tab.Screen name="Activity" component={ProfileScreen} />
  </Tab.Navigator>
);

export default AppNavigator;
