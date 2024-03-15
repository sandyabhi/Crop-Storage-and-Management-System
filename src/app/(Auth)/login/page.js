"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const LoginPage = () => {
  const router = useRouter();
  const { data, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/storage");
  }

  console.log(data);

  return (
    <div className="bg-slate-400 min-h-screen p-24">
      LoginPage
      <div className="p-16">
        <button onClick={() => signIn("google")} className="p-4 bg-blue-100">
          Login With Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
