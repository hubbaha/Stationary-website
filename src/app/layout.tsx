import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import HeaderMain from "@/components/HeaderMain";
import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>
      <Header></Header>
      <HeaderMain></HeaderMain>
      <Navbar></Navbar>
        {children}
        {/* <AboutUs></AboutUs> */}
      
      </body>
    </html>
  );
}
