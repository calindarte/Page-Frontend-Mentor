import CartIcon from '@/assets/components/icons/CartIcon'
import { useCartDetails } from '@/assets/context/useCartDetails'
import { useContext, useState } from 'react'


const DetailsProduct = ({objectProducts}) => {

  const {addCartProduct} = useContext(useCartDetails);
  const [count, setCount] =useState(0)
  const decrementCount = ()=>{
    if(count === 0) return
    setCount(count - 1)
  }

  const handleAddToCart = ()=> {
          addCartProduct({
          img:objectProducts.imageSmall[0],
          id:objectProducts.id,
          title:objectProducts.title,
          discountPrice:(objectProducts.price * (1 - objectProducts.descount)).toFixed(2),
          quantity: (count === 0 ? 1 : count)
        })
        setCount(0)
  }
  return (
    <>
      <section className="container mx-auto px-8  md:px-0 ">
            <p className="text-Orange-Primary font-bold tracking-wide mb-3 uppercase">{objectProducts.subtitle}</p>
            <h2 className="font-bold text-3xl mb-4">{objectProducts.title}</h2>
            <p className="text-Light grayish blue grayish blue mb-5">{objectProducts.description}
            </p>
            <div className="font-bold grid grid-cols-[0.5fr_1fr_1fr] gap-4 items-center mb-5 md:grid-cols-[1fr_3fr] md:gap-1">
              <span className="text-3xl">${(objectProducts.price * (1 - objectProducts.descount)).toFixed(2)}</span>
              <span className="text-Orange-Primary rounded-md bg-Pale-orange mr-auto py-1 px-2 ">{objectProducts.descount * 100}%</span>
              <span className="text-Grayish-blue line-through text-right text-lg md:col-span-2 md:text-left">${(objectProducts.price).toFixed(2)}</span>
            </div>
            <div className="grid grid-cols-3 font-bold gap-5 md:grid-cols-[1fr_1.7fr]">
              <div className="col-span-3 bg-gray-100 p-3 flex justify-between items-baseline rounded-md md:col-span-1">
                <button className='text-Orange-Primary text-3xl' onClick={decrementCount}>-</button>
                <span className='text-xl'>{count}</span>
                <button className='text-Orange-Primary text-3xl' onClick={()=> setCount(count +1)}>+</button>
              </div>
              <button 
              className="bg-Orange-Primary text-white rounded-md py-3 col-span-3 flex justify-center gap-x-3 hover:bg-orange-700 transition-all md:col-span-1 md:items-center"
              onClick={handleAddToCart}
              >
                <CartIcon fill='#fff'/>
                <span>Add to Cart</span></button>
            </div>
          </section>
    </>
  )
}

export default DetailsProduct
