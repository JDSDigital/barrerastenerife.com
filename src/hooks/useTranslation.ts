import { useTranslation as useTranslationBase } from "gatsby-plugin-react-i18next";

export const useTranslation = (defaultNs?: string) => {
  const { t, ...rest } = useTranslationBase(defaultNs);

  return {
    t: (key: string) => t<string>(key),
    ...rest,
  };
};
