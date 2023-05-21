import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import useGoogleAuth from "../../hooks/useGoogleAuth";

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
      <>{children}</>
    </>
  );
};

export default Layout;
