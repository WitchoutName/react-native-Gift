import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import VirtualizedList from "./common/VirtualizedList";
import appContext from "../context/appContext";
const screenWidth = Dimensions.get("window").width;

const separator = () => <View style={{ height: 10 }}></View>;

const Listslist = ({ renderItem, data }) => {
  const ctx = useContext(appContext);
  const [refreshing, setRefreshing] = useState(false);
  return (
    <View style={[styles.scrollBox]}>
      <VirtualizedList>
        <FlatList
          style={{ width: screenWidth, flexGrow: 0 }}
          contentContainerStyle={{ paddingVertical: 10 }}
          key={"0"}
          data={data}
          renderItem={renderItem}
          ItemSeparatorComponent={separator}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          removeClippedSubviews={true}
          windowSize={10}
          keyExtractor={(i) => {
            return `${i.id}`;
          }}
          refreshing={refreshing}
          onRefresh={() => ctx.listMethods.getLists()}
        />
      </VirtualizedList>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollBox: {
    // flex: 1,
    width: "100%",
    flexShrink: 1,
  },
  lists: {
    flex: 1,
    overflow: "hidden",
  },
});

export default Listslist;
