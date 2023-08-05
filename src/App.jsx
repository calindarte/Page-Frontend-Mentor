import Header from "./assets/components/header/MainHeader"
import IndexProduct from "./assets/components/product/IndexProduct"

import CartDetailsProvider from '@/assets/context/useCartDetails'
const App = () => {
  return (
    <CartDetailsProvider>
        <Header/>
        <IndexProduct/>
        
        
    </CartDetailsProvider>
  )
}

export default App
