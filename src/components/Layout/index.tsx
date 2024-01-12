import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserInformationContextType } from "../../core/authentication/type";
import { UserInformationContext } from "../../core/authentication/context";
import { PRIVATE_ROUTE } from "../../core/constants/routePaths";
import MenuItem from "./components/MenuItem";
import MenuListItem from "./components/MenuListItem";

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
  const { logout } = useContext<UserInformationContextType>(
    UserInformationContext
  );

  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
      share across all the pages on your site, like navigation. */}
      <nav className="sticky top-0 bg-UI-BLACK text-xl">
        <ul className="flex flex-row justify-end space-x-5 pr-5 h-10">
          {MENU_LIST.map(({ path, name }, id) => (
            <MenuItem key={id} path={path} name={name} />
          ))}
          <MenuListItem>
            <button onClick={logout} className="px-4 rounded-3xl mx-auto w-fit">
              Logout
            </button>
          </MenuListItem>
        </ul>
      </nav>

      {/* An <Outlet> renders whatever child route is currently active,
      so you can think about this <Outlet> as a placeholder for
      the child routes we defined above. */}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
