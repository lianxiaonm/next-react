"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { Button, Form, Input, Checkbox } from "antd";
import { GoogleOutlined, AppleOutlined } from "@ant-design/icons";

const others = [
  { icon: GoogleOutlined, text: "通过 Google 继续" },
  { icon: AppleOutlined, text: "通过 Apple 继续" },
];

export default function Register() {
  const search = useSearchParams();
  const back = useMemo(() => {
    const _back = search.get("back");
    return _back ? atob(_back) : "";
  }, []);
  const [form] = Form.useForm<{ account: string }>();
  const account = Form.useWatch("account", form);
  const agree = Form.useWatch("agree", form);
  console.log("login", back, account, agree);
  return (
    <main className="items-center sm:justify-center">
      <div className="rounded-[30px] p-[32px] w-[440px] sm:border sm:border-gray-300 max-sm:w-full max-sm:p-[24px] max-sm:pb-0">
        <img src="/react.svg" className="ani-spin w-[32px] h-[32px]" />
        <div className="flex text-[32px] items-center my-[18px] font-bold">
          欢迎加入
        </div>
        <Form form={form} layout="vertical" autoComplete="off">
          <Form.Item label="邮箱/手机号码" name="account">
            <Input
              size="large"
              className="h-[48px]"
              aria-labelledby="account"
              placeholder="邮箱/手机号码（不含国际区号）"
            />
          </Form.Item>
          <Form.Item name="agree" valuePropName="checked" label={null}>
            <Checkbox>
              创建账户即表示我同意
              <Link
                href="/term"
                children="《服务条款》"
                className="border-0 border-b border-dotted inline-flex"
              />
              的和
              <Link
                href="/privacy"
                children="《隐私声明》"
                className="border-0 border-b border-dotted inline-flex"
              />
            </Checkbox>
          </Form.Item>
        </Form>
        <Button type="primary" className="w-full h-[48px]" disabled={!agree}>
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
      <Link href="/login" className="text-primary-1 mt-[16px]">
        登录
      </Link>
    </main>
  );
}
