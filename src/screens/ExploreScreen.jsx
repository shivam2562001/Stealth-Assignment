import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState, useMemo, useContext } from "react";
import HeaderText from "../components/HeaderText";
import LightText from "../components/LightText";
import generateRandomColor from "../utils/generateRandomColor";
import CustomChip from "../components/CustomChip";
import { SimpleGrid } from "react-native-super-grid";
import SearchBar from "../components/SearchBar";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DomainContext } from "../context/DomainContext";

export default function ExploreScreen() {
  const {
    selectedDomains,
    setSelectedDomains,
    setDomainsList,
    subDomains,
    setSubDomains,
  } = useContext(DomainContext);


  const [searchPhrase, setSearchPhrase] = useState("");

  const removeSubDomain = (id) => {
    const updatedSubDomains = subDomains.filter((item) => item.domainID !== id);
    setSubDomains(updatedSubDomains);
  };

  const removeDomain = (id) => {
    const updatedDomains = selectedDomains.find((item) => item._id == id);
    const updatedSelectedDomains = selectedDomains.filter(
      (item) => item._id !== id
    );
    removeSubDomain(id);
    setSelectedDomains(updatedSelectedDomains);
    setDomainsList((domains) => [...domains, updatedDomains]);
  };

  const handleSubDomainSelection = (domainId, subDomainIndex) => {
    const selectedSubDomain = selectedDomains.find(
      (domain) => domain._id === domainId
    );

    const updatedSubDomains = subDomains.map((item, index) => {
      if (index === subDomainIndex) {
        item.color = selectedSubDomain.color;
      }
      return item;
    });
    setSubDomains(updatedSubDomains);
  };

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
        {!selectedDomains.length && <View style={styles.emptyView}><Text style={styles.emptyText}>No domain selected</Text></View>} 
        <SearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
        />

        <ScrollView>
          <View>
            <SimpleGrid
              itemDimension={100}
              data={selectedDomains}
              renderItem={({ item }) => (
                <CustomChip
                  title={item.name}
                  color={item.color}
                  onPress={() => {
                    removeDomain(item._id);
                  }}
                />
              )}
            />
          </View>

          <View>
            <HeaderText text={"Subdomains"} />
          </View>
          <SimpleGrid
            itemDimension={120}
            data={subDomains}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => {
                  handleSubDomainSelection(item.domainID, index);
                }}
              >
                <CustomChip
                  title={item.name}
                  showIcon={false}
                  color={item.color}
                />
              </TouchableOpacity>
            )}
          />
        </ScrollView>
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
  emptyText: {
    fontSize: 20,
    fontWeight: 300,
  },
  emptyView: {
    paddingVertical: 50,
    display: "flex",
    alignItems: "center",
  },
});
