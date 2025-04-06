import React from "react";

export default function Layout({ children }: React.PropsWithChildren) {
  return <div className="grid items-center w-screen h-screen">{children}</div>;
}
