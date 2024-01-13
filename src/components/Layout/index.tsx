import { Outlet } from "react-router-dom";
import { PRIVATE_ROUTE } from "../../core/constants/routePaths";
import MenuItem from "./components/MenuItem";
import MenuListItem from "./components/MenuListItem";
import LogOutButton from "./components/LogoutButton";

const MENU_LIST = [
  {
    path: PRIVATE_ROUTE.HOME,
    name: "Dashboard",
  },
  {
    path: PRIVATE_ROUTE.PORTFOLIO,
    name: "Portfolio",
  },
  {
    path: PRIVATE_ROUTE.PROFILE,
    name: "Profile",
  },
];

const Layout = () => {
  return (
    <div className="relative">
      <nav className="sticky top-0 bg-UI-BLACK text-xl z-10">
        <ul className="flex flex-row justify-end space-x-5 pr-5 h-10">
          {MENU_LIST.map(({ path, name }, id) => (
            <MenuItem key={id} path={path} name={name} />
          ))}
          <MenuListItem>
            <LogOutButton />
          </MenuListItem>
        </ul>
      </nav>
      <div className="py-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
