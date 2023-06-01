import { useRecoilState } from "recoil";
import { User, userState } from "../atoms/userAtom";
import { useCookies } from "react-cookie";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { authModalState } from "../atoms/authModalAtom";

const dummyUser: User = {
  id: "wrfeafreger5t4w645t",
  fullName: "dummy",
  batch: 2025,
  branch: "ECE",
  dateJoined: new Date("2022-02-11"),
  photo: undefined,
  contributionScore: 0,
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

        const loginRes: any = await axios.post(
          "http://localhost:5000/api/auth/login",
          {
            email: googleApiRes.data.email,
            googleId: googleApiRes.data.id,
          }
        );

        console.log(loginRes.data.user);

        const jwt: string = loginRes?.data?.jwt;
        localStorage.setItem("token", jwt);
        localStorage.setItem("userEmail", loginRes.data.user.email);
        localStorage.setItem("userGoogleId", loginRes.data.user.googleId);
        setUser(loginRes?.data?.user);
        setModalState((prev) => ({ ...prev, open: false }));
      } catch (err) {
        console.log("Login Failed");
      }
    },
    onError: (res) => console.log("Login Failed"),
  });

  const checkLogin = async () => {
    const jwt = localStorage.getItem("token");
    const userEmail = localStorage.getItem("userEmail");
    const userGoogleId = localStorage.getItem("userGoogleId");
    console.log("running checklogin");
    if (jwt && userEmail && userGoogleId && !user) {
      try {
        const loginRes: any = await axios.post(
          "http://localhost:5000/api/auth/login",
          {
            email: userEmail,
            googleId: userGoogleId,
          }
        );
        setUser(loginRes.data.user);
      } catch (err) {
        console.log("failed to auto login");
      }
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userGoogleId");
    setUser(null);
    window.location.reload();
  };

  

  return [login, logout, checkLogin];
};

export default useGoogleAuth;
