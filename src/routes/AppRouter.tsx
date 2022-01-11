import { FC } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import shortid from "shortid";
import Layout from "../pages/Layout";
import { URLS } from "./Urls";

interface FuncProp {}

const AppRouter: FC<FuncProp> = () => {
  const userToken = useSelector((state: any) => state.Auth);
  console.log("userToken", userToken);
  console.log("URLS", URLS);
  return (
    <>
      <Router>
        <Switch>
          {URLS.map((obj) => (
            <Route
              key={shortid.generate()}
              path={obj.path}
              exact
              render={(props) => {
                return userToken.token ? (
                  <Redirect
                    to={{
                      pathname: "/signin",
                    }}
                  />
                ) : (
                  <obj.component />
                );
              }}
            />
          ))}
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
