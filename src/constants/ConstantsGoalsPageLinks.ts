import { ILink } from "../types/TypesLinks";

export const GoalsPageLinks: ILink[] = [
  {
    title: "All",
    path: "/goals",
  },
  {
    title: "Complete",
    path: "/goals?filter=complete",
  },
  {
    title: "Current",
    path: "/goals/?filter=current",
  }
];
