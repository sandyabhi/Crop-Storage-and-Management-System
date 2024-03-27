"use client";

import Link from "next/link";
import Profile from "./Profile";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { title: "Rooms", href: "/rooms" },
    { title: "About", href: "/about" },
  ];

  return (
    <div className="z-10 text-white shadow-lg bg-gradient-to-br from-[#0F1035] to-[#19376D] border-b border-[#7FC7D9] fixed left-0 top-0 w-full py-4">
      <div className="flex items-center justify-evenly">
        <Link href="/">HARVEST HUB</Link>

        {links.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              className={isActive ? "border-b-2" : ""}
              href={link.href}
            >
              {link.title}
            </Link>
          );
        })}

        <Profile />
      </div>
    </div>
  );
};

export default Navbar;
