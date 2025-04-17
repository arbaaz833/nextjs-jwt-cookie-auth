import React from "react";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="grid place-items-center w-screen h-screen magicpattern">
      {children}
    </div>
  );
}
