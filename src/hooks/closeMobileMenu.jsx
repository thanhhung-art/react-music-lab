import { useEffect } from "react";

const useCloseMobileMenu = () => {
  useEffect(() => {
    document.querySelector(".menu-mobile").classList.add("hide-menu");
  }, []);
};

export default useCloseMobileMenu;
