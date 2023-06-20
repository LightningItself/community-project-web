import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../../components/Community/Header";
import { LoaderFunction } from "react-router-dom";
import PageContent from "../../components/Layout/PageContent";
import { Flex } from "@chakra-ui/react";
import Post from "../../components/Community/Post";
import Menu from "../../components/Community/LeftMenu/LeftMenu";
import MenuItem from "../../components/Community/LeftMenu/MenuItem";
import { CreatePost } from "../../components/Community/RightMenu/CreatePost";
import RightMenu from "../../components/Community/RightMenu/RightMenu";
import CommunityRules from "../../components/Community/RightMenu/CommunityRules";

interface LoaderData {
  communityName: String;
}

export const CommunityPageLoader: LoaderFunction = async (props) => {
  const communityName = props.params.communityName;
  //we make api calls to load posts here.
  return {
    communityName: communityName,
  };
};

const CommunityPage = () => {
  const communityData = useLoaderData() as LoaderData;
  return (
    <>
      <Header communityData={communityData} />
      <PageContent>
        <Menu>
          <MenuItem isActive={false} />
          <MenuItem isActive={true} />
        </Menu>
        <Flex direction="column">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </Flex>
        <RightMenu>
          <CreatePost />
          <CommunityRules />
        </RightMenu>
      </PageContent>
    </>
  );
};

export default CommunityPage;
