import { useState } from "react";
function useMenu() {
  const [menus, setMenus] = useState([]);
  function addToMenu(newMenu) {
    setMenus([...menus, newMenu]);
  }
  function deleteMenu(menuId) {
    const filteredMenus = menus.map(({ id }) => id !== menuId);
    setMenus(filteredMenus);
  }

  return { menus, addToMenu, deleteMenu };
}

export default useMenu;
