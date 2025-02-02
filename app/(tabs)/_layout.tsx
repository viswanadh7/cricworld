import { Tabs } from "expo-router";
import { Image } from "react-native";

const TabLayout = () => {
  return (
    <Tabs initialRouteName="matches">
      <Tabs.Screen
        name="feed"
        options={{
          headerShown: false,
          title: "Feed",
          tabBarIcon: ({ focused }) => (
            <Image
              style={{
                height: 30,
                width: 30,
                tintColor: `${focused ? "#ff7800" : "black"}`,
              }}
              source={require("../../assets/icons/newspaper-folded.png")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="matches"
        options={{
          headerShown: false,
          title: "Matches",
          tabBarIcon: ({ focused }) => (
            <Image
              style={{
                height: 30,
                width: 30,
                tintColor: `${focused ? "#ff7800" : "black"}`,
              }}
              source={require("../../assets/icons/wicket.png")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Browse",
          tabBarIcon: ({ focused }) => (
            <Image
              style={{
                height: 30,
                width: 30,
                tintColor: `${focused ? "#ff7800" : "black"}`,
              }}
              source={require("../../assets/icons/category.png")}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
