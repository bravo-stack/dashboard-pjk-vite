import { Flex, Text, VStack } from "@chakra-ui/react";
import { DefaultizedPieValueType } from "@mui/x-charts";
import { PieChart } from "@mui/x-charts/PieChart";

const SecondChartTitle = () => {
  // DATA INITIALIZATION
  const data = [
    { value: 63, label: "A", color: "rgb(94, 186, 0)" },
    { value: 37, label: "B", color: "rgb(142, 207, 77)" },
  ];

  const size = {
    margin: { right: 5 },
    width: 150,
    height: 150,
    legend: { hidden: true },
  };

  const getArcLabel = (params: DefaultizedPieValueType) => {
    return `${params.value}.0%`;
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
              data,
              innerRadius: 40,
              arcLabel: getArcLabel,
              arcLabelRadius: 55,
              arcLabelMinAngle: 20,
              highlightScope: { fade: "global", highlight: "item" },
              faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
            },
          ]}
          sx={{
            fontSize: "10px",
            color: "white",
          }}
          {...size}
        />
      </VStack>
    </Flex>
  );
};

export default SecondChartTitle;
