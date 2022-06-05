import CartContext from "./cart-context";

const CartProvider = ({ children }) => {
  const addItemToCartHandler = (item) => console.log(item);
  const removeItemFromCartHandler = (id) => console.log(id);

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
