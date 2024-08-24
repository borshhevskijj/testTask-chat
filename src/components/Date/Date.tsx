import React, { FC } from "react";
import dayjs from "dayjs";
import cl from "./date.module.scss";

interface props {
  timestamp: number;
}
export const Date: FC<props> = ({ timestamp }) => {
  const date = dayjs.unix(timestamp).format("DD.MM.YYYY");

  return (
    <time className={cl.dateContainer} dateTime={`${timestamp.toString()}`}>
      <span className={cl.date}>{date}</span>
    </time>
  );
};
