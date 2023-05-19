import React from "react";
import AuthButton from "./AuthButton";
import { Flex } from "@chakra-ui/react";
import AuthModal from "../../Modals/Auth/AuthModal";

const RightContent: React.FC = () => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        <AuthButton />
      </Flex>
    </>
  );
};

export default RightContent;
