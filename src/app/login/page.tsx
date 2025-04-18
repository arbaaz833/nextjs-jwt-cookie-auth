"use client";
import React, { FC, useCallback } from "react";
import { Button, Form, Input, message, Typography } from "antd";
import {
  ArrowRightOutlined,
  LockOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { useAuthStore } from "@/modules/auth/store/auth.store";
import { useRouter } from "next/navigation";

type FormValues = {
  email: string;
  password: string;
};

const Login: FC = ({}) => {
  const router = useRouter();
  const loading = useAuthStore((state) => state.loginLoading);
  const login = useAuthStore((state) => state.login);

  const onFinish = useCallback((values: FormValues) => {
    console.log("values: ", values);
    login(values)
      .then(() => {
        console.log("HERE");
        message.success("Logged In successfully");
        router.push("/");
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="text-5xl mb-4 bg-gradient-to-r from-[#484348] to-[#787478] bg-clip-text text-transparent font-extrabold pb-1">
        LOGIN
      </div>
      <div className="border border-gray-700/50 shadow-[0_4px_30px_rgba(0,0,0,0.1)] bg-transparent w-[50vw] max-w-[600px] rounded-2xl p-5 backdrop-blur-sm">
        <Form
          name="normal_login"
          initialValues={{ remember: true }}
          style={{ maxWidth: "600px" }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input email!" },
              { type: "email" },
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="Email"
              size="large"
              type="email"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
              size="large"
            />
          </Form.Item>

          <Form.Item className="!mb-0">
            <div className="flex flex-col items-center">
              <Button
                loading={loading}
                type="primary"
                className="mb-4"
                htmlType="submit"
                block
                style={{ width: "50%" }}
              >
                Proceed
              </Button>
              <div className="text-right w-full cursor-pointer">
                <Button
                  type="text"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                  onClick={() => router.push("/signup")}
                >
                  Create account
                </Button>
              </div>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
