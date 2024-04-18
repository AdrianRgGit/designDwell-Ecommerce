export interface SideNavProps {
  openDrawer: boolean;
  toggleDrawer: (newOpen: boolean) => () => void;
}
