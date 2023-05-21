import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  ModalContent,
  ModalCloseButton,
  Box,
  Divider,
  Text,
  Input,
  Stack,
  Checkbox,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { HiLockClosed } from "react-icons/hi";
import { BsFillEyeFill, BsFillPersonFill } from "react-icons/bs";
import { useRecoilState } from "recoil";
import { userState } from "../../../atoms/userAtom";

const url = "http://localhost:3000/api";

type CreateCommunitiesModalProps = {
  open: boolean;
  handleClose: () => void;
};

const CreateCommunityModal: React.FC<CreateCommunitiesModalProps> = ({
  open,
  handleClose,
}) => {
  const [communityName, setCommunityName] = useState("");
  const [charsRemaining, setCharRemaining] = useState(21);
  const [communityType, setCommunityType] = useState("public");
  const [error, setError] = useState("");
  const [user] = useRecoilState(userState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 21) return;
    setCommunityName(event.target.value);
    setCharRemaining(21 - event.target.value.length);
  };
  const onCommunityTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCommunityType(event.target.name);
  };

  const handleCreateCommunity = async () => {
    const format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    if (format.test(communityName) || communityName.length < 3) {
      setError(
        "Community name must be 3-21 characters, and can only contain letters, numbers or underscores"
      );
      return;
    }
    try {
      const res = await fetch(`http://localhost:3000/api/community`);
      const communities = await res.json();
      if (
        !communities.filter(
          (community: any) => community?.communityName === communityName
        )
      ) {
        const newCommunity = {
          communityName: communityName,
          creatorId: user?.name,
          noOfMembers: 1,
        };
        try {
          await fetch(`http://localhost:3000/api/community`, {
            method: "POST",
            body: JSON.stringify(newCommunity),
          });
        } catch (err) {
          console.log("error creating new community", err);
        }
      } else {
        console.log("community with same name already exists.");
        return;
      }
    } catch (err) {
      console.log("error fetchign all existing communities", err);
    }
  };
  return (
    <Modal isOpen={open} onClose={handleClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          display={"flex"}
          flexDirection="column"
          fontSize={15}
          padding={3}
        >
          Create a Community
        </ModalHeader>
        <Box pl={3} pr={3}>
          <Divider />
          <ModalCloseButton />
          <ModalBody display={"flex"} flexDirection="column" padding="10px 0px">
            <Text fontWeight={600} fontSize={15}>
              Name
            </Text>
            <Text fontSize={11} color="gray.500">
              Community names including capitalization cannot be changed
            </Text>

            <Input
              value={communityName}
              size="sm"
              onChange={handleChange}
              mt={2}
              _hover={{ border: "1px solid" }}
              _focusVisible={{ outline: "none" }}
              _focus={{ border: "1px solid black" }}
            />
            <Text
              fontSize="9pt"
              color={charsRemaining === 0 ? "red" : "gray.500"}
            >
              {charsRemaining} Characters remaining
            </Text>
            <Text fontSize="9pt" color="red" pt={1}>
              {error}
            </Text>
            <Box mt={4} mb={4}>
              <Text fontWeight={600} fontSize={15} mb={3}>
                Community Type
              </Text>
              <Stack spacing={2}>
                <Checkbox
                  colorScheme="brand"
                  name="public"
                  isChecked={communityType === "public"}
                  onChange={onCommunityTypeChange}
                >
                  <Flex align="center">
                    <Icon as={BsFillPersonFill} color="gray.500" mr={2} />
                    <Text fontSize="11pt" mr={1} fontWeight={500}>
                      Public
                    </Text>
                    <Text fontSize="8pt" color="gray.500" pt={1}>
                      Anyone can view, post, and comment to this community
                    </Text>
                  </Flex>
                </Checkbox>
                <Checkbox
                  colorScheme="brand"
                  name="restricted"
                  isChecked={communityType === "restricted"}
                  onChange={onCommunityTypeChange}
                >
                  <Flex align="center">
                    <Icon as={BsFillEyeFill} color="gray.500" mr={2} />
                    <Text fontSize="11pt" mr={1} fontWeight={500}>
                      Restricted
                    </Text>
                    <Text fontSize="8pt" color="gray.500" pt={1}>
                      Anyone can view this community, but only approved users
                      can post
                    </Text>
                  </Flex>
                </Checkbox>
                <Checkbox
                  colorScheme="brand"
                  name="private"
                  isChecked={communityType === "private"}
                  onChange={onCommunityTypeChange}
                >
                  <Flex align="center">
                    <Icon as={HiLockClosed} color="gray.500" mr={2} />
                    <Text fontSize="11pt" mr={1} fontWeight={500}>
                      Private
                    </Text>
                    <Text fontSize="8pt" color="gray.500" pt={1}>
                      Only approved users can view and submit to this community
                    </Text>
                  </Flex>
                </Checkbox>
              </Stack>
            </Box>
          </ModalBody>
        </Box>

        <ModalFooter bg="gray.100" borderRadius="0px 0px 10px 10px">
          <Button colorScheme="brand" mr={3} onClick={handleClose}>
            Close
          </Button>
          <Button
            colorScheme="brand"
            variant="outline"
            onClick={() => {}} //need to work on handleCreateCommunity
          >
            Create Community
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateCommunityModal;
