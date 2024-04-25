export interface SideNavProps {
  openDrawer: boolean;
  toggleDrawer: (newOpen: boolean) => () => void;
}

export interface MainNavProps {
  toggleProductsNav: () => void;
}
