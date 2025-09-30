import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  return (
    <nav className="mx-auto w-full fixed left-[50%] -translate-x-[50%] z-20 flex lg:gap-4">
      <div className="flex justify-between w-full mx-auto  bg-black items-center p-2 border-b-orange border-b-[0.5px] ">
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>

        <NavbarBtn />
      </div>
      <div className="flex lg:hidden sm:block p-6 bg-black items-center justify-center border-b-orange border-b-[0.5px] ">
        <NavbarToggler />
      </div>
    </nav>
  );
};

export default NavbarMain;
