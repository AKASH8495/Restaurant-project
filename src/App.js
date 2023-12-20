import {  useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartProvider from "./Store/CartProvider";
import { Toaster } from "react-hot-toast";
function App() {
  const [cart, setCart] = useState(false);

  const showHandler = () =>{
    setCart(true);
  }

  const hidenHandler = () =>{
    setCart(false);
  }




  return (
    <CartProvider>
      { cart && <Cart onClose={hidenHandler}/>}
      <Header onShowCart={showHandler} />
      <main> 
        <Meals />
        <Toaster/>
      </main>
    </CartProvider>
  );
}

export default App;



