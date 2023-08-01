
import PrevIcon from '@/assets/components/icons/PrevIcon'
import NextIcon from '@/assets/components/icons/NextIcon'
import { useEffect, useRef, useState } from 'react'


const SlideProduct = ({ARRAY_IMGS=[],ARRAY_SMALL_IMGS=[], isOpenModal=false,handleCloseModal=null,handleClickModal=()=>{}, ...props}) => {
    
  
  
  const [index, setIndex]=useState(0)
  const btnSlider =useRef(null)

  const handleNext = ()=>{
     (index === ARRAY_IMGS.length -1)? setIndex(0):setIndex(index + 1)
    };
  const handlePre =()=>{
     (index === 0)? setIndex(ARRAY_IMGS.length - 1):setIndex(index -1)
    }
    useEffect(()=>{
      isOpenModal && (btnSlider.current.classList.remove('md:hidden'))
      

    },[isOpenModal])
  
  return (
    <>
      <section {...props}>
        {
          isOpenModal &&  <button onClick={handleCloseModal} className='col-span-4 text-right'>Cerrar</button>

        }
        <div className='col-span-4 relative'>
            <img src={ARRAY_IMGS[index]} alt="" onClick={handleClickModal} className='aspect-[16/13] w-full md:aspect-[16/17] md:rounded-md cursor-pointer' />
            <div ref={btnSlider} className='absolute top-1/2 left-0 -translate-y-1/2 flex items-center justify-between w-full px-4 md:hidden'>
                <button className='bg-white h-10 w-10 grid place-items-center rounded-full' onClick={handlePre}>
                    <PrevIcon/>
                </button>
                <button className='bg-white h-10 w-10 grid place-items-center rounded-full' onClick={handleNext}>
                    <NextIcon/>
                </button>
            </div>
        </div>
        { 
          ARRAY_SMALL_IMGS.map((smallImg, i)=>(

          <div key={i} onClick={()=>{setIndex(i)}} className='relative rounded-md overflow-hidden cursor-pointer'>
          <img 
           src={smallImg} 
           alt=""
           className='hidden md:block md:rounded-md'
          />
          <span className={`absolute h-full w-full top-0 hover:bg-[rgba(255,255,255,0.5)] ${i === index && 'bg-[rgba(255,255,255,0.5)]'}`}></span>
          </div>

          ))
        
        }
      </section>
    </>
  )
}

export default SlideProduct
