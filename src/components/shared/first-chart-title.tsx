import { Flex, Text, VStack } from "@chakra-ui/react";
import {
  DefaultizedPieValueType,
  pieArcLabelClasses,
  PieChart,
} from "@mui/x-charts";

const FirstChatTitle = () => {
  // DATA INITIALIZATION
  const data = [
    { label: "Group A", value: 400, color: "rgb(28, 51, 83)" },
    { label: "Group B", value: 300, color: "rgb(70, 127, 207)" },
    { label: "Group D", value: 70, color: "rgb(126, 165, 221)" },
    { label: "Group E", value: 80, color: "rgb(200, 217, 241);" },
  ];
  const sizing = {
    margin: { right: 5 },
    width: 200,
    height: 200,
    legend: { hidden: true },
  };
  const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

  const getArcLabel = (params: DefaultizedPieValueType) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(0)}%`;
  };

  return (
    <Flex
      border="1px solid"
      borderColor="gray.600"
      shadow="sm"
      w="100%"
      flexDir="column"
    >
      {/* title caption */}
      <Text
        fontSize="14px"
        color="gray.500"
        _dark={{ color: "gray.400" }}
        fontWeight={500}
        borderBottom="1px solid"
        borderColor="gray.600"
        p="1rem"
      >
        Chart title
      </Text>

      <VStack px="1rem" py="3rem">
        <PieChart
          series={[
            {
              outerRadius: 80,
              data,
              arcLabel: getArcLabel,
              highlightScope: { fade: "global", highlight: "item" },
              faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
            },
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: "white",
              fontSize: 14,
            },
          }}
          {...sizing}
        />
      </VStack>
    </Flex>
  );
};

export default FirstChatTitle;
