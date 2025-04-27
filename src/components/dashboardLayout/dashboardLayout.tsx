import React, { FC } from "react";
import { Menu } from "./components/menu";

export const DashboardLayout: FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Menu />
      <div className="grid items-center w-screen h-[calc(100vh-40px)]">
        {children}
      </div>
    </div>
  );
};
