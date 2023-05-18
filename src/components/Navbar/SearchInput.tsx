import React from "react";
import { Flex, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

//add user prop

const SearchInput: React.FC = () => {
  return (
    <Flex flexGrow={1} mr="6px" ml="3px" maxWidth={false ? "auto" : "600px"}>
      <InputGroup colorScheme="brand">
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="brand.500" />
        </InputLeftElement>
        <Input
          _hover={{ border: "1px solid" }}
          _focusVisible={{ outline: "none" }}
          _focus={{ border: "1px solid black" }}
          type="text"
          placeholder="Search Community"
          colorScheme="brand"
        />
      </InputGroup>
    </Flex>
  );
};

export default SearchInput;
