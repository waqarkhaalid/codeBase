import AppRouter from "./routes/AppRouter";
import "./App.css";
import "./assets/scss/style.scss";
import { withRouter } from "react-router-dom";
const App = () => {
  return <AppRouter />;
};

export default withRouter(App);
