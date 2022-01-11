import React, { FC } from "react";
import classNames from "classnames";
import style from "./style.module.scss";
interface FuncProp {
  className?: string;
  mainHeading?: boolean;
  subHeading?: boolean;
  smallHeading?: boolean;
  extraSmallHeading?: boolean;
  headingPink?: boolean;
  modalHeadingPink?: boolean;
  children?: any;  
}
const Heading: FC<FuncProp> = ({
  children = "",
  mainHeading = false,
  subHeading = false,
  className = "",
  smallHeading = false,
  extraSmallHeading = false,
  headingPink = false,
  modalHeadingPink = false,
  
}) => {
  const styleClass = classNames(className, {
    [style.mainHeadingSize]: mainHeading,
    [style.subHeadingSize]: subHeading,
    [style.smallHeading]: smallHeading,
    [style.extraSmallHeading]: extraSmallHeading,
    [style.headingPink]: headingPink,  
    [style.modalHeadingPink]: modalHeadingPink,
  });
  return <h2 className={styleClass}>{children}</h2>;
};

export default React.memo(Heading);
