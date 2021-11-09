import React from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import VirtualizedList from "./common/VirtualizedList";
const screenWidth = Dimensions.get("window").width;

const separator = () => <View style={{ height: 10 }}></View>;

const Listslist = ({ renderItem, data }) => {
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
          keyExtractor={(i) => i.id.toString()}
          //   refreshing={refreshing}
          //   onRefresh={() => {
          //     list.id &&
          //       api.list.getList(list.id).then(({ data: l }) => {
          //         setList(l);
          //       });
          //   }}
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
