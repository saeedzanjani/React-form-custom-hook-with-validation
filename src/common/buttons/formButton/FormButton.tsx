import React from "react";
import styles from "./FormButton.module.css";

// enums
enum btnBgColor {
  primary = "blue",
  secondary = "grey",
  dark = "black",
}

// PropTypes
type Buttontypes = "button" | "submit";

type FormButtonProps = {
  btnText: string;
  btnBg?: btnBgColor;
  btnTextColor?: string;
  btnType?: Buttontypes;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const FormButton = ({
  btnText,
  btnBg = btnBgColor.dark,
  btnTextColor = "#ffffff",
  btnType = "button",
  handleClick = () => false,
  ...props
}: FormButtonProps) => {
  return (
    <button
      type={btnType}
      className={styles.root}
      style={{ backgroundColor: btnBg, color: btnTextColor }}
      {...props}
    >
      {btnText}
    </button>
  );
};

export default FormButton;
