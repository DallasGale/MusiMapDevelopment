export const fallbackLng = "en";
export const languages = [fallbackLng, "de", "es", "fr"];
export const defaultNS = "translation";
export const cookieName = "i18next";
export const headerName = "x-i18next-current-language";

export function getOptions(
  lng = fallbackLng,
  ns: string | string[] = defaultNS,
) {
  return {
    // debug: true,
    supportedLngs: languages,
    // preload: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
