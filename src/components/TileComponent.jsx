import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export default function TileComponent({ title, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.titleText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    borderBottomColor: "#DEDEDE",
    borderBottomWidth: 1,
  },
  titleText: {
    fontWeight: 400,
    fontSize: 12,
    color: "#4A4A4A",
  },
});
