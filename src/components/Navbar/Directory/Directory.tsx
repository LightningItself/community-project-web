import React from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  Icon,
  Flex,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { TiHome } from "react-icons/ti";
import Communities from "./Communities";

const Directory: React.FC = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        cursor="pointer"
        borderRadius={4}
        padding="0px 6px"
        mr="2px"
        ml={{ base: 0, md: 2 }}
        _hover={{ border: "1px solid", borderColor: "brand.600", mr: "0px" }}
      >
        <Flex
          align="center"
          justify="space-between"
          width={{ base: "auto", lg: "200px" }}
        >
          <Flex align="center">
            <Icon as={TiHome} fontSize={20} mr={{ base: 1, md: 2 }} />
            <Flex display={{ base: "none", lg: "flex" }}>
              <Text fontWeight={600} fontSize="10pt">
                Home
              </Text>
            </Flex>
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList>
        <Communities />
      </MenuList>
    </Menu>
  );
};

export default Directory;
