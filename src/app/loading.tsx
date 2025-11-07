import { Spin } from "antd";

export default function Loading() {
  return (
    <div className=" fixed inset-0 flex flex-col">
      <Spin className="mt-auto mb-[12px]" size="large" />
      <div className="text-gray-500 mb-auto">正在加载…</div>
    </div>
  );
}
