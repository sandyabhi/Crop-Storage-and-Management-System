import Link from "next/link";

const Navbar = () => {
  return (
    <div className="z-10 fixed left-0 top-0 w-full border-b border-gray-300 bg-gradient-to-b from-zinc-800 to-zinc-950 pb-6 pt-8">
      <div className="flex items-center justify-evenly">
        <div>LOGO</div>
        <div className="flex flex-row justify-between gap-5">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
