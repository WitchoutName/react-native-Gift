import React, { useContext } from "react";
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
import appContext from "../context/appContext";
import CatalogScreen from "./../screens/CatalogScreen";

const MyListTab = createMaterialTopTabNavigator();

const Temp = () => <></>;

export const MyListNavigator = () => {
  const { currentLists } = useContext(appContext);
  const list = currentLists[currentLists.active];
  const listColor = list.theme_color ? list.theme_color.hex : "dodgerblue";
  // console.log(list);
  return (
    <MyListTab.Navigator tabBar={(props) => <TabBarTop {...props} />}>
      {list.id ? (
        <>
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
                  backgroundColor: listColor,
                },
                headerTransparent: true,
                tabBarIndicatorStyle: {
                  backgroundColor: listColor,
                },
                tabBarPressColor: listColor,
              };
            }}
          />
          <MyListTab.Screen
            name="ListPeople"
            component={Mylistpeoplescreen}
            options={{ title: "People" }}
          />
        </>
      ) : (
        <MyListTab.Screen name="temp" component={Temp} />
      )}
    </MyListTab.Navigator>
  );
};

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
    // console.log(route.params);
    return {
      title: route.params.title,
      headerStyle: {
        backgroundColor: route.params.theme_color.hex,
        height: 75,
      },
      headerTitle: () => <Listscreenheadertitle list={route.params} />,
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
      component={MyListNavigator}
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
      component={MyListNavigator}
    />
  </OthersListsStack.Navigator>
);
