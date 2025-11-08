import Link from "next/link";
import { Button } from "antd";

export default function NotFound() {
  return (
    <main className="items-center justify-center p-6 text-center">
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <p className="text-xl mb-4">抱歉，我们找不到你要访问的页面。</p>
      <p className="mb-6 max-w-xl text-sm text-gray-600">
        可能的原因：页面已被移除、地址输入错误或该链接已过期。
        请检查地址或返回首页继续浏览。
      </p>

      <div className="flex gap-3">
        <Link href="/">
          <Button type="primary">返回首页</Button>
        </Link>

        <Link href="/">
          <Button type="default">浏览其他内容</Button>
        </Link>
      </div>
    </main>
  );
}
