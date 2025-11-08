import Link from "next/link";
import { useCallback, useState } from "react";
import { cond } from "lodash-es";
import { Popover } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

type Props = {
  tag?: "new" | "beta";
  icon: string;
  title: string;
  linkURL?: string;
  description?: string;
  navs: Array<{ title: string; navs: Array<Omit<Props, "navs">> }>;
};

export const NavItemMobile = ({ tag, icon, title, linkURL, navs }: Props) => {
  return null;
};

const Content = ({ navs }: { navs: Props["navs"] }) => {
  return null;
};

export default function NavItem({ tag, title, linkURL, navs }: Props) {
  const [open, setOpen] = useState(false);
  const hasChildNav = navs && navs.length > 0;

  const openChange = useCallback((value: boolean) => setOpen(value), []);

  const titleNode = cond([
    [
      () => tag === "new",
      () => (
        <div className="nav-title">
          {title}
          <span className="nav-tip-new bg-primary-1" />
        </div>
      ),
    ],
    [
      () => tag === "beta",
      () => (
        <div className="nav-title">
          {title}
          <span children="beta" className="nav-tip-beta bg-primary-1" />
        </div>
      ),
    ],
    [() => true, () => <div children={title} />],
  ])();

  //
  return hasChildNav ? (
    <Popover
      arrow={false}
      onOpenChange={openChange}
      content={<Content navs={navs} />}
    >
      <div className="nav-item">
        {titleNode}
        <CaretDownOutlined rotate={open ? 180 : 0} className={"text-[12px]"} />
      </div>
    </Popover>
  ) : (
    <Link children={titleNode} href={linkURL || ""} className="nav-item " />
  );
}
