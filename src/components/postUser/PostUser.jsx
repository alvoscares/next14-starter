import Image from "next/image";

import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";

// Fetch data with an API
// const getData = async (userId) => {
//   // con el next: { revalidate: 3600 } la llamada a la api se hace cada una hora.
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     { cache: "no-store" }
//   );

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

const PostUser = async ({ userId }) => {
  // Fetch data with an API
  // const user = await getData(userId);

  // Fetch data without an API
  const user = await getUser(userId);

  return (
    <div className={styles.container}>
      <Image
        src={user.img ? user.img : "/noavatar.png"}
        alt="post"
        width={50}
        height={50}
        className={styles.avatar}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};
export default PostUser;
