import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import HomeIcon from "../images/homeIcon.png";
import ExploreIcon from "../images/exploreIcon.png";
import ExploreScreen from "../screens/ExploreScreen";
import { Image, StyleSheet } from "react-native";
const Tab = createBottomTabNavigator();

export default function BottomTab({
  bottomSheetRef,
}) {
  const Home = (props) => {
    return (
      <HomeScreen
        {...props}
        bottomSheetRef={bottomSheetRef}
      />
    );
  };
 

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Image style={{ width: 20, height: 20 }} source={HomeIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: () => (
            <Image style={{ width: 20, height: 20 }} source={ExploreIcon} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "20px",
    height: "20px",
    resizeMode: "contain",
  },
});
