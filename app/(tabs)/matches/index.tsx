import MatchCard from "@/components/MatchCard";
import { Text, View } from "react-native";

const live = () => {
  return (
    <View className="p-2">
      <Text className="text-blue-500 font-bold">Live</Text>
      <MatchCard />
    </View>
  );
};

export default live;
