import CartIcon from "../cart/CartIcon";
import styles from "./HeaderCardButton.module.css";

const HeaderCardButton = ({ onClick }) => (
  <button
    className={styles.button}
    onClick={onClick}
  >
    <span className={styles.icon}>
      <CartIcon />
    </span>
    <span>Your Cart</span>
    <span className={styles.badge}>3</span>
  </button>
);

export default HeaderCardButton;