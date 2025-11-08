"use client";
import Link from "next/link";
import { useCallback, useState } from "react";
import { Button, Form, Input } from "antd";
import {
  QrcodeOutlined,
  GoogleOutlined,
  AppleOutlined,
} from "@ant-design/icons";
import { postLogin } from "@/api/user";

const others = [
  { icon: GoogleOutlined, text: "通过 Google 继续" },
  { icon: AppleOutlined, text: "通过 Apple 继续" },
];

type LoginForm = { account: string; password: string };

export default function Login() {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm<LoginForm>();
  const account = Form.useWatch("account", form);
  const password = Form.useWatch("password", form);

  const login = useCallback(async () => {
    await postLogin({ account, password });
  }, [account, password]);

  return (
    <main className="items-center sm:justify-center">
      <div className="rounded-[30px] p-[32px] w-[440px] sm:border sm:border-gray-300 max-sm:w-full max-sm:p-[24px] max-sm:pb-0">
        <img src="/react.svg" className="ani-spin w-[32px] h-[32px]" />
        <div className="flex text-[32px] items-center my-[18px] font-bold">
          登录
          <QrcodeOutlined className="ml-auto cursor-pointer max-sm:hidden" />
        </div>
        <Form form={form} layout="vertical" autoComplete="off">
          <Form.Item label="邮箱/手机号码" name="account" className="mb-[12px]">
            <Input
              size="large"
              className="h-[48px]"
              placeholder="邮箱/手机号码"
            />
          </Form.Item>
          <Form.Item label="密码" name="password">
            <Input.Password
              size="large"
              className="h-[48px]"
              placeholder="请输出密码"
              visibilityToggle={{ visible, onVisibleChange: setVisible }}
            />
          </Form.Item>
        </Form>
        <Button
          type="primary"
          onClick={login}
          className="w-full h-[48px]"
          children="登录"
        />
        <div className="flex items-center mt-[12px]">
          <div className="flex-1 mr-[12px] h-[1px] bg-line" />
          或
          <div className="flex-1 ml-[12px] h-[1px] bg-line" />
        </div>
        {others.map((item) => (
          <Button
            key={item.text}
            className="w-full h-[48px] mt-[12px]"
            children={item.text}
            icon={<item.icon />}
          />
        ))}
      </div>
      <Link href="/register" className="text-primary-1 mt-[16px]">
        创建账户
      </Link>
    </main>
  );
}
