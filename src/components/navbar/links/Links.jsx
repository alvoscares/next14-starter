"use client";

import { useState } from "react";

import NavLink from "./navLink/NavLink";
import styles from "./links.module.css";
import Image from "next/image";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  // Temporary
  const session = true;
  const isAdmin = true;

  return (
    <>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.title}>
            <NavLink item={link} />
          </li>
        ))}
        {session ? (
          <>
            {isAdmin && (
              <li>
                <NavLink item={{ title: "Admin", path: "/admin" }} />
              </li>
            )}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <li>
            <NavLink item={{ title: "Login", path: "/login" }} />
          </li>
        )}
      </ul>
      <Image
        src="/menu.png"
        alt="menu"
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
        className={styles.menuButton}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </>
  );
};
export default Links;
