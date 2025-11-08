"use client";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import {
  useInitCommonState, //
  useInitSimpleState,
} from "@/hooks/common";
import Header from "./header/index";
import Footer from "./footer/index";

type Props = {
  children?: ReactNode;
};

const ComplexLayout = ({ children }: Props) => {
  // 初始化header / footer 等状态的
  useInitCommonState();

  return (
    <main>
      <Header />
      <div className="mb-auto">{children}</div>
      <Footer />
    </main>
  );
};

export default function Layout({ children }: Props) {
  useInitSimpleState();

  const pathname = usePathname();
  const isSimple = ["/login", "/register"].indexOf(pathname) > -1;

  return isSimple ? children : <ComplexLayout children={children} />;
}
