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
import { JA_JP } from "./ja-JP";
import { EN_UK } from "./en-UK";
import { PT_BR } from "./pt-BR";
import { RU_RU } from "./ru-RU";
import { RO_RO } from "./ro-RO";
import { SK_SK } from "./sk-SK";
import { SL_SI } from "./sl-SI";
import { ES_ES } from "./es-ES";
import { SV_SE } from "./sv-SE";

export const languages: { [isoCode in IsoCode]: Language } = {
  [IsoCode.BG_BG]: BG_BG,
  [IsoCode.ZH_CN]: ZH_CN,
  [IsoCode.CS_CZ]: CS_CZ,
  [IsoCode.DA_DK]: DA_DK,
  [IsoCode.NL_NL]: NL_NL,
  [IsoCode.ET_EE]: ET_EE,
  [IsoCode.EN_US]: EN_US,
  [IsoCode.EN_UK]: EN_UK,
  [IsoCode.FI_FI]: FI_FI,
  [IsoCode.FR_FR]: FR_FR,
  [IsoCode.DE_DE]: DE_DE,
  [IsoCode.EL_GR]: EL_GR,
  [IsoCode.HU_HU]: HU_HU,
  [IsoCode.IT_IT]: IT_IT,
  [IsoCode.JA_JP]: JA_JP,
  [IsoCode.LV_LV]: LV_LV,
  [IsoCode.LT_LT]: LT_LT,
  [IsoCode.PL_PL]: PL_PL,
  [IsoCode.PT_PT]: PT_PT,
  [IsoCode.PT_BR]: PT_BR,
  [IsoCode.RO_RO]: RO_RO,
  [IsoCode.RU_RU]: RU_RU,
  [IsoCode.SK_SK]: SK_SK,
  [IsoCode.SL_SI]: SL_SI,
  [IsoCode.ES_ES]: ES_ES,
  [IsoCode.SV_SE]: SV_SE,
};
