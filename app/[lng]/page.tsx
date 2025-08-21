import { getT } from "@i18n/index";
import type { TextType } from "@views/home/hero";
import HomeView from "@views/home";

export default async function Home() {
  const { t } = await getT("home");

  return <HomeView text={t("text", { returnObjects: true }) as TextType} />;
}
