"use client";

import { ConfigProvider, theme } from "antd";
import React, { FC } from "react";

export const AntdConfig: FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#85418A",
          fontFamily: "Orbitron",
        },
        algorithm: theme.darkAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
};
