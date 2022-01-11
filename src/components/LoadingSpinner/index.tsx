import React from "react";

import "./LoadingSpinner.css";

const LoadingSpinner = (props: any) => {
  return (
    <div
      className={`loading-spinner ${
        props.asOverlay && "loading-spinner__overlay"
      } ${props.className}`}
    >
      <div
        className={`${props.large && "lds-dual-ring-large"} ${
          props.small && "lds-dual-ring-small"
        } ${!props.small && !props.large && "lds-dual-ring"} ${props.color}`}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
