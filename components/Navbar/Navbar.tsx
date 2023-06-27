import { GiHamburgerMenu } from "react-icons/gi";
import MenuItems from "./MenuItems";
import Logo from "../Logo/Logo";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full navbar bg-white">
      <div className="flex-1 px-2 mx-2">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          <MenuItems />
        </ul>
      </div>
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <GiHamburgerMenu />
        </label>
      </div>
    </nav>
  );
}
