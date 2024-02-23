import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

// Fetch data with an API
const getData = async () => {
  // con el next: { revalidate: 3600 } la llamada a la api se hace cada una hora.
  const res = await fetch("http://localhost:3000/api/blog", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const BlogPage = async () => {
  // Fetch data with an API
  const posts = await getData();

  // Fetch data without an API
  // const posts = await getPosts();

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
