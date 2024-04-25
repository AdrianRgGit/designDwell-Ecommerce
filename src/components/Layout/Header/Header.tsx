import { Briefcase, Menu, Search, User } from "lucide-react";
import { useState } from "react";
import SideNav from "./SideNav/SideNav";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenDrawer(newOpen);
  };

  return (
    <header className="absolute top-0 z-10 flex w-full items-center justify-between bg-white/90 p-8">
      <a
        href="mailto:adrianramirezgalera@gmail.com"
        className="flex items-center gap-x-4 border-b border-transparent transition-colors duration-200 ease-in hover:border-black"
      >
        Contact with us
      </a>

      <section>
        <a href="/">
          <strong className="font-coco-gothic-bold text-3xl">
            DESIGN DWELL
          </strong>
        </a>
      </section>

      <section className="flex items-center gap-x-8">
        <a href="#">
          <Briefcase className="transition-colors duration-200 hover:text-gold" />
        </a>

        <a href="/profile">
          <User className="transition-colors duration-200 hover:text-gold" />
        </a>

        <a href="#">
          <Search className="transition-colors duration-200 hover:text-gold" />
        </a>

        <Menu
          onClick={toggleDrawer(true)}
          className="cursor-pointer transition-colors duration-200 hover:text-gold"
        />

        <SideNav openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
      </section>
    </header>
  );
};

export default Header;
