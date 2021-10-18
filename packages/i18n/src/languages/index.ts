import { IsoCode } from "../types/isoCode";
import { Language } from "../types/language";
import { EN_US } from "./en-US";
import { PL_PL } from "./pl-PL";
import { DeDE } from "./de-DE";
import { BG_BG } from "./bg-BG";
import { ZH_CN } from "./zh-CN";
import { CS_CZ } from "./cs-CZ";
import { DA_DK } from "./da-DK";
import { NL_NL } from "./nl-NL";

export const languages: { [isoCode in IsoCode]: Language } = {
  [IsoCode.BG_BG]: BG_BG,
  [IsoCode.ZH_CN]: ZH_CN,
  [IsoCode.CS_CZ]: CS_CZ,
  [IsoCode.DA_DK]: DA_DK,
  [IsoCode.NL_NL]: NL_NL,
  [IsoCode.ET_EE]: EN_US,
  [IsoCode.EN_US]: EN_US,
  [IsoCode.EN_UK]: EN_US,
  [IsoCode.FI_FI]: EN_US,
  [IsoCode.FR_FR]: EN_US,
  [IsoCode.DE_DE]: DeDE,
  [IsoCode.EL_GR]: EN_US,
  [IsoCode.HU_HU]: EN_US,
  [IsoCode.IT_IT]: EN_US,
  [IsoCode.JA_JP]: EN_US,
  [IsoCode.LV_LV]: EN_US,
  [IsoCode.LT_LT]: EN_US,
  [IsoCode.PL_PL]: PL_PL,
  [IsoCode.PT_PT]: EN_US,
  [IsoCode.PT_BR]: EN_US,
  [IsoCode.RO_RO]: EN_US,
  [IsoCode.RU_RU]: EN_US,
  [IsoCode.SK_SK]: EN_US,
  [IsoCode.SL_SI]: EN_US,
  [IsoCode.ES_ES]: EN_US,
  [IsoCode.SV_SE]: EN_US,
};
