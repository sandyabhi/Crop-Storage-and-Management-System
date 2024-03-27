"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "next/navigation";

const Profile = () => {
  const { data, status } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    signOut();

    router.push("/about");
  };

  const handleLogin = () => {
    router.push("/login");
  };

  if (status === "unauthenticated") {
    const isActive = pathname.startsWith("/login");
    return (
      <div>
        <button className={isActive ? "border-b-2" : ""} onClick={handleLogin}>
          Login
        </button>
      </div>
    );
  }

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <span className="flex items-center justify-center">
            <img
              src={data?.user.image}
              alt="img"
              className="rounded-full w-8 h-8 mr-2"
            />
            <p>{data?.user.name}</p>
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <Link href="/profile">
            <DropdownMenuItem className="cursor-pointer">
              Profile
            </DropdownMenuItem>
          </Link>
          <Link href="/about">
            <DropdownMenuItem className="cursor-pointer">Team</DropdownMenuItem>
          </Link>
          <Link href="/admin">
            <DropdownMenuItem className="cursor-pointer">
              Admin Portal
            </DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Profile;
