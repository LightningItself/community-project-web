import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import useGoogleAuth from "../../hooks/useGoogleAuth";
import { Flex } from "@chakra-ui/react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [login, logout, checkLogin] = useGoogleAuth();
  useEffect(() => {
    checkLogin();
  }, [checkLogin]);
  return (
    <>
      <Navbar />
      <Flex h="3rem" />
      {children}
    </>
  );
};

export default Layout;
