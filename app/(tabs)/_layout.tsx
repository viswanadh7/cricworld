import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="feed"
        options={{ headerShown: false, title: "Feed" }}
      />
      <Tabs.Screen
        name="matches"
        options={{ headerShown: false, title: "Matches" }}
      />
      <Tabs.Screen
        name="index"
        options={{ headerShown: false, title: "Browse" }}
      />
    </Tabs>
  );
};

export default TabLayout;
