import { ILink } from "../types/TypesLinks";

export default function (id: string) {
  const GoalPageLinks: ILink[] = [
    {
      title: "All",
      path: `/dream/${id}`,
    },
    {
      title: "Finished",
      path: `/dream/${id}?filter=finished`,
    },
  ];

  return GoalPageLinks
}