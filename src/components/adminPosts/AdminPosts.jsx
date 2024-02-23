import Image from "next/image";

import { getPosts } from "@/lib/data";
import styles from "./adminPosts.module.css";
import { deletePost } from "@/lib/action";

const AdminPosts = async () => {
  const posts = await getPosts();
  // Para usar esta forma hay que sacar el from a un nuevo componente
  //   const deletePostWithId = async (id) => {
  //     "use server";
  //     // para pasar argumentos un un server action en necesario usar la funcion .bind() de javascript. Docu next.js
  //     return deletePost.bind(null, id);
  //   };

  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <div className={styles.detail}>
            <Image
              src={post.img || "/noavatar.png"}
              alt=""
              width={50}
              height={50}
            />
            <span className={styles.postTitle}>{post.titile}</span>
          </div>
          <form action={deletePost}>
            <input type="hidden" name="id" value={post.id} />
            <button className={styles.postButton}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};
export default AdminPosts;
