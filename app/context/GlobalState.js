import React, { useState, useEffect } from "react";
import { View, StyleSheet, ToastAndroid, Alert } from "react-native";

import Context from "./appContext";
import api from "./../services/api";

import { StatusCodes, ReasonPhrases } from "http-status-codes";

const GlobalState = ({ children }) => {
  const [user, setUser] = useState({
    id: 1,
    username: "username",
    email: "email@email.email",
    image_url: "image_user",
    google_login: false,
  });
  const [list, setList] = useState([]);
  const [lists, setLists] = useState([]);
  const [loader, setLoader] = useState(false);
  const [listIcons, setListIcons] = useState([]);
  const [themeColors, setThemeColors] = useState([]);

  const getFormatedList = (l) => ({
    ...l,
    theme_color: themeColors.filter((c) => c.id == l.theme_color)[0] || {
      hex: "dodgerblue",
    },
    icon: listIcons.filter((i) => i.id == l.icon)[0] || {
      image: null,
    },
  });

  const takeCareOfRequest = async ({ request, callback, error, loading }) => {
    loading && setLoader(true);
    const result = await request.method(
      ...(typeof request.params === Array ? request.params : [request.params])
    );
    const reasonPhrase = ReasonPhrases[StatusCodes[`${result.status}`]];
    loading && setLoader(false);
    if (result.status >= 500) ToastAndroid.show("Server error", 1000);
    else if (result.status >= 400)
      result.data.errors ||
        ToastAndroid.show(
          typeof result.data === Object
            ? result.data.error || reasonPhrase
            : result.data || reasonPhrase,
          1000
        );
    if (!result.ok) ToastAndroid.show(error, 1000);
    callback && callback(result);
    return result;
  };

  const listMethods = {
    getLists: async ({ loading }) => {
      const res = await takeCareOfRequest({
        request: { method: api.list.getLists },
        error: "Failed to get lists",
        loading,
      });
      return res;
    },
    getList: async (id, navigation) => {
      const { data, ok } = await takeCareOfRequest({
        request: {
          method: api.list.getList,
          params: id,
        },
        callback: ({ data, ok }) => {
          const formatedData = getFormatedList(data);
          if (ok)
            navigation.navigate("List", {
              screen: "MyListItems",
              params: formatedData,
            });
        },
        error: "Failed to get list",
      });
      return { list: data, ok };
    },
    manageList: async (list) => {
      const isEdit = lists.some((l) => l.id == list.id);
      const result = await takeCareOfRequest({
        request: {
          method: isEdit ? api.list.putList : api.list.createList,
          params: list,
        },
        callback: ({ ok, data }) => {
          if (ok) {
            if (isEdit)
              setLists(
                lists.map((l) => (l.id == list.id ? getFormatedList(list) : l))
              );
            else setLists([getFormatedList(data), ...lists]);
          }
        },
        error: "Failed to create list",
      });
      return result;
    },
    deleteList: async (id) => {
      const list = lists.filter((l) => l.id == id)[0];
      Alert.alert(
        "Dlelete list",
        `Are you sure you want to premanently delete \"${list.title}\"?`,
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () =>
              takeCareOfRequest({
                request: {
                  method: api.list.deleteList,
                  params: id,
                },
                callback: ({ ok }) => {
                  if (ok) setLists(lists.filter((l) => l.id != list.id));
                },
                error: "Failed to get list",
              }),
          },
        ]
      );
    },
  };

  useEffect(async () => {
    api.http.setAuthToken("3e88cafbd977cf8585f9a8e01cca20b22586a7ba");
    api.auth.getUser().then(({ data, ok }) => {
      if (ok) setUser(data);
      else {
        console.log(data);
        ToastAndroid.show("Failed to get user information", 1000);
      }
    });
    await api.icon.getListIcons().then(({ data, ok }) => {
      if (ok)
        setListIcons(
          data.map((i) => ({ ...i, image: api.icon.getIcon(i.image) }))
        );
      else {
        console.log(data);
        ToastAndroid.show("Failed to load icons", 1000);
      }
    });
    await api.icon.getThemeColors().then(({ data, ok }) => {
      if (ok) setThemeColors(data);
      else {
        console.log(data);
        ToastAndroid.show("Failed to load icons", 1000);
      }
    });
  }, []);

  useEffect(() => {
    if (listIcons.length && themeColors.length) {
      api.list.getLists().then(({ data, ok }) => {
        if (ok) setLists(data.map((l) => getFormatedList(l)));
      });
    }
  }, [listIcons, themeColors]);

  const context = {
    user,
    lists,
    list,
    loader: {
      get: loader,
      set: setLoader,
    },
    listMethods,
    theme: {
      listIcons,
      themeColors,
    },
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export default GlobalState;
