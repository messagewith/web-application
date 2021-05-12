import { IsoCode } from "./isoCode";

export type AvailableLanguages = {
  [isoCode in IsoCode]: {
    englishName: string;
    regionalName: string;
  };
};
