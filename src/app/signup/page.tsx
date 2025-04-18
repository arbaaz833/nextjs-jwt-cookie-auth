"use client";
import { useAuthStore } from "@/modules/auth/store/auth.store";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, FormProps, Input, message } from "antd";
import { useRouter } from "next/navigation";
import React, { FC, useCallback } from "react";

type FormValues = {
  userName: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

const Signup: FC = () => {
  const router = useRouter();
  const signup = useAuthStore((state) => state.signup);
  const loading = useAuthStore((state) => state.signupLoading);

  const onFinish: FormProps["onFinish"] = useCallback<
    (values: FormValues) => void
  >((values) => {
    console.log("values: ", values);
    delete values.confirmPassword;
    signup(values).then(() => {
      message.success("Account created successfully!");
      router.push("/login");
    });
  }, []);

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="text-5xl mb-4 bg-gradient-to-r from-[#484348] to-[#787478] bg-clip-text text-transparent font-extrabold pb-1">
        SIGNUP
      </div>
      <div className="border border-gray-700/50 shadow-[0_4px_30px_rgba(0,0,0,0.1)] bg-transparent w-[50vw] max-w-[600px] rounded-2xl p-5 backdrop-blur-sm">
        <Form
          name="signup"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="userName"
            rules={[
              { required: true, message: "Please input name." },
              { min: 3, message: "Name must be at least 3 characters." },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Enter your name"
              size="large"
              type="text"
            />
          </Form.Item>
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

          <Form.Item
            name="confirmPassword"
            rules={[
              { required: true, message: "Please input your Password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("New password that you entered does not match")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Confirm password"
              size="large"
            />
          </Form.Item>

          <Form.Item className="!mb-0">
            <div className="text-center">
              <Button
                loading={loading}
                type="primary"
                htmlType="submit"
                block
                style={{ width: "50%" }}
              >
                Create account
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
