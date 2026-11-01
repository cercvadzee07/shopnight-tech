import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ShopNight Tech",
  description: "Premium Gaming Gear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#05080c] text-white pt-20 flex flex-col min-h-screen">
        <Navbar />
        {/* მთავარი კონტენტი დაიკავებს შუა სივრცეს (flex-grow) */}
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
