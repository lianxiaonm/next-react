import { ReactNode } from "react";
import { Drawer as Drawer1 } from "antd";
import { useClient } from "@/jotai/common";
import { useMyResponsive } from "@/hooks/device";

type Props = {
  open: boolean;
  onClose: () => void;
  closable?: boolean;
  children?: ReactNode;
  placement?: "left" | "top" | "right" | "bottom";
};
export default function Drawer({
  open,
  placement,
  closable = true,
  onClose,
  children,
}: Props) {
  const [isClient] = useClient();
  const { mobile } = useMyResponsive();
  const width = mobile ? "100%" : 378;

  return isClient ? (
    <Drawer1
      open={open}
      width={width}
      onClose={onClose}
      children={children}
      placement={placement}
      classNames={{ body: "p-0" }}
      closable={closable && { placement: "end" }}
    />
  ) : null;
}
