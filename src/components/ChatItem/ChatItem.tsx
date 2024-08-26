import { FC } from "react";
import { Avatar } from "../Avatar";
import cl from "./chatItem.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { Time } from "../Time/Time";

interface props {
  chatId: string;
  chatAvatar: string;
  chatLastMessage: string;
  time: number;
  title: string;
}

export const ChatItem: FC<props> = ({ chatId, chatAvatar, chatLastMessage, time, title }) => {
  const navigate = useNavigate();
  // const { chatId: chatIdInPath } = useParams() ?? "";

  const path = window.location.pathname; //костыль
  const chatIdInPath = path.split("/").pop(); //костыль

  const isCurrentChat = chatIdInPath === chatId;
  const chatItemClassName = isCurrentChat ? `${cl.chatItem} ${cl.chatItemActive}` : cl.chatItem;

  const openMessages = () => {
    navigate(`/chat/${chatId}`);
  };

  const handleClick = () => {
    if (isCurrentChat) {
      return;
    }
    openMessages();
  };

  return (
    <li onClick={handleClick} className={chatItemClassName}>
      <Avatar src={chatAvatar} />
      <div className={cl.chatItemInfo}>
        <header>
          <h3>{title}</h3>
          <Time timestamp={time} />
        </header>
        <div className={cl.lastMessage}>
          <p>{chatLastMessage}</p>
        </div>
      </div>
    </li>
  );
};
