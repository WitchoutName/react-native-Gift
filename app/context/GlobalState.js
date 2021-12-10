import React, { useState, useEffect } from "react";
import { View, StyleSheet, ToastAndroid } from "react-native";

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

  const takeCareOfRequest = async ({ request, callback, error }) => {
    setLoader(true);
    const result = await request.method(
      ...(typeof request.params === Array ? request.params : [request.params])
    );
    const reasonPhrase = ReasonPhrases[StatusCodes[`${result.status}`]];
    setLoader(false);
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
    getLists: async () => {
      await takeCareOfRequest({
        request: { method: api.list.getLists },
        callback: async ({ data: l, ok }) => {
          if (ok) setLists(l);
        },
        error: "Failed to get lists",
      });
    },
    getList: async (id) => {
      const { data, ok } = await takeCareOfRequest({
        request: {
          method: api.list.getList,
          params: id,
        },
        error: "Failed to get list",
      });
      return { list: data, ok };
    },
    createList: async (list) => {
      const result = await takeCareOfRequest({
        request: {
          method: api.list.createList,
          params: list,
        },
        callback: ({ ok, data }) => {
          if (ok) setLists([data, ...lists]);
        },
        error: "Failed to create list",
      });
      return result;
    },
  };

  useEffect(() => {
    api.http.setAuthToken("3e88cafbd977cf8585f9a8e01cca20b22586a7ba");
    api.auth.getUser().then(({ data, ok }) => {
      if (ok) setUser(data);
      else {
        console.log(data);
        ToastAndroid.show("Failed to get user information", 1000);
      }
    });
    api.icon.getListIcons().then(({ data, ok }) => {
      if (ok)
        setListIcons(
          data.map((i) => ({ ...i, image: api.icon.getIcon(i.image) }))
        );
      else {
        console.log(data);
        ToastAndroid.show("Failed to load icons", 1000);
      }
    });
    api.icon.getThemeColors().then(({ data, ok }) => {
      if (ok) setThemeColors(data);
      else {
        console.log(data);
        ToastAndroid.show("Failed to load icons", 1000);
      }
    });

    listMethods.getLists();
  }, []);

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
