import React, { useState } from "react";
import { Input, Button, Flex, Text, Box, Select } from "@chakra-ui/react";
import OauthButtons from "./OauthButtons";
import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "../../../atoms/userAtom";
import { authModalState } from "../../../atoms/authModalAtom";

const steps = [
  { title: "Verify", description: "Student Id" },
  { title: "Update", description: "Profile Info" },
];

const Signup: React.FC = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [googleData, setGoogleData] = useState();
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  const [user, setUser] = useRecoilState(userState);
  const [modalState, setModalState] = useRecoilState(authModalState);

  const signup = async (googleData: any, branch: any, year: any) => {
    try {
      const payload = {
        googleData,
        branch,
        batch: Number(year),
      };
      const serverRes: any = await axios.post(
        "http://localhost:5000/api/auth/signup",
        payload
      );
      const jwt: string = serverRes?.data?.jwt;
      localStorage.setItem("token", jwt);
      localStorage.setItem("userEmail", serverRes.data.user.email);
      localStorage.setItem("userGoogleId", serverRes.data.user.googleId);
      setUser(serverRes?.data?.user);
      setModalState((prev) => ({ ...prev, open: false }));
    } catch (err) {
      console.log("Failed to create new user", err);
    }
  };

  return (
    <>
      <Flex flex={1} direction="column" justify="space-between">
        <Stepper size="md" colorScheme="brand" index={activeStep} m="0px 20px">
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
        <Flex direction="column" mt="30px" align="center">
          <Flex m="30px 0px">
            <OauthButtons
              googleData={googleData}
              setGoogleData={setGoogleData}
              setStepper={setActiveStep}
            />
          </Flex>
          {googleData && (
            <Flex direction="column">
              <Text fontWeight="600" mb="10px">
                Complete your Profile:
              </Text>
              <form>
                <Select
                  id="branch"
                  placeholder="Select Branch"
                  colorScheme="brand"
                  w="240px"
                  mb="10px"
                  onChange={(e) => setBranch(e.target.value)}
                >
                  <option value="option1">Btech in CSE</option>
                  <option value="option2">Btech in ECE</option>
                  <option value="option3">Btech in EE</option>
                </Select>
                <Select
                  id="year"
                  name="year"
                  placeholder="Year of Admission"
                  colorScheme="brand"
                  w="240px"
                  mb="20px"
                  onChange={(e) => setYear(e.target.value)}
                >
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                </Select>
                <Button
                  colorScheme="brand"
                  variant="solid"
                  mb="20px"
                  w="100%"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    signup(googleData, branch, year);
                  }}
                >
                  Join Community
                </Button>
              </form>
            </Flex>
          )}
        </Flex>
      </Flex>
    </>
  );
};

export default Signup;
