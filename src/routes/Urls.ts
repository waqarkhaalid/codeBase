import Signup from "../pages/Auth/Signup/Signup";
import SignIn from "../pages/Auth/SignIn/SignIn";
import ForgetPassword from "../pages/Auth/ForgetPassword/ForgetPassword";
import InvalidRoute from "../pages/Page404/InvalidRoute";

export const FORGOT_PASSWORD_URL = "/forgot_password";
export const SIGNUP_URL = "/signup";
export const SIGNIN_URL = "/signin";
export const INVALIDROUTE = "/InvalidRoute";

export const URLS = [
  { path: FORGOT_PASSWORD_URL, component: ForgetPassword },
  { path: SIGNUP_URL, component: Signup },
  { path: SIGNIN_URL, component: SignIn },
  { component: InvalidRoute },
];
