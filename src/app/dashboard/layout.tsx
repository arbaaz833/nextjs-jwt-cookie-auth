import { DashboardLayout } from "@/components/dashboardLayout/dashboardLayout";
import React, { FC } from "react";

const Layout: FC<React.PropsWithChildren> = ({ children }) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default Layout;
