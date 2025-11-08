import { Fragment, useCallback, useState } from "react";
import { cond } from "lodash-es";
import { Button, Spin } from "antd";
import {
  MenuOutlined,
  GlobalOutlined,
  SunOutlined,
  MoonFilled,
} from "@ant-design/icons";
import { useClient, useAccount, useLightMode } from "@/jotai/common";

import Drawer from "../Drawer";
import Search from "./Search";
import Download from "./Download";
import User, { UserMobile } from "./User";

const navs = [
  { name: "导航一", link: "" },
  { name: "导航二", link: "" },
  { name: "导航三", link: "" },
  { name: "导航四", link: "" },
];

export default function Header() {
  const [isClient] = useClient();
  const [{ isLogin }] = useAccount();
  const [isLight, setLightMode] = useLightMode();
  const [visible, setVisible] = useState(false);

  const login = useCallback(() => {
    const href = window.location.href;
    window.location.href = `/login?back=${btoa(href)}`;
  }, []);

  const register = useCallback(() => {
    const href = window.location.href;
    window.location.href = `/register?back=${btoa(href)}`;
  }, []);

  const open = useCallback(() => setVisible(true), []);
  const close = useCallback(() => setVisible(false), []);
  const switchMode = useCallback(() => setLightMode((pre) => !pre), []);

  const ModeIcon = isLight ? SunOutlined : MoonFilled;

  const [userNode, mobileUserNode] = cond([
    [() => isLogin === true, () => [<User />, <UserMobile />]],
    [
      () => isLogin === false,
      () => [
        <Fragment>
          <Button onClick={login}>登录</Button>
          <Button type="primary" onClick={register} children="注册" />
        </Fragment>,
        <div className="flex my-[16px]">
          <Button className="flex-1" onClick={login} children="登录" />
          <Button
            type="primary"
            className="flex-1 ml-[12px]"
            onClick={register}
            children="注册"
          />
        </div>,
      ],
    ],
    [() => true, () => [<Spin />, null]],
  ])();

  return (
    <header className="flex flex-none h-[55px] items-center py-[4px] px-[12px]">
      <img src="/react.svg" className="ani-spin w-[32px] h-[32px]" />
      <div className="flex gap-[16px] ml-[24px] max-sm:hidden">
        {navs.map((nav) => (
          <div
            key={nav.name}
            children={nav.name}
            className="text-[16px] text-t-primary hover:text-primary-1 cursor-pointer"
          />
        ))}
      </div>
      <div className="flex gap-[12px] ml-auto max-sm:hidden">
        <Search />
        {userNode}
        <Download />
        <GlobalOutlined className="text-[20px] hover:text-primary" />
        <ModeIcon
          onClick={switchMode}
          className="text-[20px] hover:text-primary"
        />
      </div>

      {/* mobile */}
      <div className="flex gap-[12px] ml-auto sm:hidden">
        {isLogin ? mobileUserNode : null}
        <MenuOutlined
          onClick={open}
          className="text-gray-700 active:text-primary"
        />
        {isClient && (
          <Drawer visible={visible} onClose={close}>
            {!isLogin ? mobileUserNode : null}
          </Drawer>
        )}
      </div>
    </header>
  );
}
