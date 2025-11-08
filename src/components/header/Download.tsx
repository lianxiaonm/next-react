import { useMemo } from "react";
import { Button, Popover, QRCode } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { useClient } from "@/jotai/common";
import Link from "next/link";

export default function Download() {
  const [isClient] = useClient();
  const content = useMemo(() => {
    const downloadUrl = "https://ant.design/";
    return (
      <div className="flex flex-col gap-[8px] p-[8px]">
        {isClient && <QRCode value={downloadUrl} />}
        <Link href="/download" className="mx-auto mt-[12px]">
          <Button type="primary" children="更多选择" />
        </Link>
      </div>
    );
  }, [isClient]);
  return (
    <Popover
      arrow={false}
      content={content}
      placement="bottomRight"
      children={<DownloadOutlined className="text-[20px] hover:text-primary" />}
    />
  );
}
