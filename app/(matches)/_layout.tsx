import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";

const { Navigator } = createMaterialTopTabNavigator();

const TopTabs = withLayoutContext(Navigator);

const Matches = () => {
  return (
    <TopTabs>
      <TopTabs.Screen name="finished" />
      <TopTabs.Screen name="index" />
      <TopTabs.Screen name="upcomming" />
    </TopTabs>
  );
};
export default Matches;
