import { Flex, Box, Image, Text, Divider } from "@chakra-ui/react";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import React, { useState } from "react";

type CommentProps = {
  children?: any;
};
const Comment: React.FC<CommentProps> = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Flex flex={1} direction="row" mt="15px">
      <Flex direction="column" align="center">
        <Image
          src="/images/logo.png"
          boxSize={5}
          bg="white"
          color="blue"
          borderRadius="50%"
        />
        <Flex align="center" direction="column" mt="10px">
          <BsArrowUpShort size={20} color="grey" />
          <Text fontSize={10} align="center" color="grey">
            226
          </Text>
          <BsArrowDownShort size={20} color="grey" />
        </Flex>
        {isExpanded && <Divider orientation="vertical" mt="10px" />}
      </Flex>
      <Flex direction="column" flex={1} pl="10px">
        <Flex direction="column">
          <Flex justify="space-between">
            <Text fontSize="10pt" textColor="blue" mr="4px">
              Indrayudh Ghosh
            </Text>
            <Text fontSize="10pt" textColor="gray">
              15hr ago
            </Text>
          </Flex>
          <Flex mt="8px">
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
              reprehenderit in voluptate velit esse.
            </Text>
          </Flex>
          <Flex mt="10px" direction="row" justify="space-between">
            <Flex>
              <Flex mr="20px">
                <Text fontSize="9pt" textColor="gray">
                  Reply
                </Text>
              </Flex>
              <Flex mr="20px">
                <Text fontSize="9pt" textColor="gray">
                  Share
                </Text>
              </Flex>
              <Flex>
                <Text fontSize="9pt" textColor="gray">
                  Report
                </Text>
              </Flex>
            </Flex>
            {children && (
              <Flex
                onClick={() => {
                  setIsExpanded(!isExpanded);
                }}
                cursor="pointer"
              >
                <Text fontSize="9pt" textColor="gray" mr="5px">
                  {!isExpanded && "Show More"}
                  {isExpanded && "Show Less"}
                </Text>
                {!isExpanded && <FiChevronDown size={20} color="grey" />}
                {isExpanded && <FiChevronUp size={20} color="grey" />}
              </Flex>
            )}
          </Flex>
        </Flex>
        {isExpanded && children}
      </Flex>
    </Flex>
  );
};

export default Comment;
