//Components
import NavLinks from "./NavLinks";

//Types
import { Links } from "../../types/TypesLinks";

export default function NavBar({ links }: Links) {
  return (
    <nav className="flex justify-center gap-5 text-xl font-medium text-grey-darker">
      {links.map((item, i) => (
        <NavLinks
          key={i}
          title={item.title}
          path={item.path}
        />
      ))}
    </nav>
  );
}
