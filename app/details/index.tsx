import TableComponent from "@/components/TableComponent";
import { ScrollView, Text, View } from "react-native";

const index = () => {
  const batterArray = ["Batter", "R", "B", "4s", "6s", "SR"];
  const bowlerArray = ["Bowler", "O", "M", "R", "W", "ER"];
  const widthArray = ["50%", "9%", "9%", "9%", "9%", "14%"];

  const tableData = [
    // ["Shivam Dube\nrun out (Jos Buttler)", 53, 34, 7, 2, 155.88],
    ["Shivam Dube", 53, 34, 7, 2, 155.88],
    // ["Hardik Pandya\nc Jos Buttler b Jamie Overton", 53, 30, 4, 4, 176.67],
    ["Hardik Pandya", 53, 30, 4, 4, 176.67],
  ];
  const bowlerData = [
    ["Jofra Archer", 3.4, 0, 34, 0, 9.2],
  ]
  return (
    <ScrollView className="p-2">
      <View>
        <Text>IND 121 - 5 15.3</Text>
        <TableComponent
          headerArray={batterArray}
          widthArray={widthArray}
          data={tableData}
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
    </ScrollView>
  );
};

export default index;
