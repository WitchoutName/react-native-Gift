import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AppNavigatorBar from "./AppNavigatorBar";
import MyListsScreen from "./../screens/MyListsScreen";
import OthersListsScreen from "./../screens/OthersListsScreen";
import CatalogScreen from "./../screens/CatalogScreen";
import ProfileScreen from "./../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator tabBar={(props) => <AppNavigatorBar {...props} />}>
    <Tab.Screen name="Catalog" component={CatalogScreen} />
    <Tab.Screen name="My Lists" component={MyListsScreen} />
    <Tab.Screen name="Others Lists" component={OthersListsScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default AppNavigator;
