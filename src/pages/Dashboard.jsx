import styles from "./styles.module.css";
import { faDollarSign, faBasketShopping, faComments, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import ListHeader from "../components/ListHeader/ListHeader";

const services = [
  { id: 1, title: "monthly revenua", value: "1385 $US", icon: faDollarSign, isOpen: true, color: "blue" },
  { id: 2, title: "new orders", value: "12", icon: faBasketShopping, isOpen: false, color: "orange" },
  { id: 3, title: "pending reviews", value: "3", icon: faComments, isOpen: true, color: "red" },
  { id: 3, title: "new customers", value: "9", icon: faUserPlus, isOpen: true, color: "green" },
]

const users = [
  { id: 1, name: "John", image: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: 2, name: "Jane", image: "https://randomuser.me/api/portraits/women/1.jpg" },
  { id: 3, name: "Alex", image: "https://randomuser.me/api/portraits/men/2.jpg" },
  { id: 4, name: "Sarah", image: "https://randomuser.me/api/portraits/women/2.jpg" },
  { id: 5, name: "Mike", image: "https://randomuser.me/api/portraits/men/3.jpg" },
  { id: 6, name: "Emily", image: "https://randomuser.me/api/portraits/women/3.jpg" },
  { id: 7, name: "David", image: "https://randomuser.me/api/portraits/men/4.jpg" },
  { id: 8, name: "Olivia", image: "https://randomuser.me/api/portraits/women/4.jpg" },
  { id: 9, name: "Michael", image: "https://randomuser.me/api/portraits/men/5.jpg" },
  { id: 10, name: "Emma", image: "https://randomuser.me/api/portraits/women/5.jpg" },
  { id: 11, name: "Daniel", image: "https://randomuser.me/api/portraits/men/6.jpg" },
  { id: 12, name: "Ava", image: "https://randomuser.me/api/portraits/women/6.jpg" },
  { id: 13, name: "Matthew", image: "https://randomuser.me/api/portraits/men/7.jpg" },
]

const comments = [  
  { id: 11, name: "Daniel", image: "https://randomuser.me/api/portraits/men/6.jpg", comment: "nice product", stars: 5 },
  { id: 12, name: "Ava", image: "https://randomuser.me/api/portraits/women/6.jpg", comment: "good product", stars: 4 },
  { id: 13, name: "Matthew", image: "https://randomuser.me/api/portraits/men/7.jpg", comment: "bad product", stars: 3 },
]
const Dashboard = () => {
  return (
    <div className={`${styles.page} ${styles.dashboard}`}>
      <div className={styles.reviews}>
        <ListHeader {...services[2]} />
        <ul className={styles.reviewList}>
          {
            comments.map(({ id, name, image, comment, stars }) => (
              <li key={id} className={styles.comment}>
                <div className={styles.user}>
                  <img src={image} alt={name} />
                  <p>{name}</p>
                </div>
                <div className={styles.info}>
                  <span>{stars}</span>
                  <p>{comment}</p>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
      <div className={styles.users}>
        <ListHeader {...services[3]} />
        <ul className={styles.userList}>
          {
            users.map(({ id, name, image }) => (
              <li key={id}>
                <div className={styles.user}>
                  <img src={image} alt={name} />
                  <p>{name}</p>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Dashboard