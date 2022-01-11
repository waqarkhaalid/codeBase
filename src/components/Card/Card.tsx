import React, { FC } from "react";
import { Card } from "react-bootstrap";
import styles from "./style.module.scss";

interface FuncProp {
  children?: any;
  className?: string;
  handleClick?: any;
}

const CCard: FC<FuncProp> = ({
  children = "",
  className = "",
  handleClick = () => {},
}) => {
  return (
    <Card
      className={`${styles.defaultCardDesign} ${className}`}
      onClick={handleClick}
    >
      {children}
    </Card>
  );
};

export default React.memo(CCard);
