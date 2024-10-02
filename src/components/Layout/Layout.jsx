import PropTypes from "prop-types";
import cat from "../../assets/cat.svg"
import styles from './styles.module.css'

const Layout = ({children}) => {
  return (
    <>
    <header className={styles.header}>
      <img src={cat} alt="logo" />
    </header>

    <main className={styles.main}>
      {children}
    </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout