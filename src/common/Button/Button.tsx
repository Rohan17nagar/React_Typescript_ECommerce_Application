import React from "react";
import "./Button.scss";
interface Props {
  buttonName: string;
  buttonClick?: () => void;
}

const Button = (props: Props) => {
  const handleButtonClick = () => {
    if (props?.buttonClick) props.buttonClick();
  };

  return (
    <button className="button-container" onClick={() => handleButtonClick()}>
      {props.buttonName}
    </button>
  );
};

export default Button;
