import React from "react";
import AuthButton from "./AuthButton";
import { Flex } from "@chakra-ui/react";
import AuthModal from "../../Modals/Auth/AuthModal";
import { useRecoilState } from "recoil";
import { User, userState } from "../../../atoms/userAtom";
import UserMenu from "./UserMenu";

type RightContentProps = {
  user: User | null;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        {!user && <AuthButton />}
        <UserMenu />
      </Flex>
    </>
  );
};

export default RightContent;
