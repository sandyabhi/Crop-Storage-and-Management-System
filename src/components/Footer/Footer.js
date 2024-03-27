import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    // <div className="fixed bottom-0 flex w-full justify-center border-t border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    <div className="z-4 fixed bottom-0 w-full justify-center backdrop-blur-2xl border-t border-[#0B2447] p-2">
      <p className="text-center mb-2">
        Harvest Hub : Copyright © 2024. All rights reserved. All trademarks are
        property of their respective owners.
      </p>

      <div className="flex md:flex-row justify-center gap-5">
        <p className="mb-2 md:mb-0">
          <a href="#" className="flex items-center">
            <FaGithub className="mr-2" />
            <span>Github</span>
          </a>
        </p>
        <p className="mb-2 md:mb-0">
          <a
            href="https://twitter.com/abhisandeep47"
            className="flex items-center"
          >
            <FaXTwitter className="mr-2" />
            <span>Twitter</span>
          </a>
        </p>
        <p className="mb-2 md:mb-0">
          <a
            href="https://www.linkedin.com/in/sandeep-kumar-patel47/"
            className="flex items-center"
          >
            <FaLinkedin className="mr-2" />
            <span>Linkedin</span>
          </a>
        </p>
        <p className="mb-2 md:mb-0">
          <Link href="/about">About Us</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
