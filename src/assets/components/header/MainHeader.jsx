import logoSneaker from "@/assets/images/logo.svg";
import avatar from "@/assets/images/image-avatar.png";
import MenuIcon from "@/assets/components/icons/MenuIcon";
import CartIcon from "@/assets/components/icons/CartIcon";
import CloseIcon from "../icons/CloseIcon";
import { useState } from "react";

const MainHeader = () => {

  const [navClass, setNavClass] = useState(
    "hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0"
    )

  const handleOpenButton = () =>{
    setNavClass(
      "absolute top-0 left-0 flex h-full w-4/5 flex-col gap-y-[21px] bg-white p-8 font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0"
      )
  }
  const handleCloseButton = () =>{
      setNavClass("hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0"
      )
  }
 
  return (
    <>
      <header className=" container flex mx-auto px-4 items-center gap-8 py-8 bg-gray-200">
        <button className="  md:hidden" onClick={handleOpenButton}>
          <MenuIcon />
        </button>
        <img src={logoSneaker} alt="logo" className="mr-auto md:mr-0 mb-1" />
        <nav 
        className={navClass}>
          <button className="mb-10 md:hidden" onClick={handleCloseButton}>
            <CloseIcon/></button>
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <div className="flex gap-4">
          <button>
            <CartIcon />
          </button>
          <img src={avatar} alt="avatar" className="w-10" />
        </div>
      </header>
    </>
  );
};

export default MainHeader;
