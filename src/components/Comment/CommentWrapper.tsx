import React from "react";
import { Flex, Box } from "@chakra-ui/react";

type CommentWrapperProps = {
  children?: any;
};

const CommentWrapper: React.FC<CommentWrapperProps> = ({ children }) => {
  return (
    <>
      {children.map((comment: any) => (
        <Flex flex={1}>
          <Box
            flex={1}
            bg="#F4F4F8"
            m="5px"
            borderRadius="5px"
            p="15px"
            pt="0px"
          >
            {comment}
          </Box>
        </Flex>
      ))}
    </>
  );
};

export default CommentWrapper;
