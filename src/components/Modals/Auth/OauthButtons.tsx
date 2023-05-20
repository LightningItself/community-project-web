import React, { useState } from "react";
import { Flex, Button } from "@chakra-ui/react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { User, userState } from "../../../atoms/userAtom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useCookies } from "react-cookie";
import { authModalState } from "../../../atoms/authModalAtom";
import useGoogleAuth from "../../../hooks/useGoogleAuth";

interface userProfile {
  id: String;
  email: String;
  verified_email: Boolean;
  name: String;
  given_name: String;
  family_name: String;
  picture: URL;
  locale: String;
}

const OauthButtons: React.FC = () => {
  const [userProfile, setUserProfile] = useState<userProfile | null>(null);
  const [user, setUser] = useRecoilState(userState);
  const [cookies, setCookies] = useCookies();
  const setModalState = useSetRecoilState(authModalState);

  const [login] = useGoogleAuth();

  const handleLogin = () => {
    login();
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
