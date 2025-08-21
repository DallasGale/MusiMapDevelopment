"use client";

import { useState } from "react";
import Link from "next/link";

// Utils
import classNames from "classnames";

// Styles
import styles from "./styles.module.css";

// Types
import type { NavItemType } from "@app/types";
import { useParams, usePathname } from "next/navigation";

interface Props {
  navItems: NavItemType[];
}

const Navigation = ({ navItems }: Props) => {
  const [hovered, setHovered] = useState<string | null>(null);
  const pathname = usePathname();
  const params = useParams();
  const { lng } = params;

  return (
    <nav className={styles.nav}>
      <ul className={styles.navItems}>
        {navItems.map((item) => {
          const itemLink = `/${lng}${item.link}/`;
          const classes = classNames(`display1 ${styles.link}`, {
            [styles.active]:
              pathname.includes(itemLink) || hovered === item.label,
          });

          return (
            <li
              className={styles.navItem}
              key={item.label}
              onBlur={() => setHovered(null)}
              onFocus={() => setHovered(item.label)}
              onMouseEnter={() => setHovered(item.label)}
              onMouseLeave={() => setHovered(null)}
            >
              <Link
                href={`/${lng}${item.link}`}
                id={item.label}
                className={classes}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
