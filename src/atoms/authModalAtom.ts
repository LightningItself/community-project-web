import { atom } from "recoil";

export interface AuthModalState {
  open: boolean;
}

const defaultModalState: AuthModalState = {
  open: false,
};

export const authModalState = atom<AuthModalState>({
  key: "authModalState",
  default: defaultModalState,
});
