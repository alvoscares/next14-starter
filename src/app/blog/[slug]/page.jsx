import Image from "next/image";

import PostUser from "@/components/postUser/PostUser";
import styles from "./singlePost.module.css";

const getData = async (slug) => {
  // con el next: { revalidate: 3600 } la llamada a la api se hace cada una hora.
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  const post = await getData(slug);

  return (
    <main className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/16812051/pexels-photo-16812051/free-photo-of-escaleras-ligero-carretera-moda.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="post"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/16812051/pexels-photo-16812051/free-photo-of-escaleras-ligero-carretera-moda.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="post"
            width={50}
            height={50}
            className={styles.avatar}
          />
          <PostUser userId={post.userId}/>
          <div className={styles.ditailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </main>
  );
};
export default SinglePostPage;
