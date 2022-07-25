import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';
import CartItem from './CartItem';

const Cart = ({ onHideCart }) => {
  const cartContext = useContext(CartContext);
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const cartItemAddHandler = (item) => {};
  const cartItemRemoveHandler = (id) => {};
  
  const cartItems = (
    <ul className={styles.cartItems}>{
      cartContext.items.map(
        (item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
          />
        ), 
      )}
    </ul>
  );

  return (
    <Modal onClose={onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.buttonAlt} onClick={onHideCart}>Close</button>
        { hasItems && <button className={styles.button}>Order</button> }
      </div>
    </Modal>
  );
};

export default Cart;
