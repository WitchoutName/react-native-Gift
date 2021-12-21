import { useContext } from "react";
import appContext from "../context/appContext";

const useList = () => {
  const { currentLists } = useContext(appContext);
  return currentLists[currentLists.active];
};

export default useList;
