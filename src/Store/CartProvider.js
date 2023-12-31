import CartContext from "./CartContext";
import { useReducer } from "react";


const defaultCartState = {
      items: [],
      totalAmount: 0,
};

// Inside cartReducer
const cartReducer = (state, action) => {
      if (action.type === "ADD") {
        const updateTotalAmount =
          state.totalAmount + action.item.price * action.item.amount;
    
        const existingCartItemIndex = state.items.findIndex(
          (item) => item.id === action.item.id
        );
    
        const existingCartItem = state.items[existingCartItemIndex];
    
        let updatedItems;
    
        if (existingCartItem) {
          const updatedItem = {
            ...existingCartItem,
            amount: existingCartItem.amount + action.item.amount // Corrected action.item.amount
          };
    
          updatedItems = [...state.items];
          updatedItems[existingCartItemIndex] = updatedItem;
        } else {
          updatedItems = state.items.concat(action.item);
        }
    
        return {
          items: updatedItems,
          totalAmount: updateTotalAmount
        };
      }

       if (action.type === "REMOVE") { // Implement the REMOVE action type logic
        const existingCartItemIndex = state.items.findIndex(
          (item) => item.id === action.id
        );
    
        const existingCartItem = state.items[existingCartItemIndex];
        const updateTotalAmount = state.totalAmount - existingCartItem.price;
        
        let updatedItems;
    
        if (existingCartItem.amount === 1) {
          updatedItems = state.items.filter((item) => item.id !== action.id);
        } else {
          const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 };
          updatedItems = [...state.items];
          updatedItems[existingCartItemIndex] = updatedItem;
        }
    
    
        return {
          items: updatedItems,
          totalAmount: updateTotalAmount
        };
      }
    
      return defaultCartState;
    };
    





const CartProvider = (props) =>{

      const [cartState, cartAction] = useReducer(cartReducer, defaultCartState)

      const addItemToCartHandler = (item) =>{
            cartAction({type: 'ADD', item: item});
      }

      const removeItemFromCartHandler = (id) => {
            cartAction({type: 'REMOVE', id: id});
      }

      const  cartContext  = {
            items: cartState.items,
            totalAmount: cartState.totalAmount,
            addItem: addItemToCartHandler,
            removeItem: removeItemFromCartHandler
      }



      return <CartContext.Provider value={cartContext}>
            {props.children}
      </CartContext.Provider>
}

export default CartProvider;










