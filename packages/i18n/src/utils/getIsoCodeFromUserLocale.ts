import { IsoCode } from "../types/isoCode";
import { AVAILABLE_LANGUAGES } from "../availableLanguages";

export const getIsoCodeFromUserLocale = (): IsoCode => {
  const { languages } = window.navigator;

  let foundLanguage: IsoCode | null = null;
  let keys = Object.keys(AVAILABLE_LANGUAGES);

  languages.forEach((language) => {
    if (foundLanguage) return;

    if (AVAILABLE_LANGUAGES[language as IsoCode]?.regionalName) {
      foundLanguage = language as IsoCode;
      return;
    }

    const foundKey = keys.find((key) => key.includes(language));
    if (foundKey) foundLanguage = foundKey as IsoCode;
  });

  return foundLanguage || IsoCode.EN_US;
};
