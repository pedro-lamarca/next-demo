import { FC } from "react";
import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";

const navItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const Navbar: FC = () => {
  return (
    <nav className={styles["nav-container"]}>
      {navItems.map(({ href, text }) => (
        <ActiveLink key={href} text={text} href={href} />
      ))}
    </nav>
  );
};
