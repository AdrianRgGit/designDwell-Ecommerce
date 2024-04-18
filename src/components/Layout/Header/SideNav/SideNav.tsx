import { Drawer } from "@mui/material";
import React from "react";
import { SideNavProps } from "../../../../types/headerTypes";

const SideNav: React.FC<SideNavProps> = ({ openDrawer, toggleDrawer }) => {
  return (
    <Drawer open={openDrawer} onClose={toggleDrawer(false)} anchor="right">
      <nav className="flex h-full flex-col justify-evenly p-24">
        <section className="flex flex-col gap-y-2 text-lg">
          <a
            href="#"
            className="transition-colors duration-200 hover:text-gold"
          >
            PRODUCTS
          </a>
          <a
            href="#"
            className="transition-colors duration-200 hover:text-gold"
          >
            ROOMS
          </a>
          <a
            href="#"
            className="transition-colors duration-200 hover:text-gold"
          >
            SPECIAL PRICES
          </a>
          <a
            href="#"
            className="transition-colors duration-200 hover:text-gold"
          >
            NEWS & IDEAS
          </a>
          <a
            href="#"
            className="transition-colors duration-200 hover:text-gold"
          >
            CIRCULAR MARKET
          </a>
          <a
            href="#"
            className="transition-colors duration-200 hover:text-gold"
          >
            DESIGN & PLANNING
          </a>
        </section>

        <section className="flex flex-col gap-y-2">
          <a
            href="#"
            className="transition-colors duration-200 hover:text-gold"
          >
            SERVICES
          </a>
          <a
            href="#"
            className="transition-colors duration-200 hover:text-gold"
          >
            COMPANY HISTORY
          </a>
        </section>

        <section className="flex flex-col gap-y-2 text-sm">
          <a
            href="/login"
            className="transition-colors duration-200 hover:text-gold"
          >
            Log in
          </a>
          <a
            href="#"
            className="transition-colors duration-200 hover:text-gold"
          >
            My orders
          </a>
        </section>
      </nav>
    </Drawer>
  );
};

export default SideNav;
