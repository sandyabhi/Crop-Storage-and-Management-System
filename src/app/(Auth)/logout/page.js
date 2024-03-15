"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const LogoutPage = () => {
  const router = useRouter();
  const { data, status } = useSession();

  console.log(data);

  return (
    <div className="bg-slate-400 min-h-screen p-24">
      aplle
      <div className="p-16">
        <button onClick={() => signOut()} className="p-4 bg-blue-100">
          LogOut
        </button>
      </div>
    </div>
  );
};

export default LogoutPage;
