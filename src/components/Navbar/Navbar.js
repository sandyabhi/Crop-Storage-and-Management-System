import Link from "next/link";
import Profile from "./Profile";

const Navbar = () => {
  return (
    <div className="z-10 text-white shadow-lg bg-gradient-to-br from-[#0F1035] to-[#19376D] border-b border-[#7FC7D9] fixed left-0 top-0 w-full py-4">
      <div className="flex items-center justify-evenly">
        <Link href="/">HARVEST HUB</Link>
        <Link href="/rooms">Rooms</Link>
        <Link href="/about">About</Link>

        <Profile />
      </div>
    </div>
  );
};

export default Navbar;
