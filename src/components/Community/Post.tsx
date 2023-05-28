import { Box, Button, Divider, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import { BiComment } from "react-icons/bi";

const Post = () => {
  return (
    <Flex justify="center" flex={1}>
      <Box m="5px" flex={1} borderRadius="7px" bg="white">
        <Flex m="5px" direction="row" mr="25px">
          <Flex w="180px" justify="center" p="10px">
            <Flex align="center" direction="column">
              <BsArrowUpShort size={26} color="grey" />
              <Text fontSize={11} align="center" color="grey">
                226
              </Text>
              <BsArrowDownShort size={26} color="grey" />
            </Flex>
          </Flex>

          <Flex direction="column">
            <Flex maxWidth="100%" pt="12px" pb="10px">
              <Flex direction="row">
                <Text
                  maxWidth="100%"
                  fontWeight="700"
                  fontFamily="Helvetica"
                  noOfLines={1}
                >
                  This is a typical forum post heading that demonstrates
                  overflow
                </Text>
              </Flex>
              <Flex>
                <Box
                  bg="black"
                  borderRadius="5px"
                  alignSelf="center"
                  m="0px 10px"
                >
                  <Text
                    p="3px 5px"
                    fontSize={10}
                    textAlign="center"
                    textColor="white"
                    alignContent="center"
                  >
                    QUESTION
                  </Text>
                </Box>
              </Flex>
            </Flex>
            <Text
              maxWidth="100%"
              noOfLines={6}
              fontSize={12}
              letterSpacing={0.1}
              color="gray"
              lineHeight="1.6"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Divider mt="15px" />
            <Flex
              flex={1}
              m="12px 0px"
              direction="row"
              justifyContent="space-between"
            >
              <Flex>
                <Image
                  src="/images/logo.png"
                  boxSize={5}
                  bg="white"
                  color="blue"
                  borderRadius="50%"
                />
                <Text fontSize="10pt" textColor="gray" mr="4px" ml="7px">
                  Posted by
                </Text>
                <Text fontSize="10pt" textColor="blue" mr="4px">
                  Indrayudh Ghosh
                </Text>
                <Text fontSize="10pt" textColor="gray">
                  15hr ago
                </Text>
              </Flex>

              <Flex justify="center" align="center">
                <BiComment size={20} color="gray" />
                <Text fontSize="8pt" m="2px">
                  50+
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Post;
