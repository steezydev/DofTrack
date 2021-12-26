//Types
import { Link } from "../../types/TypesLinks";

export default function NavLinks({ title, path, isActive = false }: Link) {
    console.log(title)

  return <span className={isActive ? "border-b-2" : ""}>{title}</span>;
}
