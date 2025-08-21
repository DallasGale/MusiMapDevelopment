"use client";
import { useT } from "@/app/i18n/client";
import Footer, { type FooterNavItem } from ".";

const FooterContainer = () => {
  const { t } = useT("footer");
  return (
    <Footer
      navItems={t("navItems", { returnObjects: true }) as FooterNavItem[]}
    />
  );
};

export default FooterContainer;
