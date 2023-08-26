"use-client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { OverviewIcon, UserIcon } from "../icons";

function Sidebar() {
  const pathname = usePathname();
  const path = pathname.replace("/", "");

  const menuItems = [
    { href: "dashboard", label: "Overview", icon: <OverviewIcon  active={path}/> },
    { href: "users", label: "Users", icon: <UserIcon active={path}/> },
  ];
  
  return (
    <div className="w-60 hidden flex-col h-screen lg:flex bg-dark">
      <div className="flex items-center gap-3 py-9 px-8">
        <div className="w-8 h-8 rounded-full bg-blue"></div>
        <h3 className="text-gray-light opacity-70 text-xl font-bold">B2Metric</h3>
      </div>
      <div className="flex flex-col pt-16 ">
        {menuItems.map(({ href, label, icon }) => (
          <Link
            className={`flex items-center gap-6 py-4 px-8 text-light ${
              href === path ? "bg-gray-scale text-lightBlue border-l-2 border-lightBlue": ""
            }`}
            key={label}
            href={href}
          >
            <span className="w-8 flex justify-center items-center">{icon}</span>
            <span className="text-gray-initial text-sm text-left">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
