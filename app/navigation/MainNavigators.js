import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Color from "../classes/Color";
import MylistsScreen from "../screens/MyListsScreen";
import Createlistscreen from "../screens/CreateListScreen";
import ListScreen from "../screens/ListScreen";
import MyListitemScreen from "../screens/MyListItemScreen";

const MyListTab = createMaterialTopTabNavigator();

export function MyListNavigator() {
  return (
    <MyListTab.Navigator>
      <MyListTab.Screen
        name="MyListItems"
        component={MyListitemScreen}
        options={({ route }) => {
          console.log(route);
          return {
            title: route.params.title,
            headerStyle: {
              backgroundColor: route.params.theme_color.hex,
              borderWidth: 0,
            },
            headerTransparent: true,
          };
        }}
      />
      <MyListTab.Screen name="People" component={MyListitemScreen} />
    </MyListTab.Navigator>
  );
}

const MyListsStack = createStackNavigator();

export const MyListsNavigator = () => (
  <MyListsStack.Navigator
    sceneContainerStyle={{ backgroundColor: Color.lighterGray }}
    screenOptions={{
      headerStyle: {
        backgroundColor: Color.primaryOrange,
        height: 65,
      },
      headerTintColor: Color.lighterGray,
      headerTitleAlign: "center",
      headerTitleStyle: {
        color: Color.lighterGray,
      },
      gestureEnabled: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <MyListsStack.Screen name="My Lists" component={MylistsScreen} />
    <MyListsStack.Screen
      name="manageList"
      component={Createlistscreen}
      options={({ route }) => ({
        title: (route.params.mode == "edit" ? "Edit" : "Create new") + " list",
      })}
    />
    <MyListsStack.Screen
      name="List"
      component={MyListNavigator}
      // options={({ route }) => {
      //   console.log(route);
      //   return {
      //     title: route.params.title,
      //     headerStyle: {
      //       backgroundColor: route.params.theme_color.hex,
      //       borderWidth: 0,
      //     },
      //     headerTransparent: true,
      //   };
      // }}
    />
  </MyListsStack.Navigator>
);
