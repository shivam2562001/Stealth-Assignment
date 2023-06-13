import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import TileComponent from "./TileComponent";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
// definition of the Item, which will be rendered in the FlatList
const Item = ({ item,onPress}) => (
    <TileComponent
    title={item.name}
    onPress={() => {onPress(item)}}
  />
);

// the filter
const List = (props) => {
  const renderItem = ({ item }) => {
    // when no input, show all
    if (props.searchPhrase === "") {
      return <Item item={item} onPress={props.onClick} />;
    }
    // filter of the name
    if (item.name.toUpperCase().includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item item={item} onPress={props.onClick} />;
    }
  
  };

  return (
    <View style={styles.listContainer}>
        <BottomSheetFlatList
          data={props.data}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      </View>
  );
};

export default List;

const styles = StyleSheet.create({
  listContainer: {
    margin: 10,
    height: "85%",
    width: "100%",
  },
});