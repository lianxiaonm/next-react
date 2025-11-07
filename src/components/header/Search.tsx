import { Button, Input, Popover } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useCallback, useMemo, useRef } from "react";

export default function Search() {
  const ref = useRef<any>();
  const content = useMemo(
    () => (
      <div className="flex flex-col gap-[8px]" ref={ref}>
        <div className="flex items-center gap-[8px]">
          <Input prefix={<SearchOutlined />} />
          <Button type="text" children="Cancel" />
        </div>
      </div>
    ),
    []
  );
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
      content={content}
      placement="bottomRight"
      onOpenChange={onOpenChange}
      children={<SearchOutlined className="text-[20px] hover:text-primary" />}
    />
  );
}
