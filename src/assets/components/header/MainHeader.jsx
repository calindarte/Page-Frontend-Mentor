import { useContext, useState } from "react";
import NavLink from "@/assets/components/header/NavLink";
import CartHeader from "@/assets/components/header/CartHeader";

import logoSneaker from "@/assets/images/logo.svg";
import avatar from "@/assets/images/image-avatar.png";


import MenuIcon from "@/assets/components/icons/MenuIcon";
import CartIcon from "@/assets/components/icons/CartIcon";
import CloseIcon from "@/assets/components/icons/CloseIcon";
import { useCartDetails } from "@/assets/context/useCartDetails";


const MainHeader = () => {

  const {totalQuantityProduct} = useContext(useCartDetails)

  const [isOpenCart,setIsOpenCart]=useState(false)

  const [isOpenMenu, setIsOpenMenu] = useState(false)
   

  const handleOpenMenu = () =>{
    setIsOpenMenu(true)
  }
  const handleCloseMenu = () =>{
      setIsOpenMenu(false)
  }
 
  return (
    <>
      <header className=" relative z-10 container flex mx-auto p-4 items-center gap-8 md:p-0 ">
        <button className=" md:hidden" onClick={handleOpenMenu}>
          <MenuIcon />
        </button>
        <img src={logoSneaker} alt="logo" className="mr-auto md:mr-0 mb-1" />
        <nav 
        className={`font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0 ${isOpenMenu ? 'fixed top-0 left-0 h-full flex w-4/5 flex-col  bg-white px-8 py-2 z-30':'hidden'}`}>
          <button className="mb-10 md:hidden" onClick={handleCloseMenu}>
            <CloseIcon/></button>
            <NavLink text='Collections'/>
            <NavLink text='Men'/>
            <NavLink text='Women'/>
            <NavLink text='About'/>
            <NavLink text='Contact'/>
        </nav>
        <div className="flex gap-4 ">
          <button 
          onClick={()=>{setIsOpenCart(!isOpenCart)}}
          className="relative"
          >
            <CartIcon />
            <span className="absolute top-0 right-0 translate-x-2 bg-Orange-Primary text-white text-xs font-bold px-2 rounded-full">{totalQuantityProduct}</span>
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
