import { useSearchParams } from "react-router-dom";

//Components
import Menu from "../../components/Menu/Menu";
import NavBar from "../../components/Nav/NavBar";

//Page Components
import PageDreamsItems from "./PageDreamsItems";

//Types
import { DreamData } from "../../types/TypesDream";

//Hooks
import useGetDreams from "../../hooks/useGetDreams";

import { dreamsPageLinks } from "../../constants/dreamsPageLinks";

export default function PageDreams() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter");

  const [dreams, loading] = useGetDreams()

  return (
    <main>
      <Menu />
      <div>
        <header className="p-4 mb-3">
          <h1 className="text-center text-4xl font-bold text-black">Dreams</h1>
        </header>

        <NavBar links={dreamsPageLinks} />
        <PageDreamsItems dreams={dreams} loading={loading}/>
      </div>
    </main>
  );
}
