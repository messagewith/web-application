import { ACTIVITY } from "./activity";
import { ANIMALS_AND_NATURE } from "./animalsAndNature";
import { FLAGS } from "./flags";
import { FOOD_AND_DRINK } from "./foodAndDrink";
import { OBJECTS } from "./objects";
import { SMILEYS_AND_PEOPLE } from "./smileysAndPeople";
import { SYMBOLS } from "./symbols";
import { TRAVEL_AND_PLACES } from "./travelAndPlaces";
import { EmojiType } from "../types/emojiType";

export const ALL_EMOJIS = {
  ...ACTIVITY,
  ...ANIMALS_AND_NATURE,
  ...FLAGS,
  ...FOOD_AND_DRINK,
  ...OBJECTS,
  ...SMILEYS_AND_PEOPLE,
  ...TRAVEL_AND_PLACES,
  ...SYMBOLS,
} as {
  [type in EmojiType]: {
    name: EmojiType;
    unicode: string;
    category:
      | "people"
      | "nature"
      | "food"
      | "activity"
      | "travel"
      | "objects"
      | "symbols"
      | "flags"
      | "diversity";
    htmlEntity: string;
  };
};
