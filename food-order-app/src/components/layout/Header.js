import mealsImage from '../../assets/meals.jpg';
import styles from './Header.module.css';
import HeaderCardButton from './HeaderCardButton';

const Header = () => (
  <>
    <header className={styles.header}>
      <h1>ReactMeals</h1>
      <HeaderCardButton />
    </header>
    <div className={styles.mainImage}>
      <img src={mealsImage} alt="A table with a wide variety of delicious meals" />
    </div>
  </>
);

export default Header;
