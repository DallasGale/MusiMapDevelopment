"use client";
import { useT } from "@/app/i18n/client";
import SearchView from ".";
import type { TagInputType } from "./tagInput";

const SearchViewContainer = () => {
  const { t } = useT("tag");
  return (
    <SearchView
      translation={{
        tagInput: t("search", { returnObjects: true }) as TagInputType,
      }}
    />
  );
};

export default SearchViewContainer;
