"use client";

import React from "react";
import { signOut, useSession } from "next-auth/react";
import { Link } from "next/link";

const Profile = () => {
  const { data, status } = useSession();

  return (
    <div className="pt-32 h-screen bg-slate-400">
      <div>
        <img src={data?.user.image} />
        <p>{data?.user.name}</p>
        <p>{data?.user.email}</p>
      </div>
    </div>
  );
};

export default Profile;
