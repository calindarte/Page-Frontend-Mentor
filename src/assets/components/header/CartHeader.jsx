
import DeleteIcon from "@/assets/components/icons/DeleteIcon";

import {useCartDetails} from '@/assets/context/useCartDetails';
import { useContext } from 'react';

const CartHeader = () => {

  const {cartProduct, deleteCartProduct} = useContext(useCartDetails)

  return (
    <>
      <section className="absolute top-[125%] left-0 w-full z-20 md:max-w-sm md:left-full md:-translate-x-full md:top-full">
            <div className="bg-white mx-4 rounded-md shadow-xl">
              <h4 className="px-6 py-8 text-lg font-bold">Cart</h4>
              <hr />
              {
                cartProduct.length === 0 && (<p className='py-14 text-center'>Your Cart is empty</p>)
              }
              {
                cartProduct.map((product)=>(
              <article key={product.id}
              className="grid grid-cols-[1fr_4fr_1fr] gap-6 px-6 py-4 items-center">
                <img src={product.img} alt=""/>
                <div>
                  <h6>{product.title}</h6>
                  <p>
                    <span>${product.discountPrice} x {product.quantity}</span>{''}
                    <span className="font-bold">${(product.discountPrice * product.quantity).toFixed(2)}</span>
                  </p>
                </div>
                <button className="ml-auto" onClick={()=> deleteCartProduct(product.id)}>
                  <DeleteIcon className='hover:fill-Orange-Primary '/>
                </button>
              </article>

                ))
              }
              {
                cartProduct.length !== 0 && (<div className='mx-6'>
                <button className="bg-Orange-Primary hover:bg-orange-700 transition-all text-white rounded-md py-4 w-full mb-8">Checkout</button>
                </div>)
              }
              
              
            </div>
          </section>
    </>
  )
}

export default CartHeader
