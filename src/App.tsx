import { RecoilRoot } from "recoil";
import { ChakraProvider } from "@chakra-ui/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import lightTheme from "./chakra/lightTheme";
import { CookiesProvider } from "react-cookie";
import Layout from "./components/Layout/Layout";
import Router from "./components/Router/Router";

function App() {
  return (
    <CookiesProvider>
      <RecoilRoot>
        <GoogleOAuthProvider clientId="494463035391-ll4ohfiv7lg4sl2ipa282332kq3p7v40.apps.googleusercontent.com">
          <ChakraProvider theme={lightTheme}>
            <Layout>
              <Router />
            </Layout>
          </ChakraProvider>
        </GoogleOAuthProvider>
      </RecoilRoot>
    </CookiesProvider>
  );
}

export default App;
