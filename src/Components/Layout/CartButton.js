import CartContext from "../../Store/CartContext";
import CartIcon from "../Cart/CartIcon";
import classes from './CartButton.module.css';
import { useContext } from "react";

const CartButton = (props) =>{
      const cartCtx = useContext(CartContext);


      const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
            return currentNumber + item.amount;
      }, 0);

      const btnClasses = `${classes.button} ${classes.bump}`;

      return(
            <button className={btnClasses} onClick={props.onClick}>

                  <span className={classes.icon}>
                        <CartIcon/>

                  </span>
                  <span>
                        Your Cart
                  </span>
                  <span className={classes.badge}>
                     {numberOfCartItems}
                  </span>

            </button>
      )
}

export default CartButton;