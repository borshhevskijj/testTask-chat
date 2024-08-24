import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { MessageList } from "../MessageList/MessageList";
const styles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
} as React.CSSProperties;

const placeHolder = <div style={styles}>ПРОСТИТЕ! НО ДЛЯ МОБИЛЬНЫХ ТЕЛЕФОНОВ У НАС ЕСТЬ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ</div>;

export const RoutesContent = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkScreenSize = () => {
    setIsMobile(window.innerWidth < 700);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<div style={styles}>select chat to start chatting...</div>} />
        <Route path="/chat/:chatId" element={isMobile ? placeHolder : <MessageList />} />
        <Route path="*" element={<div style={styles}>404</div>} />
      </Routes>
    </>
  );
};
