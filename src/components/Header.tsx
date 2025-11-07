import { useCallback, useState } from "react";
import { Button } from "antd";
import {
  MenuOutlined,
  CloseOutlined,
  SearchOutlined,
  DownloadOutlined,
  GlobalOutlined,
  SunOutlined,
  MoonFilled,
} from "@ant-design/icons";
import { useClient } from "@/jotai/common";

const navs = [
  { name: "导航一", link: "" },
  { name: "导航二", link: "" },
  { name: "导航三", link: "" },
  { name: "导航四", link: "" },
];

export default function Header() {
  const [isClient] = useClient();
  const [visible, setVisible] = useState(false);

  const open = useCallback(() => setVisible(true), []);
  const close = useCallback(() => setVisible(false), []);

  return (
    <header className="flex flex-none h-[55px] items-center py-[4px] shadow px-[12px]">
      <img src="/react.svg" className="ani-spin w-[32px] h-[32px]" />
      <div className="flex gap-[12px] ml-[24px] max-sm:hidden">
        {navs.map((nav) => (
          <div
            key={nav.name}
            children={nav.name}
            className="text-[16px] text-t-primary hover:text-primary-1 cursor-pointer"
          />
        ))}
      </div>
      <div className="flex gap-[12px] ml-auto max-sm:hidden">
        <SearchOutlined className="text-[20px] hover:text-primary" />
        <Button className="">登录</Button>
        <Button type="primary">注册</Button>
        <DownloadOutlined className="text-[20px] hover:text-primary" />
        <GlobalOutlined className="text-[20px] hover:text-primary" />
        <SunOutlined className="text-[20px] hover:text-primary" />
      </div>

      {/* mobile */}
      <div className="ml-auto sm:hidden">
        <MenuOutlined
          onClick={open}
          className="text-gray-700 active:text-primary"
        />
        {isClient && visible && (
          <div className="fixed inset-0 flex flex-col p-[12px] bg-basic">
            <div className="flex flex-none text-[20px]">
              <CloseOutlined className="ml-auto" onClick={close} />
            </div>
            <div className="flex my-[16px]">
              <Button className="flex-1">登录</Button>
              <Button type="primary" className="flex-1 ml-[12px]">
                注册
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
