import {
  Box,
  Divider,
  Flex,
  List,
  ListIcon,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { RxDotFilled } from "react-icons/rx";

const CommunityRules: React.FC = () => {
  return (
    <Flex pt="10px" flex="1">
      <Box bgColor="white" flex="1" borderRadius="5px" p="5px">
        <Text fontWeight="600" p="5px">
          Community Rules
        </Text>
        <Divider />
        <List pt="5px" flexDir="column">
          <ListItem>
            <ListIcon as={RxDotFilled} />
            No shitposting
          </ListItem>
          <ListItem>
            <ListIcon as={RxDotFilled} />
            No NSFW content
          </ListItem>
          <ListItem>
            <ListIcon as={RxDotFilled} />
            Discussion should be relevant to programming
          </ListItem>
        </List>
      </Box>
    </Flex>
  );
};

export default CommunityRules;
