import CartIcon from '@/assets/components/icons/CartIcon'

const DetailsProduct = () => {
  return (
    <>
      <section className="container mx-auto px-4  md:px-0 ">
            <p className="text-Orange-Primary font-bold tracking-wide mb-3 uppercase">Sneaker Company</p>
            <h2 className="font-bold text-3xl mb-4">Fall Limited Edition Sneakers</h2>
            <p className="text-Light grayish blue grayish blue mb-5">These low-profile sneakers are your perfect casual wear companion. Featuring a 
              durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
            <div className="font-bold grid grid-cols-3 gap-4 items-center mb-5 md:grid-cols-[1fr_3fr] md:gap-1">
              <span className="text-3xl">$125.00</span>
              <span className="text-Orange-Primary rounded-md bg-Pale-orange mr-auto py-1 px-2 ">50%</span>
              <span className="text-Grayish-blue line-through text-right text-lg md:col-span-2 md:text-left">$250.00</span>
            </div>
            <div className="grid grid-cols-3 font-bold gap-4 md:grid-cols-[1fr_1.7fr]">
              <div className="col-span-3 bg-gray-100 p-3 flex justify-between items-baseline rounded-md md:col-span-1">
                <button className='text-Orange-Primary text-3xl '>-</button>
                <span className='text-xl'>0</span>
                <button className='text-Orange-Primary text-3xl'>+</button>
              </div>
              <button className="bg-Orange-Primary text-white rounded-md py-3 col-span-3 flex justify-center gap-x-3 hover:bg-orange-700 transition-all md:col-span-1 md:items-center">
                <CartIcon fill='#fff'/>
                <span>Add to Cart</span></button>
            </div>
          </section>
    </>
  )
}

export default DetailsProduct
