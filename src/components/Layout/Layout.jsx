import PropTypes from "prop-types";
import cat from "../../assets/cat.svg";
import styles from './styles.module.css';
import Burger from "../Burger/Burger.jsx";
import Title from "../Title/Title.jsx";
import Navigation from "../Navigation/Navigation.jsx";

const Layout = ({children}) => {
  return (
    <>
    <header className={styles.header}>
      <img src={cat} alt="logo" />
      <Title title="React-dashboard"/>
      <Burger onClick={() => console.log('click')}/>
    </header>

    <section className={styles.main}>
      <Navigation/>
      {children}
    </section>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout