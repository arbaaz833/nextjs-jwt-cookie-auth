"use client";

import { ConfigProvider, theme } from "antd";
import React, { FC } from "react";
type Props = {
  fontFamily?: string;
};

export const AntdConfig: FC<React.PropsWithChildren & Props> = ({
  children,
  fontFamily,
}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#85418A",
          fontFamily: fontFamily,
        },
        algorithm: theme.darkAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
};
