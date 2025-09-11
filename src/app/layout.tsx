import type { Metadata } from "next";
import "./globals.css";

import Navbar from "../../components/common/nav";
import Footer from "../../components/common/footer";

export const metadata: Metadata = {
  title: "ThinkBig",
  description: "ThinkBig Property Management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="bg-white overflow-x-hidden antialiased">
        {/* ✅ Navbar only here */}
        <Navbar />

        {/* ✅ Main content wrapper */}
        <main className="w-full overflow-x-hidden">{children}</main>

        {/* ✅ Footer at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
