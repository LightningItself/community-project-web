import { atom } from "recoil";

export interface User {
  name: String | null;
  photo: String | null;
  //   joinedCommunities: Array<Community> | null;
  joinedCommunities: Array<any> | null;
  dateJoined: Date | null;
}

export const userState = atom<User | null>({
  key: "userState",
  default: null,
});
