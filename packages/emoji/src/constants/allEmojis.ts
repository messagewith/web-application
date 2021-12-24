import { ACTIVITY } from "./activity";
import { ANIMALS_AND_NATURE } from "./animalsAndNature";
import { FLAGS } from "./flags";
import { FOOD_AND_DRINK } from "./foodAndDrink";
import { OBJECTS } from "./objects";
import { SMILEYS_AND_PEOPLE } from "./smileysAndPeople";
import { SYMBOLS } from "./symbols";
import { TRAVEL_AND_PLACES } from "./travelAndPlaces";
import { EmojiInformation } from "../types/emojiInformation";

export const ALL_EMOJIS = {
  ...ACTIVITY,
  ...ANIMALS_AND_NATURE,
  ...FLAGS,
  ...FOOD_AND_DRINK,
  ...OBJECTS,
  ...SMILEYS_AND_PEOPLE,
  ...TRAVEL_AND_PLACES,
  ...SYMBOLS,
} as EmojiInformation;
