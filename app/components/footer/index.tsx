import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "@assets/logo.svg";
import NavList from "./navList";

type Item = {
  label: string;
  link: string;
};

export type FooterNavItem = {
  heading: string;
  items: Item[];
};

interface Props {
  navItems: FooterNavItem[];
}
const Footer = ({ navItems }: Props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="MusiMap" priority width={400} height={93} />
        </Link>
      </div>

      <div className={styles.footerItems}>
        {navItems.map((item) => (
          <NavList key={item.heading} {...item} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
