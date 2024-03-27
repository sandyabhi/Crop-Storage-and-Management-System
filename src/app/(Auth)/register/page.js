"use client";

import { signIn, useSession } from "next-auth/react";
import React from "react";
import { FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  const { data, status } = useSession();

  // console.log(data);
  return (
    <div className="bg-[#DDE6ED] min-h-screen p-8 md:p-24 flex justify-center items-center">
      <div className="text-center text-black bg-gradient-to-br from-[#A5D7E8] to-[#576CBC] p-6 rounded-lg">
        <p className="text-lg md:text-xl">
          You need to login to access the portal
        </p>
        <div className="mt-4 justify-center items-center flex">
          <button
            onClick={() => signIn("google")}
            className="flex items-center px-4 py-2 bg-white font-mono font-semibold rounded-md shadow-md hover:bg-gray-200"
          >
            <FaGoogle className="mr-2" /> Login With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
