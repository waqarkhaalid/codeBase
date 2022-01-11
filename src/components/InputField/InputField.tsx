import React, { FC } from "react";
import Text from "../Text/Text";
import styles from "./style.module.scss";
interface FuncProp {
  className?: string;
  placeholder?: string;
  error?: boolean;
  errorClass?: string;
  helpertext?: string;
  value?: any;
  onChange?: any;
  name?: any;
  type?: string;
  min?: any;
  max?: any;
  maxLength?: any;
  onKeyPress?: any;
}
const InputField: FC<FuncProp> = ({
  placeholder,
  type,
  className,
  error,
  errorClass,
  helpertext,
  onChange,
  value,
  name,
  min,
  max,
  maxLength,
  onKeyPress,
}) => {
  return (
    <div className={`wrapDivMargin ${styles.inputDesign}`}>
      <input
        type={type}
        placeholder={placeholder}
        className={`form-control ${styles.inputStyle} ${className}`}
        name={name}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        maxLength={maxLength}
        onKeyPress={onKeyPress}
      />
      {error ? <Text smallText>{helpertext}</Text> : null}
    </div>
  );
};

export default InputField;
