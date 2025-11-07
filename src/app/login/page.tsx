"use client";
import { useSearchParams } from "next/navigation";
import { Button, Form, Input } from "antd";
import {
  QrcodeOutlined,
  UserOutlined,
  GoogleOutlined,
  AppleOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useMemo } from "react";

const others = [
  { icon: UserOutlined, text: "使用通行密钥继续" },
  { icon: GoogleOutlined, text: "通过 Google 继续" },
  { icon: AppleOutlined, text: "通过 Apple 继续" },
];

export default function Login() {
  const search = useSearchParams();
  const back = useMemo(() => {
    const _back = search.get("back");
    return _back ? atob(_back) : "";
  }, []);
  const [form] = Form.useForm<{ account: string }>();
  const account = Form.useWatch("account", form);
  console.log("login", back, account);
  return (
    <main className="items-center sm:justify-center">
      <div className="sm:border sm:border-gray-300 rounded-[30px] p-[40px] sm:w-[420px] w-full">
        <img src="/react.svg" className="ani-spin w-[32px] h-[32px]" />
        <div className="flex text-[32px] items-center my-[18px] font-bold">
          登录 <QrcodeOutlined className="ml-auto max-sm:hidden" />
        </div>
        <Form form={form} layout="vertical" autoComplete="off">
          <Form.Item label="邮箱/手机号码" name="account">
            <Input
              size="large"
              className="h-[48px]"
              placeholder="邮箱/手机号码（不含国际区号）"
            />
          </Form.Item>
        </Form>
        <Button type="primary" className="w-full h-[48px]">
          继续
        </Button>
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
