"use client";
import { useAuthStore } from "@/modules/auth/store/auth.store";
import React, { FC } from "react";

const Dashboard: FC = ({}) => {
  const user = useAuthStore((state) => state.user);
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="text-7xl bg-gradient-to-r from-[#484348] to-[#787478] bg-clip-text text-transparent font-extrabold">
        Welcome, {user?.userName.toUpperCase() || null}
      </div>
    </div>
  );
};
export default Dashboard;
