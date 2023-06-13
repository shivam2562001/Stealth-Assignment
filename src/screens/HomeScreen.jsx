import { StyleSheet, View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import DashboardIcon from "../images/dashboardIcon.png";
import CustomButton from "../components/CustomButton";
import HeaderText from "../components/HeaderText";
import LightText from "../components/LightText";

export default function HomeScreen({ bottomSheetRef }) {


  return (
    <View style={styles.container}>
      <View style={styles.textSectionStyle}>
        <Text style={styles.textStyle}>
          Let’s dig deeper into your requirements
        </Text>

        <View style={styles.headerStyle}>
          <HeaderText text={"Domain"} />
          <LightText text={"Please select min. 1 and max. 5 domains"} />
        </View>

        <View style={styles.imageSectionStyle}>
          <Image style={styles.imageStyle} source={DashboardIcon} />
        </View>

        <View style={styles.buttonSectionStyle}>
          <CustomButton
            onPress={() => bottomSheetRef.current.expand()}
            buttonText={"Search for domains"}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f2f5",
    padding: 20,
    flexDirection: "row",
  },
  textStyle: {
    fontWeight: 600,
    fontSize: 16,
  },
  headerStyle: {
    marginTop: 10,
  },
  textSectionStyle: {
    flex: 3,
  },
  imageSectionStyle: {
    flex: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    width: 286,
    height: 284,
  },
  buttonSectionStyle: {
    flex: 1,
  },
});
