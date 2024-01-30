import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";

const BlogPage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
    </main>
  );
};
export default BlogPage;
