import { IsoCode } from "../types/isoCode";
import { Language } from "../types/language";
import { EN_US } from "./en-US";
import { PL_PL, } from "./pl-PL";
import { deDE } from "./de-DE";

export const languages: { [isoCode in IsoCode]: Language } = {
  [IsoCode.BG]: EN_US,
  [IsoCode.CN]: EN_US,
  [IsoCode.CZ]: EN_US,
  [IsoCode.DK]: EN_US,
  [IsoCode.NL]: EN_US,
  [IsoCode.EE]: EN_US,
  [IsoCode.EN_US]: EN_US,
  [IsoCode.FI]: EN_US,
  [IsoCode.FR]: EN_US,
  [IsoCode.DE_DE]: deDE,
  [IsoCode.GR]: EN_US,
  [IsoCode.HU]: EN_US,
  [IsoCode.IT]: EN_US,
  [IsoCode.JP]: EN_US,
  [IsoCode.LV]: EN_US,
  [IsoCode.LT]: EN_US,
  [IsoCode.PL_PL]: PL_PL,
  [IsoCode.PT]: EN_US,
  [IsoCode.RO]: EN_US,
  [IsoCode.RU]: EN_US,
  [IsoCode.SK]: EN_US,
  [IsoCode.SI]: EN_US,
  [IsoCode.ES]: EN_US,
  [IsoCode.SE]: EN_US,
};
