import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

type MenuItemProps = {
  isActive: boolean;
};

const MenuItem: React.FC<MenuItemProps> = ({ isActive }) => {
  return (
    <Flex
      justify="center"
      w={{ lg: "180px", md: "70px" }}
      border="1px solid green"
    >
      <Box m="5px 0px" flex={1}>
        c/ Neuromancers
      </Box>
    </Flex>
  );
};

export default MenuItem;
