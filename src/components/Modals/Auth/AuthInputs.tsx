import { Flex } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import { authModalState } from "../../../atoms/authModalAtom";
import Login from "./Login";

const AuthInputs: React.FC = () => {
  const modalState = useRecoilValue(authModalState);
  return (
    <Flex direction="column" align="center" width="100%" mt={4} mb={6}>
      {modalState.view === "login" && <Login />}
      {modalState.view === "signup" && "Signup Form"}
    </Flex>
  );
};

export default AuthInputs;
