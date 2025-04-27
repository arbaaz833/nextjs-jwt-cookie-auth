"use client";
import { useAuthStore } from "@/modules/auth/store/auth.store";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, message, Modal, Space } from "antd";
import { useRouter } from "next/navigation";
import React, { FC, useCallback, useState } from "react";

export const Menu: FC = () => {
  const loading = useAuthStore((state) => state.logoutLoading);
  const router = useRouter();
  const logout = useAuthStore((state) => state.logout);
  const [open, setOpen] = useState<boolean>(false);

  const handleLogout = useCallback(async () => {
    logout()
      .then(() => {
        router.push("/login");
        message.info("Logged out successfully");
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <div>
      <nav className="h-10 p-2 flex items-center justify-end">
        <Dropdown
          menu={{
            items: [
              {
                key: "1",
                label: "Logout",
                onClick: () => {
                  setOpen(true);
                },
              },
            ],
          }}
          trigger={["click"]}
        >
          <Space size="middle" direction="horizontal">
            <Avatar icon={<UserOutlined />} size="small" />
            <DownOutlined />
          </Space>
        </Dropdown>
      </nav>
      <Modal
        title="Logout"
        open={open}
        onOk={handleLogout}
        onCancel={() => setOpen(false)}
      >
        <p>Are you sure you want to logout?</p>
      </Modal>
    </div>
  );
};
