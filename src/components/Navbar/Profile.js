"use client";

import { signOut, useSession } from "next-auth/react";
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

  //   console.log(data?.user?.image);

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
      {/* <img src={data?.user.image} /> */}
      {/* <p></p> */}
      <DropdownMenu>
        <DropdownMenuTrigger>{data?.user.name}</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Profile;
