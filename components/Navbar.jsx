import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-20 shadow-xl z=[100] bg-[#9da2d1] tracking-widest">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src="/../public/favicon.ico"
            alt="favicon"
            width="50"
            height="20"
          />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-2xl uppercase hover:border-b ">Home</li>
            </Link>
            <Link href="/about">
              <li className="ml-10 text-2xl uppercase hover:border-b ">
                About
              </li>
            </Link>
            <Link href="/projects">
              <li className="ml-10 text-2xl uppercase hover:border-b ">
                Projects
              </li>
            </Link>
            <Link href="/operations">
              <li className="ml-10 text-2xl uppercase hover:border-b ">
                Operations
              </li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 text-2xl uppercase hover:border-b ">
                Contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden cursor-pointer" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-full h-screen bg-black/70 z-[1090]"
            : "hidden"
        }
      >
        <div className="fixed left-0 top-o w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#968524] p-10 ease-in duration-500 text-white font-poppins z-[1090]">
          <div>
            <div className="flex w-full items-center justify-between ">
              <Link href="/">
                <Image
                  src="/../public/favicon.ico"
                  alt="favicon"
                  width="87"
                  height="35"
                />
              </Link>
              <div
                className="rounded-full shadow-lg shadow-white p-3 cursor-pointer"
                onClick={handleNav}
              >
                <AiOutlineClose size={20} />
              </div>
            </div>
            <div className="border-b p-2 border-white my-4">
              <p className=" text-2xl py-4 ">This is where the change begins</p>
            </div>
          </div>
          <div className="py-4 flex flex-col z-10">
            <ul className="uppercase font-bold">
              <Link href="/">
                <li className="py-6 text-lg">Home</li>
              </Link>
              <Link href="/about">
                <li className="py-6 text-lg">About</li>
              </Link>
              <Link href="/projects">
                <li className="py-6 text-lg">Projects</li>
              </Link>
              <Link href="/operations">
                <li className="py-6 text-lg">Operations</li>
              </Link>
              <Link href="/contact">
                <li className="py-6 text-lg">Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
