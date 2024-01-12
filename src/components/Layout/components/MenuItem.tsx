import { Link } from "react-router-dom";
import MenuListItem from "./MenuListItem";

type MenuItemProps = {
  path: string;
  name: string;
};

const MenuItem = ({ path, name }: MenuItemProps) => {
  return (
    <MenuListItem>
      <Link to={path}> {name} </Link>
    </MenuListItem>
  );
};

export default MenuItem;
