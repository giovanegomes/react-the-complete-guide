import styles from './Card.module.css';

const Card = () => {
  const cartItems = (
    <ul className={styles.cartItems}>{
      [{id: 'c1', name: 'sushi', amount: 2, price: 12.99}].map(
        (item) => (<li>{item.name}</li>), 
      )}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.buttonAlt}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </div>
  );
};

export default Card;
