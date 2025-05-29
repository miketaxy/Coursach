"use client";
import logo from "@/../public/67fbdba3-d0e5-438b-8e3a-21882b3d25a0-removebg-preview.png";
import profile from "@/../public/profile-svgrepo-com.svg";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { User } from "../../../../generated/prisma-client";
import Link from "next/link";

export default function Header() {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    function getUserFromLocalStorage() {
      const token = localStorage.getItem("token");
      if (!token) {
        setUsername("Guest");
      } else {
        const user: User = jwtDecode(token);
        setUsername(user.username);
      }
    }
    getUserFromLocalStorage();
  }, []);

  return (
    <header className="flex justify-between items-center bg-gray-200 p-2">
      <div className="flex flex-row items-center gap-3">
        <img src={logo.src} alt="Header" width={40} height={40} />
      </div>
      <h1 className="text-center text-2xl">Eurotrips </h1>
      <Link className="flex flex-col justify-center items-center" href="login">
        <img src={profile.src} width={40} height={40}></img>
        <span className="text-sm">{username}</span>
      </Link>
    </header>
  );
}
