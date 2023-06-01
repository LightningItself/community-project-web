import { atom } from "recoil";

export interface User {
  id: String;
  fullName: String;
  batch: Number;
  branch: String;
  dateJoined: Date;
  photo: string | undefined;
  //   joinedCommunities: Array<CommunitySnippet> | null;
  joinedCommunities?: Array<any>;
  createdPosts?: Array<any>;
  contributionScore: Number;
}

export const userState = atom<User | null>({
  key: "userState",
  default: null,
});
