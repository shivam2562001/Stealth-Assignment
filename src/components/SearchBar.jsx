import React from "react";
import { StyleSheet, TextInput, View, Image } from "react-native";
import debounce from "../utils/debounce";
import SearchIcon from "../images/searchIcon.png";
const SearchBar = (props) => {
  return (<>
   <View style={styles.searchSection}>
        <Image style={styles.searchIcon} source={SearchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Search domains here"
          //value={props.searchPhrase}
          onChangeText={debounce(props.setSearchPhrase,600)}
          underlineColorAndroid="transparent"
        />
      </View>
  </>
   
   
  );
};

export default SearchBar;

const styles = StyleSheet.create({

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
