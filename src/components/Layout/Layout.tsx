import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import useGoogleAuth from "../../hooks/useGoogleAuth";
import { Flex } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { userState } from "../../atoms/userAtom";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [user] = useRecoilState(userState);
  const [login, logout, checkLogin] = useGoogleAuth();
  useEffect(() => {
    checkLogin();
  }, [checkLogin, user]);
  return (
    <>
      <Navbar />
      <Flex h="3rem" />
      {children}
    </>
  );
};

export default Layout;
