'use client'
import Image from "next/image";
import ProfilPhoto from "../../public/pp.jpeg";
import { LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

function Navbar() {

  const [email, setEmail] = useState(window.localStorage.getItem('userEmail'))  
  const router = useRouter();
  const pathName = usePathname()
  
  useEffect(() => {
    if (!email) {
      router.push('/')
    }
  }, [email])
  
  return (
    <div className="bg-white py-9 px-7 flex items-center justify-between">
      <h1 className="text-2xl font-bold">{pathName === '/dashboard' ? 'Overview' :  (pathName === '/users' ? 'Users' : '')} </h1>
      <div className="flex items-center justify-center gap-3.5">
        <LogOut 
          className="cursor-pointer" 
          onClick={() => {
            localStorage.removeItem('userEmail')
            setEmail('')
          }}/>
        <p className="text-black text-sm font-semibold">Ömer Sarısoy</p>
        <Image
          src={ProfilPhoto}
          className="rounded-full w-10 border-2 border-gray-initial p-0.5"
          alt="Picture of the author"
          priority
        />
      </div>
    </div>
  );
}

export default Navbar;
