import React from "react";
import { Header } from "./../../components/Header/Header";
import { useAppSelector } from "../../api/store";
import cl from "./messageList.module.scss";
import { useParams } from "react-router-dom";
import { useGetMessagesQuery } from "../../api/api";
import { Message } from "../../components/Message/Message";
import { NewMessageIndicator } from "../../components/NewMessage/NewMessageIndicator";
import chatIcon from "../../assets/icons/chatIcon.svg";
import Input from "../../components/Input/Input";
import { getDifferenceInDays } from "../../components/Date/DateDiff";
import { Date } from "../../components/Date/Date";

export const MessageList = () => {
  const { chatId: id } = useParams<{ chatId: string }>();

  const { data: messages, isLoading, isError } = useGetMessagesQuery(id!);
  const currentChat = useAppSelector((state) => state.currentChat.chats)[id!];

  return (
    <>
      <main className={cl.main}>
        <Header>
          {currentChat && (
            <div className={cl.headerWrapper}>
              <img src={chatIcon} alt="chatIcon" />
              <h1>{currentChat.title}</h1>
            </div>
          )}
        </Header>
        {messages && messages.response && (
          <>
            <ol className={cl.messageList}>
              {messages.response.map(({ id, created_at, message, user, is_new }, index) => {
                const nextMessage = messages.response[index + 1];
                const shouldRenderNewMessages = is_new && !nextMessage.is_new;
                const diff = getDifferenceInDays(created_at, nextMessage?.created_at || 0);
                return (
                  <React.Fragment key={id}>
                    <Message message={message} timestamp={created_at} user={user} />
                    {diff !== -1 && diff !== 0 && (
                      <li>
                        <Date timestamp={created_at} />
                      </li>
                    )}
                    {shouldRenderNewMessages && (
                      <li>
                        <NewMessageIndicator />
                      </li>
                    )}
                  </React.Fragment>
                );
              })}
            </ol>
            <Input />
          </>
        )}
        {isLoading && <div>loading</div>}
        {isError && <div> error</div>}
      </main>
    </>
  );
};
