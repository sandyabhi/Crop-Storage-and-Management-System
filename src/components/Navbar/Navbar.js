import Link from "next/link";
import Profile from "./Profile";

const Navbar = () => {
  return (
    <div className="z-10 text-white bg-gradient-to-br from-[#0F1035] to-[#19376D] border-b border-[#7FC7D9] fixed left-0 top-0 w-full  pb-6 pt-8">
      <div className="flex items-center justify-evenly">
        <div>LOGO</div>
        <div className="flex flex-row justify-between gap-5">
          <Link href="/">Home</Link>
          {/* <Link href="/storage">Storage</Link> */}
          <Link href="/about">About</Link>
          {/* <Link href="/login">Login</Link> */}
        </div>
        <div>
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
