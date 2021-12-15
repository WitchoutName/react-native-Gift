import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Color from "../classes/Color";
import ListsScreen from "../screens/ListsScreen";
import Createlistscreen from "../screens/CreateListScreen";
import ListScreen from "../screens/ListScreen";
import MyListitemScreen from "../screens/MyListItemScreen";
import Listscreenheadertitle from "../components/ListScreenHeaderTitle";
import TabBarTop from "./ListScreenNavigatorBar";
import Mylistpeoplescreen from "../screens/MyListPeopleScreen";

const MyListTab = createMaterialTopTabNavigator();

export function MyListNavigator(screenName) {
  function Nav() {
    return (
      <MyListTab.Navigator tabBar={(props) => <TabBarTop {...props} />}>
        <MyListTab.Screen
          name={screenName}
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
  return Nav;
}

const MyListsStack = createStackNavigator();
const OthersListsStack = createStackNavigator();

const listsStackProps = {
  sceneContainerStyle: { backgroundColor: Color.lighterGray },
  screenOptions: {
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
  },
};

const listScreenProps = {
  options: ({ route }) => {
    return {
      title: route.params.params.title,
      headerStyle: {
        backgroundColor: route.params.params.theme_color.hex,
        height: 75,
      },
      headerTitle: () => <Listscreenheadertitle list={route.params.params} />,
    };
  },
};

const manageListScreenProps = {
  name: "manageList",
  component: Createlistscreen,
  options: ({ route }) => ({
    title: (route.params.mode == "edit" ? "Edit" : "Create new") + " list",
  }),
};

export const MyListsNavigator = () => (
  <MyListsStack.Navigator {...listsStackProps}>
    <MyListsStack.Screen name="My Lists" component={ListsScreen} />
    <MyListsStack.Screen {...manageListScreenProps} />
    <MyListsStack.Screen
      {...listScreenProps}
      name="MyList"
      component={MyListNavigator("MyListItems")}
    />
  </MyListsStack.Navigator>
);

export const OthersListsNavigator = () => (
  <OthersListsStack.Navigator {...listsStackProps}>
    <OthersListsStack.Screen name="Others Lists" component={ListsScreen} />
    <OthersListsStack.Screen {...manageListScreenProps} />
    <OthersListsStack.Screen
      {...listScreenProps}
      name="OthersList"
      component={MyListNavigator("OthersListItems")}
    />
  </OthersListsStack.Navigator>
);
