import { RecoilRoot } from "recoil";
import { ChakraProvider } from "@chakra-ui/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import lightTheme from "./chakra/lightTheme";
import { CookiesProvider } from "react-cookie";
import Layout from "./components/Layout/Layout";

function App() {
  //create an useEffect to check for token cookie and call login if present.
  return (
    <CookiesProvider>
      <RecoilRoot>
        <GoogleOAuthProvider clientId="494463035391-ll4ohfiv7lg4sl2ipa282332kq3p7v40.apps.googleusercontent.com">
          <ChakraProvider theme={lightTheme}>
            <Layout>
              <>Page Details</>
            </Layout>
          </ChakraProvider>
        </GoogleOAuthProvider>
      </RecoilRoot>
    </CookiesProvider>
  );
}

export default App;
