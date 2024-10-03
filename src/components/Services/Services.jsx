import styles from "./styles.module.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faBasketShopping, faComments, faUserPlus} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    const services = [
        { id: 1, title: "monthly revenua", value: "1385 $US", icon: faDollarSign, isOpen : true},
        { id: 2, title: "new orders", value: "12", icon: faBasketShopping, isOpen : false},
        { id: 3, title: "pending reviews", value: "3", icon: faComments, isOpen : true},
        { id: 3, title: "new customers", value: "9", icon: faUserPlus, isOpen : true},
    ]
    return (
        <ul className={styles.services}>
            {
                services.map(({ id, title, icon, value }) => (
                    <Service key={id} title={title} icon={icon} value={value} />
                ))
            }
        </ul>
    )
}


const Service = ({ title, icon, value }) => {
    return (
        <li className={styles.service}>
            <div className={styles.icon}>
                <FontAwesomeIcon icon={icon} />
            </div>
            <div className={styles.info}> 
                <p>{title}</p>
                <p>{value}</p>
            </div>
        </li>
    )
}

Service.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.object,
    value: PropTypes.string
}

export default Services