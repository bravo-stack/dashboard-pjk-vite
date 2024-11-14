import {
  Box,
  Button,
  Float,
  HStack,
  Icon,
  IconButton,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiCommandLine } from "react-icons/hi2";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import { Fragment } from "react/jsx-runtime";
import { Avatar } from "../ui/avatar";
import { ColorModeButton } from "../ui/color-mode";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
} from "../ui/drawer";
import MenuListItems from "./menu-list-items";

const Header = () => {
  // STATES
  const [isNotificationOpen, setOpenNotification] = useState(false);
  return (
    <Fragment>
      <HStack
        py={{ base: "1rem", lg: "1.4rem" }}
        borderBottom="1px solid"
        borderColor="gray.300"
        _dark={{ borderColor: "gray.700" }}
        justifyContent="center"
        as="header"
        alignItems="center"
        w="100%"
      >
        <HStack w={{ base: "95%", md: "75%", lg: "85%", xl: "80%" }} gap="12px">
          {/* icon and logo texts */}
          <Icon fontSize={{ base: "38px", lg: "52px" }} color="blue.400">
            <HiCommandLine />
          </Icon>
          <Text fontWeight={600} fontSize={{ base: "24px", lg: "32px" }}>
            Tabler
          </Text>

          {/* space */}
          <Spacer />

          {/* change page theme */}
          <ColorModeButton
            display={{ base: "none", lg: "inline-flex" }}
            border="1px solid"
            rounded="50%"
            borderColor="gray.700"
            bg="white"
            color="gray.700"
            _dark={{ bg: "blue.400", color: "white", borderColor: "blue.400" }}
            mr="1rem"
          />

          {/* source code button */}
          <Button
            display={{ base: "none", lg: "inline-flex" }}
            border="2px solid"
            px={4}
            fontWeight={500}
            _hover={{ opacity: 0.8 }}
            borderColor="blue.400"
            color="blue.400"
          >
            Source code
          </Button>

          {/* notification icon */}
          <IconButton aria-label="notification">
            <IoMdNotificationsOutline />
            <Float top="6px" right="8px">
              <Box
                display="inline"
                h="10px"
                w="10px"
                rounded="50%"
                bg="red.500"
              />
            </Float>
          </IconButton>

          {/* profile section */}
          <HStack
            display={{ base: "none", lg: "flex" }}
            alignItems="center"
            gap={3}
          >
            <Avatar size="sm" name="Sage" src="https://bit.ly/dan-abramov" />
            <VStack gap="1" alignItems="flex-start">
              <Text fontSize="sm" fontWeight={400}>
                Dane Pearson
              </Text>
              <Text fontSize="xs" fontWeight={300}>
                Administrator
              </Text>
            </VStack>
          </HStack>

          {/* MOBILE: menu */}
          <IconButton
            onClick={() => {
              setOpenNotification(true);
            }}
            _hover={{ opacity: 0.7 }}
            display={{ lg: "none" }}
            variant="ghost"
            aria-label="notification"
          >
            <RiMenu3Fill />
          </IconButton>

          {/* MOBILE: theme button */}
          <ColorModeButton
            display={{ lg: "none" }}
            border="1px solid"
            rounded="50%"
            borderColor="gray.700"
            bg="white"
            color="gray.700"
            _dark={{ bg: "blue.400", color: "white", borderColor: "blue.400" }}
            mr="1rem"
          />
        </HStack>
      </HStack>

      {/* drawer */}
      <DrawerRoot
        placement="start"
        open={isNotificationOpen}
        onOpenChange={(e) => setOpenNotification(e.open)}
      >
        <DrawerBackdrop />
        <DrawerContent gap="20px" px="6" py="6">
          <DrawerHeader>
            {/* profile */}
            <HStack
              pb="12px"
              borderBottom="1px solid"
              borderColor="gray.300"
              _dark={{ borderColor: "gray.700" }}
              alignItems="center"
              gap={3}
            >
              <Avatar size="sm" name="Sage" src="https://bit.ly/dan-abramov" />
              <VStack gap="1" alignItems="flex-start">
                <Text fontSize="sm" fontWeight={400}>
                  Jane Pearson
                </Text>
                <Text fontSize="xs" fontWeight={300}>
                  Administrator
                </Text>
              </VStack>
            </HStack>
          </DrawerHeader>

          <DrawerBody>
            {/* list */}
            <MenuListItems />
          </DrawerBody>
          <DrawerCloseTrigger />
        </DrawerContent>
      </DrawerRoot>
    </Fragment>
  );
};

export default Header;
