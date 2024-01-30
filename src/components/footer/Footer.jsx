import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.logo}>Alvodev</div>
      <p className={styles.text}>
        Alvo creative thoughts agency © All rights reserved.
      </p>
    </footer>
  );
};
export default Footer;
