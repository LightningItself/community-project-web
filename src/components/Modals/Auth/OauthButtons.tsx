import React, { useState } from "react";
import { Flex, Button, Text, Image } from "@chakra-ui/react";
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

type OauthButtonsProps = {
  googleData: any;
  setGoogleData: any;
  setStepper: any;
};

const OauthButtons: React.FC<OauthButtonsProps> = ({
  googleData,
  setGoogleData,
  setStepper,
}) => {
  const verifyWithGoogle = useGoogleLogin({
    onSuccess: async (res) => {
      try {
        const googleApiRes = await axios.get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${res.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${res.access_token}`,
              Accept: "application/json",
            },
          }
        );
        setGoogleData(googleApiRes.data);
        setStepper(1);
      } catch (err) {
        console.log(err);
      }
    },
    onError: (err) => console.log("Google Login failed"),
  });

  return (
    <Flex>
      {!googleData && (
        <Flex direction="column" align="center">
          <Text
            fontWeight="600"
            fontSize="11pt"
            w="240px"
            mb="30px"
            textAlign="center"
          >
            Log In with your Institute Account to verify your Identity
          </Text>
          <Button
            colorScheme="brand"
            variant="outline"
            onClick={() => verifyWithGoogle()}
          >
            <Image src="/images/google_logo.webp" boxSize={4} mr="8px" />
            Log In with Google
          </Button>
        </Flex>
      )}
      {googleData && (
        <Flex flex={1} direction="column" align="center">
          <Flex direction="column">
            <Text fontWeight="600" fontSize="16pt">
              Welcome,
            </Text>
            <Text fontWeight="700" fontSize="22pt" mt="-10px">
              {googleData.given_name}
            </Text>
          </Flex>
          <Text fontSize="9pt" color="gray">
            {googleData.email}
          </Text>
        </Flex>
      )}
    </Flex>
  );
};

export default OauthButtons;
