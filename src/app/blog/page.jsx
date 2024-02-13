import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";

const getData = async () => {
  // con el next: { revalidate: 3600 } la llamada a la api se hace cada una hora.
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const BlogPage = async () => {
  const posts = await getData();

  return (
    <main className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </main>
  );
};
export default BlogPage;
