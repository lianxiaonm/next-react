import { Fragment, useCallback, useState } from "react";
import { cond } from "lodash-es";
import { Button, Spin } from "antd";
import {
  MenuOutlined,
  GlobalOutlined,
  SunOutlined,
  MoonFilled,
} from "@ant-design/icons";
import { useAccount, useLightMode } from "@/jotai/common";
import { useMyResponsive } from "@/hooks/device";

import Drawer from "../Drawer";
import NavItem from "./NavItem";
import Download from "./Download";
import User, { UserMobile } from "./User";
import Search, { SearchMobile } from "./Search";

import "./index.scss";

const navs = [
  { icon: "", title: "协议", linkURL: "/term", tag: "", navs: [] },
  { icon: "", title: "隐私", linkURL: "/privacy", tag: "beta", navs: [] },
  {
    icon: "",
    title: "子菜单",
    linkURL: "",
    tag: "new", //
    navs: [
      {
        title: "子菜单一",
      },
    ],
  },
];

export default function Header() {
  const [{ isLogin }] = useAccount();
  const { mobile } = useMyResponsive();
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
        <div className="flex my-[16px] px-[24px] gap-[12px]">
          <Button className="flex-1 h-[40px]" onClick={login} children="登录" />
          <Button
            type="primary"
            className="flex-1 h-[40px]"
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
      <div className="nav-warpper h-full ml-[24px] max-sm:hidden ">
        {navs.map((nav: any) => (
          <NavItem {...nav} key={nav.title} />
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
      {!!mobile && (
        <div className="flex gap-[12px] ml-auto sm:hidden">
          {isLogin ? mobileUserNode : null}
          <MenuOutlined
            onClick={open}
            className="text-gray-700 active:text-primary"
          />
          <Drawer open={visible} onClose={close} placement="right">
            {!isLogin ? mobileUserNode : null}
            <SearchMobile />
          </Drawer>
        </div>
      )}
    </header>
  );
}
