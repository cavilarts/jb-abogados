import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { useState } from "react";

export default function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <nav className="flex justify-between ">
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
        className={`fixed w-[100vw] h-[100vh] bg-white transition-transform duration-300 ${
          menuIsOpen ? "translate-x-0" : "translate-x-[100vw]"
        } `}
      >
        <div className="flex justify-end w-full p-5">
          <button onClick={() => setMenuIsOpen(false)}>
            <GrClose />
          </button>
        </div>
        <ul className="px-5 h-4/5">
          <li className="p-2">
            <button className="uppercase font-bold text-center w-full bg-sky-700 text-white p-2 rounded">
              Cuentenos su caso
            </button>
          </li>
          <li className="p-2 border-b-2 border-sky-700">
            <button className="uppercase font-bold">Acerca de</button>
          </li>
          <li className="p-2 border-b-2 border-sky-700">
            <button className="uppercase font-bold">Contacto</button>
          </li>
          <li className="p-2 border-b-2 border-sky-700">
            <button className="uppercase font-bold">Blog</button>
          </li>
        </ul>
        <div className="flex p-5 justify-evenly">
          <Link
            href="https://twitter.com/"
            target="_blank"
            className="text-2xl text-sky-700"
          >
            <AiOutlineTwitter />
          </Link>
          <Link
            href="https://twitter.com/"
            target="_blank"
            className="text-2xl text-sky-700"
          >
            <AiFillInstagram />
          </Link>
          <Link
            href="https://twitter.com/"
            target="_blank"
            className="text-2xl text-sky-700"
          >
            <AiFillLinkedin />
          </Link>
          <Link
            href="https://twitter.com/"
            target="_blank"
            className="text-2xl text-sky-700"
          >
            <AiFillFacebook />
          </Link>
        </div>
      </div>
      <button className="p-2 text-lg" onClick={() => setMenuIsOpen(true)}>
        <RxHamburgerMenu />
      </button>
    </nav>
  );
}
