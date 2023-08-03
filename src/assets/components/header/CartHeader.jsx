
import imgCartDetails from '@/assets/images/image-product-1-thumbnail.jpg'
import DeleteIcon from "@/assets/components/icons/DeleteIcon";


const CartHeader = () => {
  return (
    <>
      <section className="absolute top-[125%] left-0 w-full z-10 md:max-w-md md:left-full md:-translate-x-full md:top-full">
            <div className="bg-white mx-4 rounded-md shadow-xl">
              <h4 className="px-6 py-8 text-lg font-bold">Cart</h4>
              <hr />
              <div className="grid grid-cols-[1fr_4fr_1fr] gap-6 px-6 py-8 items-center">
                <img src={imgCartDetails} alt=""/>
                <div>
                  <h6>Fall limited edition sneakers</h6>
                  <p>
                    <span>$125.00 x 3</span>{''}
                    <span className="font-bold">$375.00</span>
                  </p>
                </div>
                <button className="ml-auto">
                  <DeleteIcon className='hover:fill-Orange-Primary '/>
                </button>
              <button className="bg-Orange-Primary hover:bg-orange-700 transition-all text-white col-span-3 rounded-md py-4">Checkout</button>
              </div>
            </div>
          </section>
    </>
  )
}

export default CartHeader
