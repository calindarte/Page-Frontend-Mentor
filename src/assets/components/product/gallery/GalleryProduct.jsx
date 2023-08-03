import SlideProduct from "@/assets/components/product/gallery/SlideProduct"
import { useState } from "react"

const MainImages = ({ARRAY_IMGS,ARRAY_SMALL_IMGS}) => {

  const [isOpenModal,setIsOpenModal] = useState(false)
    const handleClickModal = ()=>{
      if(window.innerWidth > 767) return setIsOpenModal(true)
    }
    const handleCloseModal =()=>{
      setIsOpenModal(false)
    }

  return (
    <>
      <SlideProduct 
      ARRAY_IMGS={ARRAY_IMGS} 
      ARRAY_SMALL_IMGS={ARRAY_SMALL_IMGS}
      className="grid md:grid-cols-4 md:gap-4 "
      handleClickModal={handleClickModal} />
      { 
        isOpenModal && (
        <>
            <SlideProduct 
            ARRAY_IMGS={ARRAY_IMGS} 
            ARRAY_SMALL_IMGS={ARRAY_SMALL_IMGS}
            isOpenModal={isOpenModal}
            handleCloseModal={handleCloseModal}
            className="hidden md:grid md:grid-cols-4 md:gap-4 md:z-10 md:absolute md:top-1/2 md:max-w-md md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
            />
          <span 
          className=" fixed top-0 left-0 bg-black/70 w-full h-full "
          onClick={handleCloseModal}
          ></span>
        </>
        )
      }
      </>
  )
}

export default MainImages
