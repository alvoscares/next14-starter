import Links from "./links/Links";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <nav>
        <Links />
      </nav>
    </header>
  );
};
export default Navbar;
