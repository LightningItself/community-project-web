import React from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  Icon,
  Flex,
  MenuDivider,
  Text,
  Image,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { VscAccount } from "react-icons/vsc";
import { IoGrid } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogin } from "react-icons/md";
import { useRecoilState, useSetRecoilState } from "recoil";
import { authModalState } from "../../../atoms/authModalAtom";
import { userState } from "../../../atoms/userAtom";
import useGoogleAuth from "../../../hooks/useGoogleAuth";

const UserMenu: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [user, setUser] = useRecoilState(userState);
  const [login, logout] = useGoogleAuth();

  return (
    <Menu>
      <MenuButton
        as={Button}
        cursor="pointer"
        borderRadius={4}
        padding="0px 6px"
        mr="2px"
        _hover={{ border: "1px solid", borderColor: "brand.600", mr: "0px" }}
      >
        <Flex align="center">
          <Flex align="center">
            {user ? (
              <>
                <Image
                  src={`${user?.photo}`}
                  boxSize={6}
                  bg="white"
                  color="blue"
                  borderRadius="50%"
                  mr="8px"
                />
                <Flex
                  direction="column"
                  display={{ base: "none", lg: "flex" }}
                  fontSize="8pt"
                  align="flex-start"
                  mr={8}
                >
                  <Text fontWeight={700}>
                    {/* {user?.name || user.email?.split("@")[0]} */}
                    {user?.fullName}
                  </Text>
                  <Flex>
                    <Text color="gray.500">
                      {user?.contributionScore.toString()} points
                    </Text>
                  </Flex>
                </Flex>
              </>
            ) : (
              <Icon as={VscAccount} fontSize={22} color="gray.400" mr={2} />
            )}
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList>
        {user ? (
          <>
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "gray.100" }}
            >
              <Flex align="center">
                <Icon as={CgProfile} fontSize="20" mr={2} />
                Profile
              </Flex>
            </MenuItem>
            <MenuDivider />
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "gray.1000" }}
              onClick={() => logout()}
            >
              <Flex align="center">
                <Icon as={MdOutlineLogin} fontSize="20" mr={2} />
                Log Out
              </Flex>
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "gray.100" }}
              onClick={() => setAuthModalState({ open: true})}
            >
              <Flex align="center">
                <Icon as={MdOutlineLogin} fontSize="20" mr={2} />
                Log In / Sign Up
              </Flex>
            </MenuItem>
          </>
        )}
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
