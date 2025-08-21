import "@mantine/core/styles.layer.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";

import styles from "./styles.module.css";
import { Locale } from "@/i18n.config";
import "./globals.css";
import { getT } from "@i18n/index";
import HeaderContainer from "@components/header/container";
import FooterContainer from "../components/footer/container";

export async function generateMetadata() {
  const { t } = await getT("meta");
  return {
    title: t("title"),
  };
}
interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lng: Locale }>;
}

export const dynamic = "force-dynamic";

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lng } = await params;

  return (
    <html lang={lng}>
      <body>
        <MantineProvider defaultColorScheme="dark" theme={theme}>
          <div className={styles.layout}>
            <HeaderContainer />
            <main>{children}</main>
            <FooterContainer />
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}
