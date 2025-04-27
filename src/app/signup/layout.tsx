import { AuthLayout } from "@/components/authLayout/authLayout";
import React, { FC } from "react";

const Layout: FC<React.PropsWithChildren> = ({ children }) => {
  return <AuthLayout>{children}</AuthLayout>;
};

export default Layout;
