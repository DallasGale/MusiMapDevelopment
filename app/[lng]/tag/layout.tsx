import Navigation from "@components/navigation";
import { NavItemType } from "@/app/types";
import { getT } from "@/app/i18n";
interface LayoutProps {
  children: React.ReactNode;
}

export const dynamic = "force-dynamic";

export default async function TagLayout({ children }: LayoutProps) {
  const { t } = await getT("tag");
  const navItems = t("navItems", { returnObjects: true });

  return (
    <section>
      <Navigation navItems={navItems as NavItemType[]} />
      {children}
    </section>
  );
}
