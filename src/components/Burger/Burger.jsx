import styles from './styles.module.css';
import PropTypes from 'prop-types';

const Burger = ({ onClick }) => {
  return (
    <div className={styles.burger} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

Burger.propTypes = {
  onClick: PropTypes.func
}
export default Burger;