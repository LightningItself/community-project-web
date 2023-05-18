import React, { useState } from "react";
import { Input, Button, Flex } from "@chakra-ui/react";

const Login: React.FC = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  return (
    <form>
      <Input
        name="email"
        placeholder="email"
        type="email"
        mb={2}
        _focusVisible={{ outline: "none" }}
        _focus={{ border: "1px solid black" }}
        onChange={() => {}}
      />
      <Input
        name="password"
        placeholder="password"
        type="password"
        _focusVisible={{ outline: "none" }}
        _focus={{ border: "1px solid black" }}
        mb={2}
        onChange={() => {}}
      />
      <Flex flexDirection="column">
        <Button colorScheme="brand" type="submit" onClick={() => {}}>
          Log In
        </Button>
      </Flex>
    </form>
  );
};

export default Login;
