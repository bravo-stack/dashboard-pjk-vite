import { Flex, Text } from "@chakra-ui/react";

const PageNotFound = () => {
  return (
    <Flex
      h="100dvh"
      w="100dvw"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text
        _dark={{ color: "white" }}
        fontWeight="800"
        color="#191923"
        fontSize="4.5rem"
      >
        404 Page not found
      </Text>
    </Flex>
  );
};

export default PageNotFound;
