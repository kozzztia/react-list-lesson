import styles from './styles.module.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ListHeader = ({icon, title, value, color }) => {
  return (
    <div className={styles.listHeader}>
        <div className={styles.icon} style={{backgroundColor : color}}>
            <FontAwesomeIcon icon={icon}/>
        </div>
        <div className={styles.info}>
            <p>{title}</p>
            <p>{value}</p>
        </div>    
    </div>
  )
}
ListHeader.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  color: PropTypes.string,
}
export default ListHeader