import React from "react";
import { CiMenuBurger, CiUser } from "react-icons/ci";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white/80 p-8">
      <section className="flex items-center gap-x-4">
        <FiPhone size={24} />
        <p>Contact with us</p>
      </section>

      <section>
        <strong className="font-coco-gothic-bold text-3xl">DESIGN DWELL</strong>
      </section>

      <section className="flex gap-x-8 items-center">
        <IoBagOutline size={24} />
        <CiUser size={24} />
        <FaMagnifyingGlass size={24} />
        <CiMenuBurger size={24} />
      </section>
    </header>
  );
};

export default Header;
