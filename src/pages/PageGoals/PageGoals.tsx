import { useSearchParams } from "react-router-dom";

//Components
import NavBar from "../../components/Nav/NavBar";
import Menu from "../../components/Menu/Menu";

//Page Components
import PageGoalsItems from "./PageGoalsItems";

//Constants
import { GoalsPageLinks } from "../../constants/ConstantsGoalsPageLinks";

//Hooks
import useGetGoals from "../../hooks/useGetGoals";

export default function PageGoals() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter");

  const [goals, loading] = useGetGoals()

  return (
    <main>
      <Menu />
      <div>
        <header className="p-4 mb-3">
          <h1 className="text-center text-4xl font-bold text-black">Goals</h1>
        </header>

        <NavBar links={GoalsPageLinks} />
        <PageGoalsItems goals={goals} loading={loading}/>
      </div>
    </main>
  );
}
