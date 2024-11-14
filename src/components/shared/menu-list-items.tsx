import { List, Text } from "@chakra-ui/react";
import { CgFileDocument } from "react-icons/cg";
import { IoMdCheckboxOutline } from "react-icons/io";
import { IoDocumentOutline } from "react-icons/io5";
import { LuBox, LuCalendar, LuHome, LuImage } from "react-icons/lu";
import { TbSourceCode } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";

type Props = {
  isDesktop?: boolean;
};

const MenuListItems = ({ isDesktop }: Props) => {
  // DATA INTIALIZATION
  const mobileMenuItems = [
    {
      label: "Home",
      url: "/dashboard",
      Icon: LuHome,
    },
    {
      label: "Source code",
      url: "/source-code",
      Icon: TbSourceCode,
    },
    {
      label: "Interface",
      url: "/interface",
      Icon: LuBox,
    },
    {
      label: "Components",
      url: "/components",
      Icon: LuCalendar,
    },
    {
      label: "Pages",
      url: "/pages",
      Icon: IoDocumentOutline,
    },
    {
      label: "Forms",
      url: "/forms",
      Icon: IoMdCheckboxOutline,
    },
    {
      label: "Gallery",
      url: "/gallery",
      Icon: LuImage,
    },
    {
      label: "Documentation",
      url: "/documentation",
      Icon: CgFileDocument,
    },
  ];
  const location = useLocation();

  return (
    <List.Root
      flexDir={isDesktop ? "row" : "column"}
      display="flex"
      spaceY="12px"
      gap={isDesktop ? "8" : "6"}
      variant="plain"
      align="center"
    >
      {mobileMenuItems.map((mobileMenuItem, index) => (
        <List.Item
          mt="0px !important"
          gap={isDesktop ? "12px" : "8px"}
          alignItems="center"
          w="fit-content"
          pb={isDesktop ? "1.5rem" : "4px"}
          borderBottom={
            location.pathname === mobileMenuItem.url ? "2px solid" : undefined
          }
          borderColor={
            location.pathname === mobileMenuItem.url ? "blue.400" : undefined
          }
          key={index}
        >
          <List.Indicator
            color={
              location.pathname === mobileMenuItem.url ? "blue.400" : undefined
            }
          >
            <mobileMenuItem.Icon />
          </List.Indicator>

          <Link to={mobileMenuItem.url}>
            <Text
              color={
                location.pathname === mobileMenuItem.url
                  ? "blue.400"
                  : undefined
              }
              fontWeight={500}
              fontSize="16px"
            >
              {mobileMenuItem.label}
            </Text>
          </Link>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default MenuListItems;
