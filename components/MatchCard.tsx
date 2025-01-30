import { Image, Text, View } from "react-native";


const MatchCard = () => {
  return (
    <View className="py-4 px-6 my-1 rounded border drop-shadow-2xl">
      <Text className="text-sm font-thin">
        1st T20, Eden Gardens, Kolkata, India
      </Text>
      <View className="my-6 flex flex-row justify-between">
        <View className="flex flex-col gap-6">
          <View className="flex flex-row gap-2 items-center">
            <Image
              style={{ height: 28, width: 28, marginRight: 8 }}
              source={require("../assets/icons/flag.png")}
            />
            <Text className="text-xl">ENG</Text>
            <Text className="text-2xl font-bold">132</Text>
            <Text className="font-thin">20.0</Text>
          </View>
          <View className="flex flex-row gap-2 items-center">
            <Image
              style={{ height: 28, width: 28, marginRight: 8 }}
              source={require("../assets/icons/world.png")}
            />
            <Text className="text-xl">IND</Text>
            <Text className="text-2xl font-bold">133-3</Text>
            <Text className="font-thin">12.5</Text>
          </View>
        </View>
        <View className="pl-8 border-l flex flex-col gap-3">
          <Text className="text-xl text-blue-600">IND Won</Text>
          <Text className="">by 7 wickets</Text>
        </View>
      </View>
    </View>
  );
};

export default MatchCard;
