"use client";
import React, { FC, useCallback } from "react";
import { Button, Form, Input, message } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { useAuthStore } from "@/modules/auth/store/auth.store";
import { useShallow } from "zustand/shallow";

interface IProps {}

type FormValues = {
  email: string;
  password: string;
};

const Login: FC<IProps> = ({}) => {
  const { loadingLogin, login } = useAuthStore(
    useShallow((state) => ({
      loadingLogin: state.loading,
      login: state.login,
    }))
  );

  const onFinish = useCallback((values: FormValues) => {
    console.log("values: ", values);
    login(values)
      .then(() => {
        message.success("Logged In successfully");
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="border border-gray-700/50 shadow-[0_4px_30px_rgba(0,0,0,0.1)] bg-transparent w-[50vw] max-w-[600px] rounded-2xl p-5 backdrop-blur-sm">
      <div className="my-6 flex items-center justify-center">
        <div className="text-3xl bg-gradient-to-r from-[#484348] to-[#787478] bg-clip-text text-transparent font-extrabold pb-1">
          Login
        </div>
      </div>
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

        <Form.Item>
          <div className="mt-8 text-center">
            <Button
              loading={loadingLogin}
              type="primary"
              htmlType="submit"
              block
              style={{ width: "50%" }}
            >
              Log in
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
