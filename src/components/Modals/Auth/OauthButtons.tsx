import React, { useState } from "react";
import { Flex, Button } from "@chakra-ui/react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { User, userState } from "../../../atoms/userAtom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useCookies } from "react-cookie";
import { authModalState } from "../../../atoms/authModalAtom";

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

  const handleLogin = () => {
    googleLogin();
  };

  const loginUser = () => {
    //sends the google profile id to server to check for existing accounts.
    //if present -> logs in
    //if not found, prompts to create a new account with this google account.
    //COMPLETE after backend endpoint is done.
    //currently using dummy user to login.
    //NOTE: use httpOnly cookie to authorize all subsequent transactions.
    const dummyUser: User = {
      name: "Indrayudh Ghosh",
      photo: "www.dummylink.com",
      joinedCommunities: [],
      dateJoined: new Date("2022-02-11"),
    };
    const jwt = "fsdfsdafasdfsdaafsfd"; //dummy jwt
    setCookies("token", jwt);
    setUser(dummyUser);
  };

  const extractAccountInfo = (accessToken: String) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        setUserProfile(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const googleLogin = useGoogleLogin({
    onSuccess: (res) => {
      console.log("AccessTokenExtracted");
      extractAccountInfo(res.access_token);
      loginUser();
      closeModal();
    },
    onError: (res) => console.log("Login Failed"),
  });

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, open: false }));
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
