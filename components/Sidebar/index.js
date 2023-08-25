"use-client";

import { User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { OverviewIcon } from "../icons";
const menuItems = [
  { href: "dashboard", label: "Overview", icon: <OverviewIcon /> },
  { href: "users", label: "Users", icon: <User color="gray" /> },
];

function Sidebar() {
  // get path from url
  const pathname = usePathname();
  // remove slash from path
  const path = pathname.replace("/", "");

  return (
    <div className="w-[250px] hidden flex-col h-screen sm:flex">
      <div className="flex items-center gap-3 py-9 px-8">
        <div className="w-8 h-8 rounded-full bg-blue"></div>
        <h3 className="text-gray-light opacity-70 text-xl font-bold">B2Metric</h3>
      </div>
      <div className="flex flex-col pt-16 ">
        {menuItems.map(({ href, label, icon }) => (
          <Link
            className={`flex items-center gap-6 py-4 px-8 ${
              href === path ? "bg-gray-extraDark" : ""
            }`}
            key={label}
            href={href}
          >
            <span className="w-8 flex justify-center items-center">{icon}</span>
            <span className="text-gray-initial text-sm font-bold text-left">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
