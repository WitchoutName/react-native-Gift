import React, { useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";

const VirtualizedList = ({ children }) => {
  return (
    <FlatList
      data={[]}
      renderItem={null}
      ListHeaderComponent={<>{children}</>}
      horizontal={true}
      style={{ width: "100%", flexGrow: 0 }}
    />
  );
};

const styles = StyleSheet.create({});

export default VirtualizedList;
