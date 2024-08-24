import React from "react";
import { ChatItem } from "./../../components/ChatItem/ChatItem";
import { useGetChatsQuery } from "../../api/api";
import cl from "./chatItemList.module.scss";
import { Header } from "../../components/Header/Header";

export const ChatItemList = () => {
  const { data, isError, isLoading } = useGetChatsQuery();

  return (
    <aside className={cl.chatItemList}>
      <Header>
        <h2>All chats</h2>
      </Header>
      {data && data?.response && (
        <ul>
          {data.response.map((chats) => {
            const { id, avatar, last_message, title } = chats;
            console.log(chats);

            return (
              <ChatItem
                key={id}
                chatId={id}
                chatAvatar={avatar}
                title={title}
                chatLastMessage={last_message.message}
                time={last_message.created_at}
              />
            );
          })}
        </ul>
      )}
      {isError && <div>Error</div>}
      {isLoading && <div>Loading chats...</div>}
    </aside>
  );
};
