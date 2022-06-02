import Modal from '../UI/Modal';
import styles from './Cart.module.css';

const Cart = ({ onHideCart }) => {
  const cartItems = (
    <ul className={styles.cartItems}>{
      [{id: 'c1', name: 'sushi', amount: 2, price: 12.99}].map(
        (item) => (<li key={item.id}>{item.name}</li>), 
      )}
    </ul>
  );

  return (
    <Modal onClose={onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.buttonAlt} onClick={onHideCart}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
