import { Difficulties, BadgeItem } from "../types/TypesDifficulties";

export const DIFF_EASY = "EASY"
export const DIFF_MEDIUM = "MEDIUM"
export const DIFF_HARD = "HARD"
export const DIFF_PICKER = "PICKER"


export const badgeOptions: Record<Difficulties, BadgeItem> = {
    HARD: {
      icon: "fire",
      text: "Hard",
    },
    MEDIUM: {
      icon: "sweat",
      text: "Medium",
    },
    EASY: {
      icon: "wind",
      text: "Easy",
    },
    PICKER: {
      icon: "weight",
      text: "Difficulty",
    },
  };