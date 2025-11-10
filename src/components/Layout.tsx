"use client";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import {
  useInitCommonState, //
  useInitSimpleState,
} from "@/hooks/common";
import Header, { IHeaderProps } from "./header/index";
import Footer from "./footer/index";

type Props = {
  header: IHeaderProps;
  children?: ReactNode;
};

const ComplexLayout = ({ header, children }: Props) => {
  // 初始化header / footer 等状态的
  useInitCommonState();

  return (
    <main>
      <Header {...header} />
      <div className="mb-auto">{children}</div>
      <Footer />
    </main>
  );
};

export default function Layout(props: Props) {
  useInitSimpleState();

  const pathname = usePathname();
  const isSimple = ["/login", "/register"].indexOf(pathname) > -1;

  return isSimple ? props.children : <ComplexLayout {...props} />;
}
