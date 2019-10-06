import { createContext } from "react";
import MENU_DATA from "./menu.data";

const MenuItemsContext = createContext(MENU_DATA);

export default MenuItemsContext;
