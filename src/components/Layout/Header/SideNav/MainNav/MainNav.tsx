import React from "react";
import { MainNavProps } from "../../../../../types/headerTypes";

const MainNav: React.FC<MainNavProps> = ({ toggleProductsNav }) => {
  return (
    <>
      <section className="flex flex-col gap-y-2 text-lg">
        <button
          onClick={toggleProductsNav}
          className="text-left transition-colors duration-200 hover:text-gold"
        >
          PRODUCTS
        </button>
        <a href="#" className="transition-colors duration-200 hover:text-gold">
          ROOMS
        </a>
        <a href="#" className="transition-colors duration-200 hover:text-gold">
          SPECIAL PRICES
        </a>
        <a href="#" className="transition-colors duration-200 hover:text-gold">
          NEWS & IDEAS
        </a>
        <a href="#" className="transition-colors duration-200 hover:text-gold">
          CIRCULAR MARKET
        </a>
        <a href="#" className="transition-colors duration-200 hover:text-gold">
          DESIGN & PLANNING
        </a>
      </section>

      <section className="flex flex-col gap-y-2">
        <a href="#" className="transition-colors duration-200 hover:text-gold">
          SERVICES
        </a>
        <a href="#" className="transition-colors duration-200 hover:text-gold">
          COMPANY HISTORY
        </a>
      </section>

      <section className="flex flex-col gap-y-2 text-sm">
        <a
          href="/auth"
          className="transition-colors duration-200 hover:text-gold"
        >
          Log in
        </a>
      </section>
    </>
  );
};

export default MainNav;
