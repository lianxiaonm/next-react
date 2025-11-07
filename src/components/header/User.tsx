import { Fragment, useCallback, useMemo, useState } from "react";
import { Popover } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useAccount } from "@/jotai/common";
import Drawer from "../Drawer";

export const UserMobile = () => {
  const [{ user }] = useAccount();
  const [visible, setVisible] = useState(false);
  const open = useCallback(() => setVisible(true), []);
  const close = useCallback(() => setVisible(false), []);

  return (
    <Fragment>
      <UserOutlined className="text-[20px] hover:text-primary" onClick={open} />
      <Drawer visible={visible} onClose={close}></Drawer>
    </Fragment>
  );
};

export default function User() {
  const [{ user }] = useAccount();

  const content = useMemo(() => {
    return <div className="flex flex-col">{user?.nickName}</div>;
  }, [user]);

  return (
    <Popover
      arrow={false}
      content={content}
      placement="bottomRight"
      children={<UserOutlined className="text-[20px] hover:text-primary" />}
    />
  );
}
