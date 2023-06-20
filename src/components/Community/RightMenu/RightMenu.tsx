import { Flex } from "@chakra-ui/react";
import React from "react";

type RightMenuProps = {
  children: Array<React.ReactNode>;
};

const RightMenu: React.FC<RightMenuProps> = ({ children }) => {
  return (
    <Flex pt="5px" flexDir="column">
      {children}
    </Flex>
  );
};

export default RightMenu;
