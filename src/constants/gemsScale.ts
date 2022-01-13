import {
  DIFF_EASY,
  DIFF_MEDIUM,
  DIFF_HARD,
  DIFF_PICKER,
} from "./ConstantsDifficulties";
import { Difficulties } from "../types/TypesDifficulties";

type GemsScale = {
  [key in Difficulties]: number;
};

export const gemsScale: GemsScale = {
  [DIFF_PICKER]: 0,
  [DIFF_EASY]: 2,
  [DIFF_MEDIUM]: 4,
  [DIFF_HARD]: 6,
};
