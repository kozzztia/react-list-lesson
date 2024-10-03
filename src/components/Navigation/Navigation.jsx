import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faDollarSign, faImage, faUsers, faComments } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import styles from './styles.module.css';

const Navigation = () => {

  const links = [ 
    {id: 1, title : 'Dashboard', path : '/', icon: faTachometerAlt },
    {id: 2, title : 'Sales', path : '/sales', icon: faDollarSign },
    {id: 3, title : 'Catalog', path : '/catalog', icon: faImage },
    {id: 4, title : 'Customers', path : '/customers', icon: faUsers },
    {id: 5, title : 'Reviews', path : '/reviews', icon: faComments },
  ]

  return (
    <nav className={styles.navigation}>
      <ul>
        {
          links.map(({id, title, path, icon}) => (
            <li key={id}>
              <NavLink to={path} className={({ isActive }) => isActive ? styles.active : ""}>
                <FontAwesomeIcon icon={icon} className={styles.icon} />
                {title}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Navigation