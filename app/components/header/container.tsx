"use client";
import { useT } from "@/app/i18n/client";
import Header from ".";
import { NavItemType } from "@/app/types";
import { observer } from "mobx-react-lite";
import analysedStore from "@/app/store/analyserStore";

const HeaderContainer = observer(() => {
  const { t } = useT("header");
  return (
    <Header
      logoOnClick={() => analysedStore.setAnalysed(false)}
      primary={t("navItems.primary", { returnObjects: true }) as NavItemType[]}
      secondary={
        t("navItems.secondary", { returnObjects: true }) as NavItemType[]
      }
    />
  );
});

export default HeaderContainer;
