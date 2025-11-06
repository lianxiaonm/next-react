import Header from "@/component/Header";
import Footer from "@/component/Footer";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="flex-1 overflow-auto" children={children} />
        <Footer />
      </body>
    </html>
  );
}
