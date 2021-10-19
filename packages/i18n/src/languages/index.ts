import { IsoCode } from "../types/isoCode";
import { Language } from "../types/language";
import { EN_US } from "./en-US";
import { PL_PL } from "./pl-PL";
import { DE_DE } from "./de-DE";
import { BG_BG } from "./bg-BG";
import { ZH_CN } from "./zh-CN";
import { CS_CZ } from "./cs-CZ";
import { DA_DK } from "./da-DK";
import { NL_NL } from "./nl-NL";
import { ET_EE } from "./et-EE";
import { FI_FI } from "./fi-FI";
import { FR_FR } from "./fr-FR";
import { EL_GR } from "./el-GR";
import { HU_HU } from "./hu-HU";
import { IT_IT } from "./it-IT";
import { LV_LV } from "./lv-LV";
import { LT_LT } from "./lt-LT";
import { PT_PT } from "./pt-PT";

export const languages: { [isoCode in IsoCode]: Language } = {
  [IsoCode.BG_BG]: BG_BG,
  [IsoCode.ZH_CN]: ZH_CN,
  [IsoCode.CS_CZ]: CS_CZ,
  [IsoCode.DA_DK]: DA_DK,
  [IsoCode.NL_NL]: NL_NL,
  [IsoCode.ET_EE]: ET_EE,
  [IsoCode.EN_US]: EN_US,
  [IsoCode.EN_UK]: EN_US,
  [IsoCode.FI_FI]: FI_FI,
  [IsoCode.FR_FR]: FR_FR,
  [IsoCode.DE_DE]: DE_DE,
  [IsoCode.EL_GR]: EL_GR,
  [IsoCode.HU_HU]: HU_HU,
  [IsoCode.IT_IT]: IT_IT,
  [IsoCode.JA_JP]: EN_US,
  [IsoCode.LV_LV]: LV_LV,
  [IsoCode.LT_LT]: LT_LT,
  [IsoCode.PL_PL]: PL_PL,
  [IsoCode.PT_PT]: PT_PT,
  [IsoCode.PT_BR]: EN_US,
  [IsoCode.RO_RO]: EN_US,
  [IsoCode.RU_RU]: EN_US,
  [IsoCode.SK_SK]: EN_US,
  [IsoCode.SL_SI]: EN_US,
  [IsoCode.ES_ES]: EN_US,
  [IsoCode.SV_SE]: EN_US,
};
