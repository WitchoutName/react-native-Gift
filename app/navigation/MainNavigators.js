import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import Color from "../classes/Color";
import MylistsScreen from "../screens/MyListsScreen";
import Createlistscreen from "../screens/CreateListScreen";
import ListScreen from "../screens/ListScreen";

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
    <MyListsStack.Screen name="Create List" component={Createlistscreen} />
    <MyListsStack.Screen
      name="List"
      component={ListScreen}
      options={({ route }) => ({ title: route.params.title })}
    />
  </MyListsStack.Navigator>
);
