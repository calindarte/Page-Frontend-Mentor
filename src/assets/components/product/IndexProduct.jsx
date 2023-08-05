import DetailsProduct from "@/assets/components/product/details/DetailsProduct"
import GalleryProduct from "@/assets/components/product/gallery/GalleryProduct"

import imgProduct1 from '@/assets/images/image-product-1.jpg'
import imgProduct2 from '@/assets/images/image-product-2.jpg'
import imgProduct3 from '@/assets/images/image-product-3.jpg'
import imgProduct4 from '@/assets/images/image-product-4.jpg'


import imgProductSmall1 from '@/assets/images/image-product-1-thumbnail.jpg'
import imgProductSmall2 from '@/assets/images/image-product-2-thumbnail.jpg'
import imgProductSmall3 from '@/assets/images/image-product-3-thumbnail.jpg'
import imgProductSmall4 from '@/assets/images/image-product-4-thumbnail.jpg'

const ARRAY_IMGS =[imgProduct1,imgProduct2,imgProduct3,imgProduct4];
const ARRAY_SMALL_IMGS=[imgProductSmall1,imgProductSmall2,imgProductSmall3,imgProductSmall4]

const objectProducts = {
  id:1,
  title:'Fall Limited Edition Sneakers',
  description:'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
  subtitle:'SNEAKER COMPANY',
  price:250,
  descount:0.5,
  imagesMain: ARRAY_IMGS,
  imageSmall:ARRAY_SMALL_IMGS
}

const IndexProduct = () => {
  return (
    <>
      <main className=" grid grid-cols-1 items-center gap-8 md:container md:mx-auto md:min-h-[calc(100vh-88px-3px)] md:grid-cols-2 lg:gap-x-16 lg:px-8 ">
          <GalleryProduct 
          ARRAY_IMGS={objectProducts.imagesMain} 
          ARRAY_SMALL_IMGS={objectProducts.imageSmall}/>
          <DetailsProduct objectProducts={objectProducts}/>
        </main>
        <footer>
            <p className="text-center text-sm  my-4 mx-6">Challenge by Frontend Mentor. Coded by Carlos Lindarte</p>
        </footer>
    </>
  )
}

export default IndexProduct
