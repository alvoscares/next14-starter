import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <main className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency</h1>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          placeat perferendis ullam maxime, quam aliquid ipsa quaerat sed earum
          quasi vitae quod aspernatur animi a, velit esse minus fuga vero.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/brands.png"
            alt="brands"
            fill
            className={styles.brandImg}
          />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/hero.gif"
          alt="hero"
          fill
          className={styles.heroImg}
        />
      </div>
    </main>
  );
};

export default Home;
