import { CloseOutlined } from "@ant-design/icons";
import { ReactNode } from "react";

type Props = {
  visible: boolean;
  onClose: () => void;
  children?: ReactNode;
};
export default function Drawer({ visible, onClose, children }: Props) {
  return visible ? (
    <div className="fixed inset-0 flex flex-col pt-[24px] bg-basic">
      <div className="flex flex-none text-[24px] px-[16px]">
        <CloseOutlined className="ml-auto" onClick={onClose} />
      </div>
      <div className="flex-1 overflow-y-auto" children={children} />
    </div>
  ) : null;
}
