import React from "react";
import AuthButton from "./AuthButton";
import { Flex} from "@chakra-ui/react";

const RightContent: React.FC = () => {
  return (
    <>
      <Flex justify="center" align="center">
        <AuthButton />
      </Flex>
    </>
  );
};

export default RightContent;
