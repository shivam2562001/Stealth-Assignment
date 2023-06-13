import { StyleSheet, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./src/routes/BottomTab";
import BackIcon from "./src/images/backIcon.png";
import Navbar from "./src/components/Navbar";
import BottomSheet from "@gorhom/bottom-sheet";
import { useRef, useMemo} from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SearchScreen from "./src/screens/SearchScreen";
import DomainProvider from "./src/context/DomainContext";


export default function App() {

  const bottomSheetRef = useRef(null);


  const snapPoints = useMemo(() => ["25%", "50%", "70%"], []);





  
  return (
    <DomainProvider>
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.navStyle}>
          <Navbar label={"ASK"} icon={BackIcon} />
        </View>
        <NavigationContainer>
          <BottomTab
            bottomSheetRef={bottomSheetRef}
          />
        </NavigationContainer>

        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={snapPoints}
        >
          <SearchScreen
            bottomSheetRef={bottomSheetRef}
          />
        </BottomSheet>
      </GestureHandlerRootView>
    </SafeAreaView>
    </DomainProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f2f5",
  },
  navStyle: {
    height: 60,
    marginTop: 44,
  },
});
