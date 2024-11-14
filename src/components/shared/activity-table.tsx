import { Avatar } from "@/components/ui/avatar";
import { Flex, Grid, HStack, IconButton, Text } from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";

const ActivityTable = () => {
  // DATA INITIALIZATION
  const tableItems = [
    {
      imageUrl: "https://bit.ly/dan-abramov",
      name: "Ronald Bradley",
      commitMessage: "Initial commit",
      date: "May 6, 2018",
    },
    {
      imageUrl: "",
      name: "Russell Gibson",
      commitMessage: "Main structure",
      date: "April 22, 2018",
    },
    {
      imageUrl: "https://randomuser.me/api/portraits/men/42.jpg",
      name: "Bervely Armstrong",
      commitMessage: "Left sidebar adjustments",
      date: "April 15, 2018",
    },
  ];

  return (
    <Flex h="fit-content" w="100%" flexDir="column">
      {/* heading */}
      <Grid
        p="1rem"
        gap="12px"
        borderBottom="1px solid"
        borderColor="gray.600"
        w="100%"
        templateColumns={{
          base: ".5fr 2fr 1.5fr .5fr",
          lg: "2.5fr 2.5fr 1.5fr .5fr",
        }}
      >
        <Text color="gray.400" fontSize="16px" fontWeight={600}>
          User
        </Text>
        <Text color="gray.400" fontSize="16px" fontWeight={600}>
          Commit
        </Text>
        <Text color="gray.400" fontSize="16px" fontWeight={600}>
          Date
        </Text>
      </Grid>

      {/* body */}
      <Flex w="100%" flexDir="column">
        {tableItems.map((tableItem, index) => (
          <Grid
            p="1rem"
            gap="12px"
            borderBottom={
              index + 1 === tableItems.length ? undefined : "1px solid"
            }
            borderColor="gray.600"
            key={index}
            w="100%"
            alignItems="center"
            templateColumns={{
              base: ".5fr 2fr 1.5fr .5fr",
              lg: "2.5fr 2.5fr 1.5fr .5fr",
            }}
          >
            {/* profile */}
            <HStack alignItems="center" gap="18px">
              <Avatar
                name={tableItem.name}
                size="sm"
                src={tableItem.imageUrl}
              />
              <Text
                display={{ base: "none", lg: "block" }}
                color="gray.400"
                fontSize={{ base: "12px", lg: "14px" }}
                fontWeight={400}
              >
                {tableItem.name}
              </Text>
            </HStack>

            {/* commit message */}
            <HStack alignSelf="center" h="100%" w="100%">
              <Text
                color="gray.400"
                fontSize={{ base: "12px", lg: "14px" }}
                fontWeight={400}
              >
                {tableItem.commitMessage}
              </Text>
            </HStack>

            {/* date */}
            <HStack h="100%" w="100%" alignSelf="center">
              <Text
                color="gray.400"
                fontSize={{ base: "12px", lg: "14px" }}
                fontWeight={400}
              >
                {tableItem.date}
              </Text>
            </HStack>

            <IconButton
              size={{ base: "sm", lg: "md" }}
              color="gray.300"
              rounded="0px"
              alignSelf="center"
              h="100%"
              w="100%"
              aria-label="delete"
            >
              <AiOutlineDelete />
            </IconButton>
          </Grid>
        ))}
      </Flex>
    </Flex>
  );
};

export default ActivityTable;
