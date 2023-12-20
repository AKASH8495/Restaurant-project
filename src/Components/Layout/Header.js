import classes from './Header.module.css'

import CartButton from './CartButton';
const Header = (props) =>{
      return (
            <div>
                  <header className={classes.header}>
                        <h1>FoodTest</h1>
                        <CartButton onClick={props.onShowCart}/>
                  </header>

            </div>
      )
}


export default Header;