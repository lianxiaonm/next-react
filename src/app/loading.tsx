import { Spin } from "antd";

export default function Loading() {
  return (
    <div className=" fixed inset-0 flex flex-col">
      <Spin className="my-auto" size="large" />
    </div>
  );
}
