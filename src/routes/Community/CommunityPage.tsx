import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../../components/Community/Header";

interface LoaderData {
  communityName: String;
}

const CommunityPage = () => {
  const communityData = useLoaderData() as LoaderData;
  return (
    <>
      <Header communityData={communityData} />
    </>
  );
};

export default CommunityPage;
