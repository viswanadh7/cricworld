import TableComponent from "@/components/TableComponent";
import { scoreCardDetails } from "@/response-sample/cricbuzz";
import { useState } from "react";
import { Button, ScrollView, Text, TouchableOpacity, View } from "react-native";

const score = () => {
  const [inningsId, setInningsId] = useState<number>(0);
  const batterArray = ["Batter", "R", "B", "4s", "6s", "SR"];
  const bowlerArray = ["Bowler", "O", "M", "R", "W", "ER"];
  const widthArray = ["50%", "9%", "9%", "9%", "9%", "14%"];

  const partnerArray = ["Batter", "P.ship", "Batter"];
  const partnerWithArray = ["35%", "20%", "35%"];

  const batterData = Object.values(
    scoreCardDetails.scoreCard[inningsId].batTeamDetails.batsmenData
  ).map((batsman) => [
    batsman.batName,
    batsman.runs,
    batsman.balls,
    batsman.fours,
    batsman.sixes,
    batsman.strikeRate,
  ]);
  const bowlerData = Object.values(
    scoreCardDetails.scoreCard[inningsId].bowlTeamDetails.bowlersData
  ).map((bowler) => [
    bowler.bowlName,
    bowler.overs,
    bowler.maidens,
    bowler.runs,
    bowler.wickets,
    bowler.economy,
  ]);
  const partnershipsData = Object.values(
    scoreCardDetails.scoreCard[inningsId].partnershipsData
  ).map((partnership) => [
    partnership.bat1Name,
    `${partnership.totalRuns} (${partnership.totalBalls})`,
    partnership.bat2Name,
  ]);
  return (
    <ScrollView className="p-2">
      <View>
        <View className="w-full flex flex-row justify-between my-4">
          <TouchableOpacity
            onPress={() => setInningsId(0)}
            className={`w-[45%] py-3 rounded-lg ${
              inningsId === 0 ? "bg-blue-500" : "border"
            }`}
          >
            <Text
              className={`text-lg text-center ${
                inningsId === 0 ? "text-white" : ""
              }`}
            >
              {scoreCardDetails.scoreCard[0].batTeamDetails.batTeamShortName}{" "}
              {scoreCardDetails.scoreCard[0].scoreDetails.runs}-
              {scoreCardDetails.scoreCard[0].scoreDetails.wickets}{" "}
              {scoreCardDetails.scoreCard[0].scoreDetails.revisedOvers !== 0
                ? scoreCardDetails.scoreCard[0].scoreDetails.revisedOvers
                : scoreCardDetails.scoreCard[0].scoreDetails.overs}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setInningsId(1)}
            className={`w-[45%] py-3 rounded-lg ${
              inningsId === 1 ? "bg-blue-500" : "border"
            }`}
          >
            <Text
              className={`text-lg text-center ${
                inningsId === 1 ? "text-white" : ""
              }`}
            >
              {scoreCardDetails.scoreCard[1].batTeamDetails.batTeamShortName}{" "}
              {scoreCardDetails.scoreCard[1].scoreDetails.runs}-
              {scoreCardDetails.scoreCard[1].scoreDetails.wickets}{" "}
              {scoreCardDetails.scoreCard[1].scoreDetails.revisedOvers !== 0
                ? scoreCardDetails.scoreCard[1].scoreDetails.revisedOvers
                : scoreCardDetails.scoreCard[1].scoreDetails.overs}
            </Text>
          </TouchableOpacity>
        </View>
        <TableComponent
          headerArray={batterArray}
          widthArray={widthArray}
          data={batterData}
          headerHeight={40}
          cellHeight={50}
        />
      </View>
      <Text className="my-2">P.Ship 65(30)</Text>
      <TableComponent
        headerArray={bowlerArray}
        widthArray={widthArray}
        data={bowlerData}
        headerHeight={40}
        cellHeight={50}
      />
      <Text className="my-2">Partnership</Text>
      <TableComponent
        headerArray={partnerArray}
        widthArray={partnerWithArray}
        data={partnershipsData}
        textAlign="center"
        headerHeight={40}
        cellHeight={50}
      />
      <Text></Text>
    </ScrollView>
  );
};

export default score;
