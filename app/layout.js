"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Mulish } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const metadata = {
  title: "B2Metric",
  description: "Created by Ömer Sarısoy",
};

export default function RootLayout({ children }) {
  const pathName = usePathname();

  return (
    <html lang="en">
        <body className={`${mulish.className}  h-screen flex items-center justify-center`}>
          {pathName !== "/" && <Sidebar />}
          <main className={`${'flex flex-col h-full w-full'} ${pathName === '/'? 'bg-dark' : 'bg-overviewBg'}`}>
            {pathName !== "/" && <Navbar />}
            {children}
          </main>
        </body>
    </html>
  );
}
