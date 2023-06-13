import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useState, useContext } from "react";
import React from "react";
import HeaderText from "../components/HeaderText";
import LightText from "../components/LightText";
import CloseIcon from "../images/closeIcon.png";
import List from "../components/List";
import generateRandomColor from "../utils/generateRandomColor";
import SearchBar from "../components/SearchBar";
import { DomainContext } from "../context/DomainContext";

export default function SearchScreen({ bottomSheetRef }) {
  const {
    selectedDomains,
    setSelectedDomains,
    domainsList,
    setDomainsList,
    setSubDomains,
  } = useContext(DomainContext);
  
  const [searchPhrase, setSearchPhrase] = useState("");

  const addColorToDomains = (selectedDomainList ) => {
    const updatedDomains = selectedDomainList.map((item) => {
      item["color"] = generateRandomColor();
      return item;
    });

    setSelectedDomains(updatedDomains);
  };

  const extractSubDomain = (selectedDomainList) => {
    let subdomains = [];
    
    selectedDomainList.forEach((item) => {
      const currentItemSubdomains = item.domainTags.map((item) => {
        return {
          id: item._id,
          name: item.name,
          domainID: item.domain,
          color: "#ffffff",
        };
      });
      subdomains = [...subdomains, ...currentItemSubdomains];
    });

    setSubDomains([...subdomains]);
  };

  const selectDomains = (domain) => {
    const updatedDomainList = domainsList.filter(
      (item) => item._id !== domain._id
    );

    setDomainsList(updatedDomainList);
    let selectedDomainList = [...selectedDomains, domain]
    setSelectedDomains(selectedDomainList);
    addColorToDomains(selectedDomainList);
    extractSubDomain(selectedDomainList);
  };

  return (
    <View style={styles.conatiner}>
      <View style={styles.headerStyle}>
        <HeaderText text={"Add Domains"} />
        <TouchableOpacity
          onPress={() => {
            bottomSheetRef.current.close();
          }}
        >
          <Image source={CloseIcon} style={styles.imageStyle} />
        </TouchableOpacity>
      </View>
      <LightText text={"Please add at-least 2 amenities to proceed"} />
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
      />
      <View style={{ marginTop: 12 }}>
        <Text style={styles.subheaderTextStyle}>All({domainsList.length})</Text>
        <View style={styles.ListViewStyle}>
          {!domainsList ? (
            <ActivityIndicator size="large" />
          ) : (
            <List
              searchPhrase={searchPhrase}
              data={domainsList}
              onClick={selectDomains}
            />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    paddingHorizontal: 16,
  },
  headerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  imageStyle: {
    width: 24,
    height: 24,
  },
  searchSection: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#DEDEDE",
    paddingLeft: 5,
  },
  searchIcon: {
    paddingLeft: 10,
    width: 20,
    height: 20,
  },
  input: {
    flex: 1,
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    backgroundColor: "#fff",
    color: "#424242",
  },
  subheaderTextStyle: {
    fontWeight: 700,
    fontSize: 15,
    color: "#0F0F0F",
  },
  ListViewStyle: {
    paddingHorizontal: 10,
    marginTop: 20,
  },
});
