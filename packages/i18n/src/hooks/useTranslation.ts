/* eslint-disable @typescript-eslint/ban-ts-comment,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/restrict-template-expressions */

import { useContext } from "react";
import { I18nContext } from "../I18nProvider";

export const useTranslation = () => {
  const { texts, changeLanguage, isoCode } = useContext(I18nContext);

  const text = (
    id: string,
    values?: { [key: string]: string }
  ): string | undefined => {
    const keys = id.split(".");

    // @ts-ignore
    let property;

    // @ts-ignore
    if (keys.length === 1 && typeof texts[keys[0]] === "string") {
      // @ts-ignore
      return texts[keys[0]] as string;
    }

    keys.forEach((key, index) => {
      if (index === 0) {
        // @ts-ignore
        property = texts[key];
      } else {
        // @ts-ignore
        property = property?.[key];
      }
    });

    if (typeof property === "string" && values) {
      Object.entries(values).forEach(([key, value]) => {
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        property = property.replaceAll(`{{${key}}}`, value);
      });
    }

    return property;
  };

  return {
    text,
    changeLanguage,
    isoCode,
  };
};
