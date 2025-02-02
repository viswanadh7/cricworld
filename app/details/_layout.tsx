import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";

const { Navigator } = createMaterialTopTabNavigator();

const TopTabs = withLayoutContext(Navigator);

const DetailsLayout = () => {
  return (
    <TopTabs initialRouteName="index" screenOptions={{ tabBarLabelStyle: { fontWeight: "bold" } }}>
      <TopTabs.Screen name="info" options={{ title: "Info" }} />
      <TopTabs.Screen name="index" options={{ title: "Live" }} />
      <TopTabs.Screen name="score" options={{ title: "Score" }} />
    </TopTabs>
  );
};
export default DetailsLayout;
