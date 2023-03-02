import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineClose,
  AiOutlineTwitter,
} from "react-icons/ai";
import { useState } from "react";

export default function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <nav className="flex justify-between z-10 absolute w-full px-4">
      <Link href="/">
        <Image
          src="/assets/LogoJB.svg"
          alt="JB Abogados"
          width={75}
          height={75}
          priority
        />
      </Link>
      <div
        className={`fixed w-[100vw] h-[100vh] bg-sky-800 transition-transform duration-300 ${
          menuIsOpen ? "translate-x-0" : "translate-x-[100vw]"
        } `}
      >
        <div className="flex justify-between w-full p-5">
          <Link href="/">
            <Image
              src="/assets/LogoJB.svg"
              alt="JB Abogados"
              width={75}
              height={75}
              priority
            />
          </Link>
          <button
            onClick={() => setMenuIsOpen(false)}
            className="text-white md:hidden"
          >
            <AiOutlineClose className="text-white text-2xl" />
          </button>
        </div>
        <ul className="px-5 h-4/5">
          <li className="p-0">
            <button className="uppercase font-bold text-center w-full text-yellow-500 p-2 rounded border border-yellow-500 mb-2">
              Cuentenos su caso
            </button>
          </li>
          <li className="p-2 border-b-2">
            <button className="uppercase font-bold text-white">
              Acerca de
            </button>
          </li>
          <li className="p-2 border-b-2">
            <button className="uppercase font-bold text-white">Contacto</button>
          </li>
          <li className="p-2 border-b-2">
            <button className="uppercase font-bold text-white">Blog</button>
          </li>
        </ul>
        <div className="flex p-5 justify-evenly">
          <Link
            href="https://twitter.com/"
            target="_blank"
            className="text-2xl text-yellow-500"
          >
            <AiOutlineTwitter />
          </Link>
          <Link
            href="https://twitter.com/"
            target="_blank"
            className="text-2xl text-yellow-500"
          >
            <AiFillInstagram />
          </Link>
          <Link
            href="https://twitter.com/"
            target="_blank"
            className="text-2xl text-yellow-500"
          >
            <AiFillLinkedin />
          </Link>
          <Link
            href="https://twitter.com/"
            target="_blank"
            className="text-2xl text-yellow-500"
          >
            <AiFillFacebook />
          </Link>
        </div>
      </div>
      <button
        className="p-2 text-lg md:hidden"
        onClick={() => setMenuIsOpen(true)}
      >
        <RxHamburgerMenu className="text-white text-3xl" />
      </button>
    </nav>
  );
}
