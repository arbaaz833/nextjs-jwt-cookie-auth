import React, { FC } from "react";

export const AuthLayout: FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="grid place-items-center w-screen h-screen">{children}</div>
  );
};
