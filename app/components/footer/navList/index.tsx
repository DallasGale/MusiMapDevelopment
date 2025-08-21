// Types
import { type NavItemType } from "@app/types";

// Styles
import styles from "./styles.module.css";
import Link from "next/link";

interface Props {
  heading: string;
  items: NavItemType[];
}

const NavList = ({ heading, items }: Props) => {
  const ariaLabel = `${heading}-heading`;

  return (
    <section aria-labelledby={ariaLabel}>
      <h1 className={`display1 ${styles.heading}`} id={ariaLabel}>
        {heading}
      </h1>
      <ul className={styles.list} id={`${heading}-nav-list`}>
        {items.map((item) => (
          <li key={item.label}>
            <Link href={item.link} className="display1">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NavList;
