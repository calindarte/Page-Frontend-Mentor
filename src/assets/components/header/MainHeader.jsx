import { useState } from "react";
import NavLink from "@/assets/components/header/NavLink";
import CartHeader from "@/assets/components/header/CartHeader";

import logoSneaker from "@/assets/images/logo.svg";
import avatar from "@/assets/images/image-avatar.png";


import MenuIcon from "@/assets/components/icons/MenuIcon";
import CartIcon from "@/assets/components/icons/CartIcon";
import CloseIcon from "@/assets/components/icons/CloseIcon";


const MainHeader = () => {

  const [isOpenCart,setIsOpenCart]=useState(false)

  const [navClass, setNavClass] = useState(
    "hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0"
    )

  const handleOpenButton = () =>{
    setNavClass(
      "absolute top-0 left-0 h-full flex w-4/5 flex-col gap-y-[21px] bg-white p-8 font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0 z-10"
      )
  }
  const handleCloseButton = () =>{
      setNavClass("hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0"
      )
  }
 
  return (
    <>
      <header className=" relative container flex mx-auto p-4 items-center gap-8 md:p-0">
        <button className=" md:hidden" onClick={handleOpenButton}>
          <MenuIcon />
        </button>
        <img src={logoSneaker} alt="logo" className="mr-auto md:mr-0 mb-1" />
        <nav 
        className={navClass}>
          <button className="mb-10 md:hidden" onClick={handleCloseButton}>
            <CloseIcon/></button>
            <NavLink text='Collections'/>
            <NavLink text='Men'/>
            <NavLink text='Women'/>
            <NavLink text='About'/>
            <NavLink text='Contact'/>
        </nav>
        <div className="flex gap-4">
          <button onClick={()=>{setIsOpenCart(!isOpenCart)}}>
            <CartIcon />
          </button>
          <img src={avatar} alt="avatar" className="w-10" />
          {
            isOpenCart && <CartHeader/>
          }
          
        </div>
      </header>
      <span className="container mx-auto hidden h-[3px] md:block w-full bg-gray-300"></span>
    </>
  );
};

export default MainHeader;
