import MenuItems from "./MenuItems";

export default function SideBar() {
  return (
    <section className="drawer-side">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 h-full bg-white">
        <MenuItems />
      </ul>
    </section>
  );
}
