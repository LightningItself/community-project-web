import React, { useState } from "react";
import { Input, Button, Flex, Text } from "@chakra-ui/react";
import OauthButtons from "./OauthButtons";

const Signup: React.FC = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  return (
    <>
      <form>
        <Input
          name="name"
          placeholder="name"
          type="text"
          mb={2}
          _focusVisible={{ outline: "none" }}
          _focus={{ border: "1px solid black" }}
          onChange={() => {}}
        />
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
            Sign Up
          </Button>
        </Flex>
      </form>
    </>
  );
};

export default Signup;
