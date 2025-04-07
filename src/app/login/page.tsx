"use client";
import React, { FC, useCallback } from "react";
import { Button, Form, Input, message } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { useAuthStore } from "@/modules/auth/store/auth.store";
import { useShallow } from "zustand/shallow";
import { useRouter } from "next/navigation";

interface IProps {}

type FormValues = {
  email: string;
  password: string;
};

const Login: FC<IProps> = ({}) => {
  const router = useRouter();
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
        router.push("/dashboard");
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
              className="!bg-transparent"
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
            <div className="text-center">
              <Button
                loading={loadingLogin}
                type="primary"
                htmlType="submit"
                block
                style={{ width: "50%" }}
              >
                Proceed
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
