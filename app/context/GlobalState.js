import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import Context from "./appContext";
import api from "../services";

const GlobalState = ({ children }) => {
  const [user, setUser] = useState({ username: "heeehee" });
  const [lists, setLists] = useState([]);
  const context = {
    user,
    lists,
  };

  useEffect({}, []);

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export default GlobalState;
