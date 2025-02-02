import { TTableComponent } from "@/types/component-types";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

const TableComponent = ({
  headerArray,
  widthArray,
  headerHeight,
  cellHeight,
  data,
  textAlign,
  borderWidth,
  borderColor,
}: TTableComponent) => {
  const styles = StyleSheet.create({
    border: {
      borderBottomWidth: borderWidth ?? 1,
      borderTopWidth: borderWidth ?? 1,
    },
    head: { height: headerHeight, borderBottomWidth: borderWidth ?? 1 },
    headText: {
      textAlign: `${textAlign ?? "left"}`,
      fontWeight: "bold",
      padding: 2,
    },
    cellText: { textAlign: `${textAlign ?? "left"}` },
    rows: {
      height: cellHeight,
      borderBottomWidth: borderWidth ?? 1,
      padding: 2,
    },
  });

  const CustomCell = ({
    value,
    index,
  }: {
    value: number | string;
    index: number;
  }) => {
    return (
      <TouchableOpacity onPress={() => alert(`You clicked: ${value}`)}>
        <Text>{value}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View className="border border-b-0">
      <Table>
        <Row
          data={headerArray}
          widthArr={widthArray as any} // widthArr is number[] but we are using percentages
          style={styles.head}
          textStyle={styles.headText}
        />
        {data.map((rowData, rowIndex) => (
          <Row
            key={rowIndex}
            data={rowData.map((cellData, cellIndex) => (
              <CustomCell key={cellIndex} value={cellData} index={cellIndex} />
            ))}
            widthArr={widthArray as any}
            style={styles.rows}
          />
        ))}
      </Table>
    </View>
  );
};

export default TableComponent;
