import { FC } from "react";
import { Container } from "react-bootstrap";
import styles from "./style.module.scss";
interface FuncProp {
  children?: any;
  classNameDiv?: string;
}
const Layout: FC<FuncProp> = ({ children = "", classNameDiv = "" }) => {
  return (
    <>
      <div className={`${classNameDiv} ${styles.mainDiv}`}>
        <Container className={styles.mainContainer}>{children}</Container>
      </div>
    </>
  );
};

export default Layout;
