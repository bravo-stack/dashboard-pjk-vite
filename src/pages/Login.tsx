import LoginForm from "@/components/shared/login-form";
import { ColorModeButton } from "@/components/ui/color-mode";
import { Toaster } from "@/components/ui/toaster";
import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { HiCommandLine } from "react-icons/hi2";

const Login = () => {
  return (
    <Box
      as="main"
      w={{ base: "100%", lg: "auto" }}
      minH="90dvh"
      overflowY="auto"
      display="flex"
      py={{ base: "7dvh", md: "10dvh", lg: "15dvh" }}
      flexDir="column"
      alignItems="center"
      justifyContent="flex-start"
    >
      {/* main container */}
      <Flex
        alignItems="center"
        justifyContent="center"
        px={{ base: "12px", md: "20px", lg: "0px" }}
        minW={{ base: "100%", md: "60%", lg: "50%", xl: "45%" }}
        style={{ width: "45%" }}
      >
        <Flex
          w="100%"
          h="100%"
          flexDir="column"
          alignItems="center"
          gap={{ base: 12, md: 16, lg: 16 }}
        >
          <HStack w="100%" justifyContent="space-between">
            {/* logo */}
            <HStack alignItems="center">
              <Icon fontSize={{ base: "38px", lg: "52px" }} color="blue.400">
                <HiCommandLine />
              </Icon>
              <Text fontWeight={600} fontSize={{ base: "24px", lg: "32px" }}>
                Tabler
              </Text>
            </HStack>

            {/* color mode button */}
            <ColorModeButton
              border="1px solid"
              rounded="50%"
              borderColor="gray.700"
              bg="white"
              color="gray.700"
              _dark={{
                bg: "blue.400",
                color: "white",
                borderColor: "blue.400",
              }}
              mr="1rem"
            />
          </HStack>

          {/* forms */}
          <Flex
            w="100%"
            border="2px solid"
            borderColor="#F2F2F2"
            _dark={{ borderColor: "gray.700" }}
            rounded="0.5rem"
            p={{ base: 4, lg: 8 }}
            gap={8}
            flexDir="column"
          >
            {/* caption */}
            <Flex flexDir="column" gap={6} alignItems="center">
              <Text
                fontSize={{ base: "1.5rem", lg: "1.875rem" }}
                fontWeight={400}
              >
                Welcome back
              </Text>
            </Flex>

            {/* form control */}
            <LoginForm />
          </Flex>
        </Flex>
      </Flex>

      {/* toast */}
      <Toaster />
    </Box>
  );
};

export default Login;
