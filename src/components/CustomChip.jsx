import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import CloseIcon from "../images/closeIcon.png";
export default function CustomChip({
  title,
  color = "#FFFFFF",
  showIcon = true,
  onPress = () => {},
}) {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <View style={styles.label}>
        <Text>{title}</Text>
      </View>
      {showIcon && (
        <TouchableOpacity onPress={onPress}>
          <Image style={styles.image} source={CloseIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    borderRadius: 6,
    maxWidth: 150,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  image: {
    width: 18,
    height: 14,
  },
  label: {
    width: 100,
  },
});
