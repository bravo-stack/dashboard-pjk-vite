import Header from "@/components/shared/header";
import NavSubHeader from "@/components/shared/nav-sub-header";
import { Box, Flex, Text } from "@chakra-ui/react";

const Gallery = () => {
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
        gap="18px"
        mx="auto"
      >
        {/* text */}
        <Text fontSize={{ base: "20px", lg: "36px" }}>Gallery</Text>
      </Flex>
    </Flex>
  );
};

export default Gallery;
