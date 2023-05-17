import React from "react";
import { Flex, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

type SearchInputProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  } | null;
};

const SearchInput: React.FC<SearchInputProps> = ({ user }) => {
  return (
    <Flex flexGrow={1} mr="6px" ml="3px" maxWidth={user ? "auto" : "600px"}>
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
