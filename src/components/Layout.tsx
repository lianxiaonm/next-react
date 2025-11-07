"use client";
import { ReactNode, useEffect } from "react";
import { useClient } from "@/jotai/common";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props) {
  const [_, setClient] = useClient();
  useEffect(() => setClient(typeof window !== "undefined"), []);

  return (
    <main>
      <Header />
      <div className="flex-1 overflow-auto">{children}</div>
      <Footer />
    </main>
  );
}
