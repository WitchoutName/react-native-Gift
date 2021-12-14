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
import Listscreenheadertitle from "../components/ListScreenHeaderTitle";
import TabBarTop from "./ListScreenNavigatorBar";
import Mylistpeoplescreen from "../screens/MyListPeopleScreen";

const MyListTab = createMaterialTopTabNavigator();

export function MyListNavigator() {
  return (
    <MyListTab.Navigator tabBar={(props) => <TabBarTop {...props} />}>
      <MyListTab.Screen
        name="MyListItems"
        component={MyListitemScreen}
        options={({ route }) => {
          return {
            headerStyle: {
              height: 65,
            },
            title: "Items",
            headerStyle: {
              backgroundColor: route.params.theme_color.hex,
            },
            headerTransparent: true,
            tabBarIndicatorStyle: {
              backgroundColor: route.params.theme_color.hex,
            },
            tabBarPressColor: route.params.theme_color.hex,
          };
        }}
      />
      <MyListTab.Screen
        name="ListPeople"
        component={Mylistpeoplescreen}
        options={{ title: "People" }}
      />
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
      options={({ route }) => {
        return {
          title: route.params.params.title,
          headerStyle: {
            backgroundColor: route.params.params.theme_color.hex,
            height: 75,
          },
          headerTitle: () => (
            <Listscreenheadertitle list={route.params.params} />
          ),
        };
      }}
      // options={{}}
    />
  </MyListsStack.Navigator>
);
