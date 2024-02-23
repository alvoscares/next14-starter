import Image from "next/image";
import { Suspense } from "react";

import PostUser from "@/components/postUser/PostUser";
import { getPost } from "@/lib/data";
import styles from "./singlePost.module.css";

// Fetch data with an API
const getData = async (slug) => {
  // con el next: { revalidate: 3600 } la llamada a la api se hace cada una hora.
  // por defecto el fethc es get, si no, hay que especificarlo {method: 'DELETE'}
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  // Fetch data with an API
  const post = await getData(slug);

  // Fetch data without an API
  // const post = await getPost(slug);

  return (
    <main className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="post" fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {/* TODO: en vez de mostrar el elemento div con el Loading... estaria piola mostrar un skeleton */}
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.ditailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </main>
  );
};
export default SinglePostPage;
