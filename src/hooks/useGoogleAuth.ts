import { useRecoilState } from "recoil";
import { User, userState } from "../atoms/userAtom";
import { useCookies } from "react-cookie";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { authModalState } from "../atoms/authModalAtom";

const dummyUser: User = {
  name: "Indrayudh Ghosh",
  photo: "www.dummylink.com",
  joinedCommunities: [],
  dateJoined: new Date("2022-02-11"),
};

const dummyJwt = "fsdfsdafasdfsdaafsfd";

//sends the google profile id to server to check for existing accounts.
//if present -> logs in
//if not found, prompts to create a new account with this google account.
//COMPLETE after backend endpoint is done.
//currently using dummy user to login.
//NOTE: use httpOnly cookie to authorize all subsequent transactions.

const useGoogleAuth = () => {
  const [user, setUser] = useRecoilState(userState);
  const [cookies, setCookies, removeCookies] = useCookies();
  const [modalState, setModalState] = useRecoilState(authModalState);

  const login = useGoogleLogin({
    onSuccess: async (res) => {
      try {
        const googleApiRes = await axios.get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${res.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${res.access_token}`,
              Accept: "application/json",
            },
          }
        );
        console.log("GoogleApiRes", googleApiRes);
        const googleAccountId = googleApiRes.data.id;
        //send googleAccountId and email to server. receive jwt and user data
        //currently using dummy values
        setCookies("token", dummyJwt);
        setUser(dummyUser);
        setModalState((prev) => ({ ...prev, open: false }));
      } catch (err) {
        console.log("Login Failed");
      }
    },
    onError: (res) => console.log("Login Failed"),
  });

  const checkLogin = () => {
    const jwt = cookies["token"];
    if (jwt !== undefined) {
      try {
        //send googleAccountId and email to server. receive jwt and user data
        //currently using dummy values
        setCookies("token", dummyJwt);
        setUser(dummyUser);
      } catch (err) {
        console.log("failed to auto login");
      }
    }
  };

  const logout = () => {
    removeCookies("token");
    setUser(null);
    window.location.reload();
    // do we need to refresh?
  };

  return [login, logout, checkLogin];
};

export default useGoogleAuth;
