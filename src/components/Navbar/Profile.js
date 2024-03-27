"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

const Profile = () => {
  const { data, status } = useSession();
  const router = useRouter();

  const handleLogout = () => {
    signOut();

    router.push("/about");
  };

  const handleLogin = () => {
    router.push("/login");
  };

  if (status === "unauthenticated") {
    return (
      <div>
        <button className="p-2" onClick={handleLogin}>
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
          <DropdownMenuItem>
            <Link href="/profile">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/about">Team</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/admin">Admin Portal</Link>
          </DropdownMenuItem>
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
