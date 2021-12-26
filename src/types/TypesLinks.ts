export interface Link {
  title: string;
  isActive?: boolean;
  path: string;
}

export interface Links {
  links: Link[];
}
