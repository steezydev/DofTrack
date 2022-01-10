import { ILink } from "../types/TypesLinks";

export default function (id: string) {
  const GoalPageLinks: ILink[] = [
    {
      title: "All",
      path: `/goal/${id}`,
    },
    {
      title: "Tasks",
      path: `/goal/${id}?filter=tasks`,
    },
    {
      title: "Activities",
      path: `/goal/${id}?filter=activities`,
    },
    {
      title: "Finished",
      path: `/goal/${id}?filter=finished`,
    },
  ];

  return GoalPageLinks
}