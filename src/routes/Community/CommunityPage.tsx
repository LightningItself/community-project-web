import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../../components/Community/Header";
import { LoaderFunction } from "react-router-dom";
import PageContent from "../../components/Layout/PageContent";
import { Flex } from "@chakra-ui/react";
import Post from "../../components/Community/Post";

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
        <div>left menu</div>
        <Flex>
          <Post />
        </Flex>
        <div>right menu</div>
      </PageContent>
    </>
  );
};

export default CommunityPage;
