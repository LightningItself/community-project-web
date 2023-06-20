import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

type MenuProps = {
  children: Array<any>;
};

const Menu: React.FC<MenuProps> = ({ children }) => {
  return (
    <Flex justify="center" flex={1}>
      <Flex m="0px 5px" flex={1} direction="column">
        <Flex mb="10px" display={{ md: "none", lg: "flex" }}>
          <Text fontWeight={600} fontSize="13pt">
            My Communities
          </Text>
        </Flex>
        {children}
      </Flex>
    </Flex>
  );
};

export default Menu;
