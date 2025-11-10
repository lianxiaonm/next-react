import { useCallback, useRef, useState } from "react";
import { Button, Input, Popover } from "antd";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import Drawer from "../Drawer";

type Props = { onCancel?: () => void };
const Content = ({ onCancel }: Props) => {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="flex items-center max-sm:px-[12px] max-sm:py-[16px]">
        <Input
          placeholder="公告，功能"
          prefix={<SearchOutlined />}
          className="max-sm:h-[40px] mr-[8px]"
        />
        <Button type="text" onClick={onCancel} icon={<CloseOutlined />} />
      </div>
    </div>
  );
};

export const SearchMobile = () => {
  const [visible, setVisible] = useState(false);
  const open = useCallback(() => setVisible(true), []);
  const close = useCallback(() => setVisible(false), []);

  return (
    <div className="px-[24px] my-[16px]">
      <Input
        readOnly
        onClick={open}
        className="h-[40px]"
        placeholder="公告，功能"
        prefix={<SearchOutlined />}
      />
      <Drawer
        open={visible}
        onClose={close}
        closable={false}
        children={<Content onCancel={close} />}
      />
    </div>
  );
};

export default function Search() {
  const ref = useRef<any>();
  const onOpenChange = useCallback((open: boolean) => {
    setTimeout(() => {
      if (open && ref.current) {
        ref.current.querySelector("input").focus();
      }
    }, 0);
  }, []);
  return (
    <Popover
      arrow={false}
      trigger="click"
      placement="bottomRight"
      onOpenChange={onOpenChange}
      content={<div ref={ref} children={<Content />} />}
      children={<SearchOutlined className="text-[20px] hover:text-primary" />}
    />
  );
}
