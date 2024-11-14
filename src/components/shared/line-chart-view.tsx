import { Flex, VStack } from "@chakra-ui/react";
import { VictoryArea } from "victory";

const LinkChartView = () => {
  // DATA INITIALIZATION
  const pData = [
    2400, 1398, 9800, 9800, 3908, 4800, 3800, 4300, 3908, 4800, 3800,

    3908, 4800, 3800, 4300, 3908, 4800, 3800, 4300,
  ];

  return (
    <Flex w="100%" flexDir="column">
      <VStack w="100%" alignItems="stretch">
        <VictoryArea
          height={220}
          style={{
            data: {
              fill: "rgb(126, 165, 221)",
              fillOpacity: 0.4,
              stroke: "rgb(70, 127, 207)",
              strokeWidth: 2,
            },
            labels: {
              fontSize: 12,
              fill: "#c43a31",
            },
          }}
          data={pData}
        />
      </VStack>
    </Flex>
  );
};

export default LinkChartView;
