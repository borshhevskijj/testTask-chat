import React, { useState } from "react";
import cl from "./editableSpan.module.scss";

export const EditableSpan = () => {
  const [isEmpty, setIsEmpty] = useState(true);
  const onInputHandler = (e: React.FormEvent<HTMLSpanElement>) => {
    setIsEmpty(e.currentTarget.textContent!.trim() === "");
  };

  return (
    <span
      className={`${cl.editableSpan} ${isEmpty ? cl.placeholder : ""}`}
      onInput={onInputHandler}
      contentEditable="true"
      role="textbox"
      aria-multiline="true"
      spellCheck="true"
    ></span>
  );
};
