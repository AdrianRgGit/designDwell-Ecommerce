import { Briefcase, Menu, Search, User } from "lucide-react";
import { useState } from "react";
import SideNav from "./SideNav/SideNav";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenDrawer(newOpen);
  };

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-white/80 p-8">
      <a
        href="mailto:adrianramirezgalera@gmail.com"
        className="flex items-center gap-x-4 border-b border-transparent transition-colors duration-200 ease-in hover:border-black"
      >
        Contact with us
      </a>

      <section>
        <strong className="cursor-default font-coco-gothic-bold text-3xl">
          DESIGN DWELL
        </strong>
      </section>

      <section className="flex items-center gap-x-8">
        <Briefcase className="cursor-pointer transition-colors duration-200 hover:text-gold" />
        <User className="cursor-pointer transition-colors duration-200 hover:text-gold" />
        <Search className="cursor-pointer transition-colors duration-200 hover:text-gold" />

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
