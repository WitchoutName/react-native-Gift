import React from "react";
import { Platform, StatusBar, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AppNavigatorBar from "./AppNavigatorBar";
import MyListsScreen from "./../screens/MyListsScreen";
import OthersListsScreen from "./../screens/OthersListsScreen";
import CatalogScreen from "./../screens/CatalogScreen";
import ProfileScreen from "./../screens/ProfileScreen";
import Color from "../classes/Color";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    sceneContainerStyle={{ backgroundColor: Color.lighterGray }}
    screenOptions={{
      headerStyle: {
        backgroundColor: Color.primaryOrange,
        height: 65,
      },
      headerTitleAlign: "center",
      headerTitleStyle: {
        color: Color.lighterGray,
      },
    }}
    tabBar={(props) => <AppNavigatorBar {...props} />}
  >
    <Tab.Screen name="My Lists" component={MyListsScreen} />
    <Tab.Screen name="Others Lists" component={OthersListsScreen} />
    <Tab.Screen name="Catalog" component={CatalogScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
    <Tab.Screen name="Activity" component={ProfileScreen} />
  </Tab.Navigator>
);

export default AppNavigator;
