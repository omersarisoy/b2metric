"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Providers } from "@/store/providers";
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
      <Providers>
        <body className={`${mulish.className} bg-dark h-screen flex items-center justify-center`}>
          {pathName !== "/" && <Sidebar />}
          <main className="flex flex-col h-full flex-1">
            {pathName !== "/" && <Navbar />}
            {children}
          </main>
        </body>
      </Providers>
    </html>
  );
}
