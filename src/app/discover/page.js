"use client";

import { useRouter } from "next/navigation";

const Discover = () => {
  const router = useRouter();
  return (
    <div className="z-10 relative h-screen bg-slate-400">
      <img
        src="https://images.unsplash.com/photo-1464036388609-747537735eab?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-3xl text-center text-white font-semibold font-sans">
          <p className="mb-4">From Farm to Table, Every Grain Counts</p>
          <p className="mb-4">“HARVEST HUB”</p>
          <p className="mb-8">Revolutionizing Crop Storage and Management.</p>
          <button
            onClick={() => {
              router.push("/rooms");
            }}
            className="py-2 px-3 bg-teal-400 rounded-lg border-white border-2 text-white font-semibold text-xl"
          >
            Discover
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discover;
