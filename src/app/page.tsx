"use client";
import { useAuthStore } from "@/modules/auth/store/auth.store";
import { Button, message } from "antd";
import { useRouter } from "next/navigation";
import React, { FC, useCallback } from "react";

const Dashboard: FC = ({}) => {
  const router = useRouter();
  const loading = useAuthStore((state) => state.logoutLoading);
  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);

  const handleLogout = useCallback(async () => {
    await logout()
      .then(() => {
        router.push("/login");
        message.info("Logged out successfully");
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="text-7xl bg-gradient-to-r from-[#484348] to-[#787478] bg-clip-text text-transparent font-extrabold">
        Welcome, {user?.userName.toUpperCase() || null}
      </div>
      <Button
        className="mt-4"
        type="text"
        loading={loading}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
};
export default Dashboard;
