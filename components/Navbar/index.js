'use client'
import Image from "next/image";
import ProfilPhoto from "../../public/pp.jpeg";
import { LogOut, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { OverviewIcon, UserIcon } from "../icons";

function Navbar() {
  const [email, setEmail] = useState(typeof window !== "undefined" ? window.localStorage.getItem('userEmail') : false || '')  
  const [open, setOpen] = useState(false)
  const router = useRouter();
  const pathName = usePathname()
  
  useEffect(() => {
    if (!email) {
      router.push('/')
    }
  }, [email])

  return (
    <div className="bg-overviewBg py-9 px-7 flex items-center justify-between">
      <h1 className="text-2xl font-bold">{pathName === '/dashboard' ? 'Overview' :  (pathName === '/users' ? 'Users' : '')}</h1>
      <div className="flex items-center justify-center gap-3.5">
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
         {open ?  <X /> :  <Menu />}
        </button>
        <div className={`${"flex flex-col items-start gap-3 rounded-lg py-6 px-8 bg-dark border-blue absolute top-20 right-20"} ${open ? 'block' : 'hidden'}`}>
          <Link href="/dashboard" className="flex items-center gap-2 text-gray-initial" onClick={() => setOpen(false)}> 
            <OverviewIcon /> Overview
          </Link>
          <Link href="/users" className="flex items-center gap-2 text-gray-initial" onClick={() => setOpen(false)}> 
            <UserIcon /> User
          </Link>
        </div>
        <LogOut 
          className="cursor-pointer" 
          onClick={() => {
            typeof window !== "undefined" ? window.localStorage.removeItem('userEmail') : false
            setEmail('')
          }}/>
        <div className="items-center gap-3 hidden lg:flex">
          <p className="text-black text-sm font-semibold">Ömer Sarısoy</p>
          <Image
            src={ProfilPhoto}
            className="rounded-full w-10 border-2 border-gray-initial p-0.5"
            alt="Picture of the author"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
