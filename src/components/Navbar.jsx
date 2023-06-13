import { StyleSheet, View, Text, Image } from "react-native";
import React from "react";

function Navbar({ label, icon }) {
  return (
    <View style={styles.navbar}>
      <Image style={{ width: 20, height: 20 }} source={icon} />
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>{label}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
    height: 60,
    padding: 10,
  },
  labelContainer: {
    paddingLeft: 30,
  },
  labelText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default Navbar;
