import React, { FC } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";
interface FuncProp {
  className?: string;
  btnPrimary?: boolean;
  btnRounded?: boolean;
  btnOutline?: boolean;
  children?: React.ReactNode;
  handleClick?: any;
  disabled?: any;
  type?: any;
  style?:any;
}
const Button: FC<FuncProp> = ({
  className = "",
  btnPrimary = false,
  btnOutline = false,
  btnRounded = false,
  disabled = false,
  children = "",
  handleClick = () => {},
  type = "button",
  style
}) => {
  const styleClass = classNames(`${className}`, {
    [styles.btnPrimary]: btnPrimary,
    [styles.btnOutline]: btnOutline,
    [styles.btnRounded]: btnRounded,
  });
  return (
    <>
      <button
        type={type}
        onClick={handleClick}
        className={`${styleClass} ${className}`}
        disabled={disabled}
        style={style}
      >
        {children}
      </button>
    </>
  );
};
export default Button;
