"use client";

import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const savedCredentials = {
  email: "b2metric@gmail.com",
  password: "b2metric",
};

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    typeof window !== "undefined" ? window.localStorage.setItem("userEmail", formData.email) : false;
    if (
        formData.email === savedCredentials.email &&
        formData.password === savedCredentials.password
      ) {
      router.push("/dashboard");
    } else {
      alert('email:b2metric@gmail.com password:b2metric')
    }
  };

  return (
    <div className="border border-gray-initial w-96 rounded-lg bg-white m-auto flex flex-col items-center py-10 px-8">
      <div className="w-12 h-12 rounded-full bg-blue"></div>
      <h3 className="text-gray-light text-lg font-bold leading-6 pt-3 pb-5">B2Metric</h3>
      <h1 className="text-gray-dark text-2xl font-bold leading-8 py-3">Log In to B2Metric</h1>
      <p className="text-gray-scale text-sm font-normal leading-5">Enter your email and password below</p>
      <div className="mt-10 w-full">
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="text-xs font-bold text-gray-scale">EMAIL</label>
            <div className="mt-1.5">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                autoComplete="email"
                required
                className="w-full rounded-lg border border-gray-lightest bg-gray-extraLight px-4 py-3 placeholder:text-gray-extraDark placeholder:text-sm placeholder:opacity-40"
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="text-xs font-bold text-gray-scale">PASSWORD</label>
            <div className="mt-1.5 relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                autoComplete="current-password"
                required
                className="w-full rounded-lg border border-gray-lightest bg-gray-extraLight px-4 py-3 placeholder:text-gray-extraDark placeholder:text-sm placeholder:opacity-40"
                onChange={onChangeHandler}
              />
              {showPassword ? (
                <EyeOff
                  className="absolute right-4 top-4 cursor-pointer text-gray-scale"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <Eye
                  className="absolute right-4 top-4 cursor-pointer text-gray-scale"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
          </div>
          <div>
            <button
              onClick={onSubmitHandler}
              className="w-full rounded-lg bg-blue py-3.5 px-6 text-sm text-white font-semibold"
            >
              Log in
            </button>
          </div>
        </form>
        <p className="mt-8 text-center text-sm text-gray-scale">
          Don’t have an account?
          <a href="#" className="font-semibold text-sm leading-6 text-blue ml-2">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
