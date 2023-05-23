import { LoaderFunction } from "react-router-dom";

const CommunityPageLoader: LoaderFunction = async (props) => {
  const communityName = props.params.communityName;
  //we make api calls to load posts here.
  return {
    communityName: communityName,
  };
};

export default CommunityPageLoader;
