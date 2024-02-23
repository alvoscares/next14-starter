import { Suspense } from "react";

import { auth } from "@/lib/auth";
import AdminPosts from "@/components/adminPosts/AdminPosts";
import AdminPostsFrom from "@/components/adminPostsFrom/AdminPostsFrom";
import AdminUsers from "@/components/adminUsers/AdminUsers";
import AdminUsersForm from "@/components/adminUsersForm/AdminUsersForm";
import styles from "./admin.module.css";

const AdminPage = async () => {
  const session = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminPostsFrom userId={session?.user.id} />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminUsersForm />
        </div>
      </div>
    </div>
  );
};
export default AdminPage;
