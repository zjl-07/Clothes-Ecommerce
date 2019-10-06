import React, { useContext } from "react";
import MenuItemsContext from "context/menu/menu.context";
import MenuItem from "components/menu-item";

const MenuItemList = () => {
  const { menuItemList } = useContext(MenuItemsContext);

  return (
    <div className="menu-item-list">
      {menuItemList.map(({ id, ...rest }) => (
        <MenuItem key={id} {...rest} />
      ))}
    </div>
  );
};

export default MenuItemList;
