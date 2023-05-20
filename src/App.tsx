import React from "react";
import { RecoilRoot } from "recoil";
import { ChakraProvider } from "@chakra-ui/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Navbar from "./components/Navbar/Navbar";
import lightTheme from "./chakra/lightTheme";
import { CookiesProvider } from "react-cookie";

function App() {

  //create an useEffect to check for token cookie and call login if present.
  return (
    <CookiesProvider>
      <RecoilRoot>
        <GoogleOAuthProvider clientId="494463035391-ll4ohfiv7lg4sl2ipa282332kq3p7v40.apps.googleusercontent.com">
          <ChakraProvider theme={lightTheme}>
            <Navbar />
          </ChakraProvider>
        </GoogleOAuthProvider>
      </RecoilRoot>
    </CookiesProvider>
  );
}

export default App;
