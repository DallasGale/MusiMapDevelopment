// Styles
import styles from "./styles.module.css";

// Components
import Image from "next/image";
import Link from "next/link";
import logo from "@assets/logo.svg";
// import Navigation from "@components/navigation";
import PrimaryButton from "@components/button/primary";

// Utils
import { NavItemType } from "@/app/types";
import { observer } from "mobx-react-lite";
import analysedStore from "@/app/store/analyserStore";

interface Props {
  primary?: NavItemType[];
  secondary?: NavItemType[];
  logoOnClick: () => void;
}
const Header = ({ primary, secondary, logoOnClick }: Props) => {
  return (
    <header className={styles.header}>
      <Link href="/" onClick={logoOnClick}>
        <Image src={logo} alt="MusiMap" priority />
      </Link>
      <div className={styles.navigation}>
        {/* <Navigation navItems={primary} /> */}
        <div className={styles.secondaryNav}>
          {/* <Navigation navItems={secondary} /> */}
          <PrimaryButton onClick={() => null} label="Sign Up" />
        </div>
      </div>
    </header>
  );
};

export default Header;
