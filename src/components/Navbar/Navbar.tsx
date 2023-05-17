import React from "react";
import {
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import RightContent from "./RightContent/RightContent";

const Navbar: React.FC = () => {
  return (
    <Flex
      bg="white"
      height="3rem"
      align="center"
      pr={2}
      justify={{ md: "space-between" }}
      boxShadow='md'
    >
      <Flex
        margin="1rem"
        align="center"
        width={{ base: "40px", md: "auto" }}
        mr={{ base: 0, md: 2 }}
      >
        <Image alt="IIT-BBS Logo" src="/images/logo.png" height="30px" />
        <Text
          fontWeight={500}
          fontFamily="sans-serif"
          fontSize={22}
          color="gray.600"
          align="center"
          display={{ base: "none", md: "unset" }}
          pl="12px"
        >
          Community Project
        </Text>
      </Flex>
      <SearchInput />
      <RightContent />
    </Flex>
  );
};

export default Navbar;
