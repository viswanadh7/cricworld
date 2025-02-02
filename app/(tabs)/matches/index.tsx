import MatchCard from "@/components/MatchCard";
import { matchesList } from "@/response-sample/cricbuzz";
import { ScrollView, Text, View } from "react-native";

const live = () => {
  return (
    <ScrollView className="px-2 pt-4 pb-20">
      {matchesList.typeMatches.map((allMatches) => (
        <View>
          <Text className="text-center text-lg font-bold">
            {allMatches.matchType}
          </Text>
          {allMatches.seriesMatches.map((series) => (
            <View>
              <Text className="text-center mb-2">
                {series.seriesAdWrapper?.seriesName}
              </Text>
              {series.seriesAdWrapper?.matches.map((match) => (
                <MatchCard
                  matchInfo={match.matchInfo}
                  matchScore={match.matchScore}
                />
              ))}
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

export default live;
