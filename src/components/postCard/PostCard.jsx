import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/16812051/pexels-photo-16812051/free-photo-of-escaleras-ligero-carretera-moda.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="post"
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
          architecto neque optio in culpa dolore explicabo totam velit, quia
          cum! Iusto iure consectetur amet mollitia debitis minima, culpa vitae
          ad.
        </p>
        <Link className={styles.link} href="/blog/post">READ MORE</Link>
      </div>
    </div>
  );
};
export default PostCard;
