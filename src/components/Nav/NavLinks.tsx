import { useLocation } from 'react-router-dom'

//Types
import { Link } from "react-router-dom";
import { ILink } from "../../types/TypesLinks";

export default function NavLinks({ title, path }: ILink) {
  const { search, pathname } = useLocation();
  const isActive = pathname + search == path
  return <Link to={path} className={isActive ? "border-b-2 text-grey-dark" : "hover:text-grey-dark"}>{title}</Link>;
}
