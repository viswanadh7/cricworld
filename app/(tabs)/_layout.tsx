import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="feed" options={{ headerShown: false }} />
      <Tabs.Screen name="index" options={{ headerShown: false }} />
      <Tabs.Screen name="browse" options={{ headerShown: false }} />
    </Tabs>
  );
};

export default TabLayout;
