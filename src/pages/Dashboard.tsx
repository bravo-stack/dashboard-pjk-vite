import ActivityTable from "@/components/shared/activity-table";
import FirstChatTitle from "@/components/shared/first-chart-title";
import Header from "@/components/shared/header";
import LinkChartView from "@/components/shared/line-chart-view";
import NavSubHeader from "@/components/shared/nav-sub-header";
import SecondChartTitle from "@/components/shared/second-chart-title";
import { Box, Flex, For, Grid, HStack, Text, VStack } from "@chakra-ui/react";

const Dashboard = () => {
  // DATA INITIALIZATION
  const cardsItems = [
    {
      percentValue: 6,
      value: 43,
      label: "New Tickets",
    },
    {
      percentValue: -3,
      value: "17",
      label: "Closed Today",
    },
    {
      percentValue: 9,
      value: "7",
      label: "New Replies",
    },
    {
      percentValue: 3,
      value: "27.3k",
      label: "Followers",
    },
    {
      percentValue: -2,
      value: "$95",
      label: "Daily earnings",
    },
    {
      percentValue: -1,
      value: "621",
      label: "Products",
    },
  ];

  return (
    <Flex
      gap={{ base: "20px", lg: "32px" }}
      flexDir="column"
      minH="100dvh"
      w="100%"
      _dark={{ bg: "gray.900" }}
    >
      <Box w="100%">
        <Header />
        <NavSubHeader />
      </Box>

      {/* contianer */}
      <Flex
        flexDir="column"
        w={{ base: "90%", md: "75%", lg: "85%", xl: "80%" }}
        gap={{ base: "20px", lg: "32px" }}
        mx="auto"
      >
        {/* text */}
        <Text fontSize={{ base: "20px", lg: "36px" }}>Dashboard</Text>

        {/* box contianer */}
        <Grid
          gap={{ base: "20px", lg: "32px" }}
          w="100%"
          templateColumns={{
            base: "1fr 1fr",
            md: "1fr 1fr 1fr",
            lg: "1fr 1fr 1fr 1fr",
            xl: "1fr 1fr 1fr 1fr 1fr 1fr",
          }}
        >
          <For each={cardsItems}>
            {(cardItem, index) => (
              <VStack
                key={index}
                shadow="sm"
                px="5px"
                pt="40px"
                pb="30px"
                border="1px solid"
                borderColor="gray.600"
                w="100%"
                pos="relative"
              >
                <Text
                  pos="absolute"
                  top="8px"
                  right="8px"
                  ml="auto"
                  color={cardItem.percentValue >= 0 ? "green.400" : "red.400"}
                  fontSize="sm"
                  fontWeight={400}
                >
                  {`${cardItem.percentValue > 0 ? "+" : ""}${cardItem.percentValue}%`}
                </Text>

                <Text fontSize="x-large" fontWeight={500}>
                  {cardItem.value}
                </Text>
                <Text fontSize="sm" fontWeight={300}>
                  {cardItem.label}
                </Text>
              </VStack>
            )}
          </For>
        </Grid>

        {/* charts container */}
        <Grid
          w="100%"
          templateColumns={{ base: "1fr", lg: "1.5fr 1fr" }}
          gap="32px"
        >
          {/* development activity */}
          <Flex
            h="fit-content"
            border="1px solid"
            borderColor="gray.600"
            shadow="sm"
            w="100%"
            flexDir="column"
          >
            {/* title caption */}
            <Text
              fontSize="xl"
              color="gray.500"
              _dark={{ color: "gray.400" }}
              fontWeight={600}
              borderBottom="1px solid"
              borderColor="gray.600"
              p="1rem"
            >
              Development Activity
            </Text>

            {/* chart */}
            <LinkChartView />

            {/* table */}
            <ActivityTable />
          </Flex>

          {/* chart and documentation */}
          <Flex gap="20px" w="100%" flexDir="column">
            {/* small banner */}
            <HStack
              p="1rem"
              bg="blue.100"
              _dark={{ bg: "blue.800", borderColor: "blue.900" }}
              border="1px solid"
              borderColor="blue.100"
              alignItems="center"
              rounded="4px"
              gap="4px"
            >
              <Text fontSize="14px" fontWeight={500}>
                Read our documentation
              </Text>
              <Text fontSize="14px" fontWeight={300}>
                with code samples
              </Text>
            </HStack>

            {/* charts grid */}
            <Grid
              gap={{ base: "20px", lg: "32px" }}
              w="100%"
              templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            >
              <SecondChartTitle />

              <FirstChatTitle />
            </Grid>
          </Flex>
        </Grid>

        {/* space below */}
        <Box h="5dvh" />
      </Flex>
    </Flex>
  );
};

export default Dashboard;
