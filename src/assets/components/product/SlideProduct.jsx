import imgProduct1 from '@/assets/images/image-product-1.jpg'
import imgProduct2 from '@/assets/images/image-product-2.jpg'
import imgProduct3 from '@/assets/images/image-product-3.jpg'
import imgProduct4 from '@/assets/images/image-product-4.jpg'


import imgProductSmall1 from '@/assets/images/image-product-1-thumbnail.jpg'
import imgProductSmall2 from '@/assets/images/image-product-2-thumbnail.jpg'
import imgProductSmall3 from '@/assets/images/image-product-3-thumbnail.jpg'
import imgProductSmall4 from '@/assets/images/image-product-4-thumbnail.jpg'
import PrevIcon from '@/assets/components/icons/PrevIcon'
import NextIcon from '@/assets/components/icons/NextIcon'
import { useState } from 'react'

const ARRAY_IMGS =[imgProduct1,imgProduct2,imgProduct3,imgProduct4];

const SlideProduct = () => {
    const [index, setIndex]=useState(0)

    const handleNext = ()=>{
        (index === ARRAY_IMGS.length -1)? setIndex(0):setIndex(index + 1)
    };
    const handlePre =()=>{
        (index === 0)? setIndex(ARRAY_IMGS.length - 1):setIndex(index -1)
    }
  return (
    <>
      <section className="grid md:grid-cols-4 md:gap-4">
        <div className='col-span-4 relative'>
            <img src={ARRAY_IMGS[index]} alt="" className='aspect-[16/14]' />
            <div className='absolute top-1/2 left-0 -translate-y-1/2 flex items-center justify-between w-full px-4'>
                <button className='bg-white h-10 w-10 grid place-items-center rounded-full' onClick={handlePre}>
                    <PrevIcon/>
                </button>
                <button className='bg-white h-10 w-10 grid place-items-center rounded-full' onClick={handleNext}>
                    <NextIcon/>
                </button>
            </div>
        </div>
        <img src={imgProductSmall1} alt="" className='hidden md:block'/>
        <img src={imgProductSmall2} alt="" className='hidden md:block' />
        <img src={imgProductSmall3} alt="" className='hidden md:block'/>
        <img src={imgProductSmall4} alt="" className='hidden md:block'/>
      </section>
    </>
  )
}

export default SlideProduct
