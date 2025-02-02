import { TMatchData } from "@/types/component-types";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MatchCard = ({ matchInfo, matchScore }: TMatchData) => {
  return (
    <TouchableOpacity
      onPress={() => router.push("/details")}
      className="py-4 px-6 my-2 rounded border drop-shadow-2xl"
    >
      <Text className="text-sm font-thin">
        {matchInfo?.matchDesc}, {matchInfo?.venueInfo.ground},{" "}
        {matchInfo?.venueInfo.city}
      </Text>
      <View className="my-6 flex flex-row justify-between">
        <View className="flex flex-col gap-6">
          <View className="flex flex-row gap-2 items-center">
            <Image
              style={{ height: 28, width: 28, marginRight: 8 }}
              source={require("../assets/icons/flag.png")}
            />
            <Text className="text-xl">
              {matchInfo?.team1.teamSName ?? matchInfo?.team1.teamSName}
            </Text>
            <Text className="text-2xl font-bold">
              {matchScore?.team1Score?.inngs1?.runs ?? 0} -{" "}
              {matchScore?.team1Score?.inngs1?.wickets}
            </Text>
            <Text className="font-thin">
              {matchScore?.team1Score?.inngs1?.overs}
            </Text>
          </View>
          <View className="flex flex-row gap-2 items-center">
            <Image
              style={{ height: 28, width: 28, marginRight: 8 }}
              source={require("../assets/icons/world.png")}
            />
            <Text className="text-xl">
              {matchInfo?.team2.teamSName ?? matchInfo?.team2.teamSName}
            </Text>
            {matchScore.team2Score.inngs1 && (
              <Text className="text-2xl font-bold">
                {matchScore?.team2Score?.inngs1?.runs} -{" "}
                {matchScore?.team2Score?.inngs1?.wickets}
              </Text>
            )}
            {matchScore.team2Score.inngs1 && (
              <Text className="font-thin">
                {matchScore?.team2Score.inngs1.overs}
              </Text>
            )}
          </View>
        </View>
        <View
          className={`pl-8 border-l flex flex-col ${
            matchInfo.matchFormat === "TEST" ? "justify-center" : "justify-center gap-3"
          } `}
        >
          <Text className="text-xl text-blue-600">{matchInfo?.stateTitle}</Text>
          {matchInfo.matchFormat !== "TEST" && (
            <Text className="">by{matchInfo.status.split("by")[1]}</Text>
          )}
        </View>
      </View>
      {matchInfo.matchFormat === "TEST" && (
        <Text className="text-center my-1">{matchInfo.status}</Text>
      )}
    </TouchableOpacity>
  );
};

export default MatchCard;
