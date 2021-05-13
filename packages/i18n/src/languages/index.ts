import { IsoCode } from "../types/isoCode";
import { Language } from "../types/language";
import { en } from "./en";
import { pl } from "./pl";

export const languages: { [isoCode in IsoCode]: Language } = {
  [IsoCode.BG]: en,
  [IsoCode.CN]: en,
  [IsoCode.CZ]: en,
  [IsoCode.DK]: en,
  [IsoCode.NL]: en,
  [IsoCode.EE]: en,
  [IsoCode.EN]: en,
  [IsoCode.FI]: en,
  [IsoCode.FR]: en,
  [IsoCode.DE]: en,
  [IsoCode.GR]: en,
  [IsoCode.HU]: en,
  [IsoCode.IT]: en,
  [IsoCode.JP]: en,
  [IsoCode.LV]: en,
  [IsoCode.LT]: en,
  [IsoCode.PL]: pl,
  [IsoCode.PT]: en,
  [IsoCode.RO]: en,
  [IsoCode.RU]: en,
  [IsoCode.SK]: en,
  [IsoCode.SI]: en,
  [IsoCode.ES]: en,
  [IsoCode.SE]: en,
};
