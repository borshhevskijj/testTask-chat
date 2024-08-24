import { FC, ReactNode } from "react";
import cl from "./header.module.scss";
interface props {
  children: ReactNode;
}
export const Header: FC<props> = ({ children }) => {
  return <header className={cl.header}>{children}</header>;
};
