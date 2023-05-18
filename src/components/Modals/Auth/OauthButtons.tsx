import React from "react";
import { Flex, Button } from "@chakra-ui/react";


const OauthButtons: React.FC = () => {
  const handleLogin = () => {
  };
  return (
    <Flex>
      <Button colorScheme="brand" variant="outline" onClick={handleLogin}>
        Log In with Google
      </Button>
    </Flex>
  );
};

export default OauthButtons;
