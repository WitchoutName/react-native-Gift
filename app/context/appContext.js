import { createContext } from "react";

export default createContext({
  user: {},
  lists: {},
  invites: {},
  loader: { get: false, set: () => {} },
  listMethods: { getList: async () => {}, getLists: async () => {} },
  icons: {},
});
