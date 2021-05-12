import { IsoCode } from "./isoCode";
import { Language } from "./language";

export interface I18nState {
  isoCode: IsoCode;
  changeLanguage: (isoCode: IsoCode) => void;
  texts: Language;
}
