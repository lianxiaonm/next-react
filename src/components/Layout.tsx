"use client";
import { ReactNode } from "react";
import { useInitCommonState } from "@/hooks/common";
import Header from "./header/index";
import Footer from "./footer/index";

type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props) {
  useInitCommonState();

  return (
    <main>
      <Header />
      <div className="flex-1 overflow-auto">{children}</div>
      <Footer />
    </main>
  );
}
