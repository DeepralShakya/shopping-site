import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderTop from "../../components/HeaderTop";
import HeaderMain from "../../components/HeaderMain";
import Navbar from "../../components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shopping Website",
  description: "Provides different kinds of products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderTop/>
        <HeaderMain />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
