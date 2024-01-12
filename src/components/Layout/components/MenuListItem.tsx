import { ReactNode } from "react";

const MenuListItem = ({ children }: { children: ReactNode }) => {
  return <li className="flex flex-col justify-center">{children}</li>;
};

export default MenuListItem;
