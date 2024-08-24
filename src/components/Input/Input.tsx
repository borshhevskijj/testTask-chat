import React from "react";
import { EditableSpan } from "../EditableSpan/EditableSpan";
import attachIcon from "../../assets/icons/attachIcon.svg";
import sendIcon from "../../assets/icons/sendIcon.svg";
import cl from "./input.module.scss";
const Input = () => {
  return (
    <span className={cl.input}>
      <EditableSpan />
      <div className={cl.wrapper}>
        <img src={attachIcon} alt="attach" />
        <img src={sendIcon} alt="attach" />
      </div>
    </span>
  );
};

export default Input;
