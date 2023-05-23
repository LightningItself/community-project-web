import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import React from "react";

type HeaderProps = {
  communityData: any; //use Community type
};

const Header: React.FC<HeaderProps> = ({ communityData }) => {
  const isJoined = false;
  return (
    <Flex direction="column" w="100%" h="146px">
      <Box h="50%" bg="brand.100"></Box>
      <Flex justify="center" bg="white" flexGrow={1}>
        <Flex w="95%" maxW="860px">
          <Image
            src="/images/logo.png"
            boxSize={16}
            bg="white"
            position="relative"
            zIndex={2}
            top={-5}
            color="blue"
            border="4px solid white"
            borderRadius="50%"
          />
          <Flex padding="18px 16px">
            <Flex direction="column" mr={6}>
              <Text fontWeight={800} fontSize="16pt">
                {communityData.communityName}
              </Text>
              <Text fontWeight={600} fontSize="10pt" color="grey.400">
                c/{communityData.communityName}
              </Text>
            </Flex>
            <Button
              colorScheme="brand"
              variant={isJoined ? "outline" : "solid"}
              h="30px"
              pr={6}
              pl={6}
            >
              {isJoined ? "Joined" : "Join"}
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
