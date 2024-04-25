import { Drawer } from "@mui/material";
import { useState } from "react";
import { SideNavProps } from "../../../../types/headerTypes";
import ProductsNav from "./ProductsNav/ProductsNav";
import MainNav from "./MainNav/MainNav";

const SideNav: React.FC<SideNavProps> = ({ openDrawer, toggleDrawer }) => {
  const [showProductsNav, setShowProductsNav] = useState(false);

  const toggleProductsNav = () => {
    setShowProductsNav(!showProductsNav);
  };

  return (
    <Drawer open={openDrawer} onClose={toggleDrawer(false)} anchor="right">
      <nav className="flex h-full flex-col justify-evenly p-24 min-w-96">
        {!showProductsNav ? (
          <MainNav toggleProductsNav={toggleProductsNav} />
        ) : (
          <ProductsNav toggleProductsNav={toggleProductsNav} />
        )}
      </nav>
    </Drawer>
  );
};

export default SideNav;
