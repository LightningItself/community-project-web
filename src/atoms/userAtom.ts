import { atom } from "recoil";

export interface User {
  name: String | null;
  photo: String | null;
  //   joinedCommunities: Array<Community> | null;
  joinedCommunities: Array<any> | null;
  dateJoined: Date | null;
}

const defaultUserState: User = {
  name: null,
  photo: null,
  joinedCommunities: null,
  dateJoined: null,
};

export const userState = atom<User>({
  key: "authModalState",
  default: defaultUserState,
});
