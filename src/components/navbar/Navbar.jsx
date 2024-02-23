import Link from "next/link";

import { auth } from "@/lib/auth";
import Links from "./links/Links";
import styles from "./navbar.module.css";

const Navbar = async () => {
  const session = await auth();
  return (
    <header className={styles.container}>
      <Link href="/" className={styles.logo}>
        Logo
      </Link>
      <nav>
        <Links session={session} />
      </nav>
    </header>
  );
};
export default Navbar;
