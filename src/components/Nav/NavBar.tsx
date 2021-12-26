//Components
import NavLinks from "./NavLinks";

//Types
import { Links } from "../../types/TypesLinks";

export default function NavBar({ links }: Links) {
  console.log(links);
  return (
    <nav className="flex justify-center gap-5 text-xl font-medium text-grey-darker">
      {links.map((item, i) => (
        <NavLinks
          key={i}
          title={item.title}
          isActive={item.isActive}
          path={item.path}
        />
      ))}
    </nav>
  );
}
