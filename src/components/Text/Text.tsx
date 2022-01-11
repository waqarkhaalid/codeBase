import React, { FC } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
interface FuncProp {
  className?: string;
  mainHeading?: boolean;
  largeText?: boolean;
  mediumText?: boolean;
  mediumTextPink?: boolean;
  smallText?: boolean;
  extraSmallText?: boolean;
  largeTextBlack?: boolean;
  mediumTextBlack?: boolean;
  smallTextBlack?: boolean;
  extraSmallTextBlack?: boolean;
  mediumTextLight?: boolean;
  smallTextLight?: boolean;
  onTextClick?: any;
  children?: any;
}
const Text: FC<FuncProp> = ({
  children = "",
  smallText = false,
  extraSmallText = false,
  className = "",
  mainHeading = false,
  mediumText = false,
  mediumTextPink = false,
  largeText = false,
  largeTextBlack = false,
  mediumTextBlack = false,
  smallTextBlack = false,
  extraSmallTextBlack = false,
  mediumTextLight = false,
  smallTextLight = false,
  onTextClick = () => { },
}) => {
  const styleClass = classNames(`${className}`, {
    [styles.largeText]: largeText,
    [styles.mediumText]: mediumText,
    [styles.mediumTextPink]: mediumTextPink,
    [styles.smallText]: smallText,
    [styles.extraSmallText]: extraSmallText,
    [styles.largeTextBlack]: largeTextBlack,
    [styles.mediumTextBlack]: mediumTextBlack,
    [styles.smallTextBlack]: smallTextBlack,
    [styles.mainHeading]: mainHeading,
    [styles.extraSmallTextBlack]: extraSmallTextBlack,
    [styles.mediumTextLight]: mediumTextLight,
    [styles.smallTextLight]: smallTextLight,
    [styles.paragraphText]:
      !extraSmallText &&
      !smallText &&
      !mediumText &&
      !mediumTextPink &&
      !largeText &&
      !extraSmallTextBlack &&
      !smallTextBlack &&
      !mediumTextBlack &&
      !mainHeading &&
      !largeTextBlack,
  });
  return (
    <>
      <p className={styleClass} onClick={onTextClick}>{children}</p>
    </>
  );
};

export default React.memo(Text);
