import { Link } from "react-router-dom";
import styles from './styles.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
              <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/catalog">Catalog</Link></li>
        <li><Link to="/customers">Customers</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/sales">Sales</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation