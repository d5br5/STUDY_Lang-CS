import classNames from "classnames";
import React from "react";
import styles from "./Tooltup.module.scss";

const Tooltip = ({
  top = 0,
  right = 0,
  bottom = 0,
  left = 0,
  color = "",
  bgColor = "",
  orientation = "top",
  message,
  ...restProps
}) => {
  const style = {
    top,
    right,
    bottom,
    left,
    color,
    backgroundColor: bgColor,
  };

  const setOrientationClass = (type) => {
    if (type === "top") return styles.orientationTop;
    if (type === "right") return styles.orientationRight;
    if (type === "bottom") return styles.orientationBottom;
    if (type === "left") return styles.orientationLeft;
  };

  return (
    <span
      role="tooltip"
      className={classNames(styles.tooltip, setOrientationClass(orientation))}
      style={style}
      {...restProps}
    >
      {message}
    </span>
  );
};

export default Tooltip;
