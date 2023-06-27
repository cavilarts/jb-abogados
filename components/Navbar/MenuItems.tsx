"use client";

import { AiFillPhone } from "react-icons/ai";
import Link from "next/link";

export default function MenuItems() {
  return (
    <>
      <li>
        <Link className="link" href="/nosotros">
          Nosotros
        </Link>
      </li>
      <li>
        <Link className="link" href="/">
          Personas
        </Link>
      </li>
      <li>
        <Link className="link" href="/">
          Empresas
        </Link>
      </li>
      <li>
        <a className="link" href="tel:3224454241">
          Llámanos
          <AiFillPhone />
        </a>
      </li>
    </>
  );
}
