"use client";
import { useAuthStore } from "@/modules/auth/store/auth.store";
import { Button, message } from "antd";
import { useRouter } from "next/router";
import React, { FC, use, useCallback } from "react";
import { useShallow } from "zustand/shallow";

interface Props {}

export const Dashboard: FC<Props> = ({}) => {
  const router = useRouter();
  const { logout, loading } = useAuthStore(
    useShallow((state) => ({
      loading: state.loading,
      logout: state.logout,
    }))
  );

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
    <>
      <div className="text-7xl bg-gradient-to-r from-[#484348] to-[#787478] bg-clip-text text-transparent font-extrabold">
        Authenticated
      </div>
      <Button
        className="mt-4"
        type="text"
        loading={loading}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </>
  );
};
export default Dashboard;
