import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";

const { Navigator } = createMaterialTopTabNavigator();

const TopTabs = withLayoutContext(Navigator);

const Matches = () => {
  return (
    <TopTabs screenOptions={{ tabBarLabelStyle: { fontWeight: "bold" } }}>
      <TopTabs.Screen name="finished" options={{ title: "Finished" }} />
      <TopTabs.Screen name="index" options={{ title: "Live" }} />
      <TopTabs.Screen name="upcomming" options={{ title: "Upcomming" }} />
    </TopTabs>
  );
};
export default Matches;
