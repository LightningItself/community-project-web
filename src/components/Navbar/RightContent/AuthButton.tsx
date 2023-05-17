import React from "react";
import { Flex, Button } from "@chakra-ui/react";

const AuthButton = () => {
  return (
    <Flex mr="3px" display={{ base: "none", md: "unset" }}>
      <Button
        mr="6px"
        variant="outline"
        colorScheme="brand"
        onClick={() => {}}
      >
        Sign Up
      </Button>
      <Button
        variant="solid"
        colorScheme="brand"
        onClick={() => {}}
      >
        Log In
      </Button>
    </Flex>
  );
};

export default AuthButton;
