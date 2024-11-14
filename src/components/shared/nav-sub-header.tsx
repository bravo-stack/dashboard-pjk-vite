import { HStack } from "@chakra-ui/react";
import MenuListItems from "./menu-list-items";

const NavSubHeader = () => {
  return (
    <HStack
      display={{ base: "none", lg: "flex" }}
      pt={{ base: "1rem", lg: "1.4rem" }}
      borderBottom="1px solid"
      borderColor="gray.300"
      _dark={{ borderColor: "gray.700" }}
      justifyContent="center"
      as="nav"
      alignItems="center"
      w="100%"
    >
      <HStack
        w={{ base: "95%", md: "75%", lg: "85%", xl: "80%" }}
        display="flex"
        gap="12px"
      >
        <MenuListItems isDesktop={true} />
      </HStack>
    </HStack>
  );
};

export default NavSubHeader;
