import { Flex } from "@chakra-ui/react";
import React from "react";

type PageContentProps = {
  children: any;
};

const PageContent: React.FC<PageContentProps> = ({ children }) => {
  return (
    <Flex justify="center" p="16px 0px" border="1px solid red">
      <Flex w="95%" justify="center" maxWidth="1290px" border="1px solid green">
        <Flex
          direction="column"
          display={{ base: "none", md: "flex" }}
          flexGrow={1}
        >
          {children && children[0 as keyof typeof children]}
        </Flex>
        <Flex direction="column" w={{ base: "100%", md: "65%" }}>
          {children && children[1 as keyof typeof children]}
        </Flex>
        <Flex
          direction="column"
          display={{ base: "none", md: "flex" }}
          flexGrow={1}
        >
          {children && children[2 as keyof typeof children]}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PageContent;
