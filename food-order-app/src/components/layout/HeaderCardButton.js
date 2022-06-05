import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../cart/CartIcon";
import styles from "./HeaderCardButton.module.css";

const HeaderCardButton = ({ onClick }) => {
  const cartContext = useContext(CartContext);

  const totalOfCartItems = cartContext.items.reduce(
    (currentResult, item) => currentResult + item.amount,
    0,
  );

  return (
    <button
      className={styles.button}
      onClick={onClick}
    >
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{totalOfCartItems}</span>
    </button>
  );
};

export default HeaderCardButton;