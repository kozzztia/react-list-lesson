import styles from "./styles.module.css"
import harold from "../assets/harold-cold.jpg"
import { faHome, faLink } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Catalog = () => {
  return (
    <div className={styles.page}>
      <figure >
        <img src={harold} alt="user" />
        <figcaption>
          <h3>Welcome to react-admin demo</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non doloribus totam quidem eius repudiandae. Sit est iste voluptatem adipisci repellendus suscipit odio ipsum. Assumenda, eaque!
          </p>
          <span>
            <Link to="#"><FontAwesomeIcon icon={faHome} />React-admin-site</Link>
            <Link to="#"><FontAwesomeIcon icon={faLink} />Sourxe for this demo</Link>
          </span>
        </figcaption>
      </figure>
    </div>
  )
}

export default Catalog