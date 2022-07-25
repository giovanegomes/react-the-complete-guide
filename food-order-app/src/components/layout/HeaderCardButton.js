import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../cart/CartIcon";
import styles from "./HeaderCardButton.module.css";

const HeaderCardButton = ({ onClick }) => {
  const cartContext = useContext(CartContext);
  const { items } = cartContext;
  const [buttonIsHighLighted, setButtonIsHighLighted] = useState(false);

  const totalOfCartItems = items.reduce(
    (currentResult, item) => currentResult + item.amount,
    0,
  );

  const buttonClasses = `${styles.button} ${buttonIsHighLighted ? styles.bump: ''}`;

  useEffect(() => {
    if (items.length === 0) return;

    setButtonIsHighLighted(true);

    const timer = setTimeout(() => {
      setButtonIsHighLighted(false);
    }, 300)

    return () => {
      clearTimeout(timer);
    }
  }, [items]);

  return (
    <button
      className={buttonClasses}
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