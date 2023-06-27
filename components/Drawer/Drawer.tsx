import { ReactNode } from "react";

import Navbar from "../Navbar/Navbar";
import SideBar from "../Navbar/SideBar";

export default function Drawer({ children }: { children: ReactNode }) {
  return (
    <section className="drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Navbar />
        {children}
      </div>
      <SideBar />
    </section>
  );
}
