import React, { createContext, FC, useState } from "react";
import { I18nState } from "./types/i18nState";
import { IsoCode } from "./types/isoCode";
import { languages } from "./languages";

export const I18nContext = createContext<I18nState>({
  isoCode: IsoCode.EN,
  changeLanguage: () => {},
  texts: languages[IsoCode.EN],
});

export const I18nProvider: FC = ({ children }) => {
  const [currentIsoCode, setCurrentIsoCode] = useState<IsoCode>(IsoCode.EN);
  const [currentTexts, setCurrentTexts] = useState<
    typeof languages[IsoCode.EN]
  >(languages[IsoCode.EN]);

  const changeLanguage = (isoCode: IsoCode) => {
    setCurrentIsoCode(isoCode);
    setCurrentTexts(languages[isoCode]);
  };

  return (
    <I18nContext.Provider
      value={{ isoCode: currentIsoCode, changeLanguage, texts: currentTexts }}
    >
      {children}
    </I18nContext.Provider>
  );
};
