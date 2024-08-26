import React, { FC } from "react";
import { User } from "../../interface/user";
import { Avatar } from "../Avatar";
import cl from "./message.module.scss";
import { Time } from "../Time/Time";
import checkmark from "../../assets/icons/checkmark.svg";
interface props {
  message: string;
  timestamp: number;
  user: User;
}

export const Message: FC<props> = ({ message, timestamp, user: { avatar, you, name, surname } }) => {
  const messageClassName = you ? `${cl.message} ${cl.yourMessage}` : cl.message;

  return (
    <li className={messageClassName}>
      {!you && <Avatar src={avatar} />}
      <div className={cl.messageDetails}>
        {!you && (
          <p>
            {name} {surname}
          </p>
        )}
        <p>{message}</p>
        <div className={cl.messageTime}>
          <Time timestamp={timestamp} />
          {you && <img src={checkmark} />}
        </div>
      </div>
    </li>
  );
};
