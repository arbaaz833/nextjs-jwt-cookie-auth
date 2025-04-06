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
    login(values).then(() => {
      message.success("Logged In successfully");
    });
  }, []);

  return (
    <div className="shadow-[0 4px 30px rgba(0, 0, 0, 0.1)] border-[rgba(255, 255, 255, 0.3)] w-[50vw] max-w-[600px] rounded-2xl p-5 backdrop-blur-sm">
      <div className="my-6 flex items-center justify-center">
        <div className="text-xl pb-2">Login</div>
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
