import { ReactNode } from "react";
import "@ant-design/v5-patch-for-react-19";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { fetchFooter, fetchHeader } from "@/api/common";
import Layout from "@/components/Layout";
import "../global.css";

export const metadata = { title: "My Next App" };

type Props = { children: ReactNode };

export default async function RootLayout({ children }: Props) {
  const [header, footer] = await Promise.all([fetchHeader(), fetchFooter()]);

  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <Layout header={header} children={children} />
        </AntdRegistry>
      </body>
    </html>
  );
}
