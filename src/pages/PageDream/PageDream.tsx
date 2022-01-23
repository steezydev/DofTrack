import { useParams, useSearchParams } from "react-router-dom";

//Components
import NavBar from "../../components/Nav/NavBar";
import Menu from "../../components/Menu/Menu";
import NotFound from "../NotFound";
import Loading from "../../components/Loading/Loading";

//Page Components
import PageDreamItems from "./PageDreamItems";

//Constants
import { GoalsPageLinks } from "../../constants/ConstantsGoalsPageLinks";

//Hooks
import useGetGoals from "../../hooks/useGetGoals";
import useGetDream from "../../hooks/useGetDream";
import getDreamLinks from "../../helpers/getDreamLinks";

export default function PageDream() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter");

  const { id } = useParams();

  if (id == undefined) {
    return <NotFound text="No such goal" />;
  }

  const [dreamData, loadingDream] = useGetDream(id);
  const [goals, loadingGoals] = useGetGoals(id);

  const goalDreamLinks = getDreamLinks(id);

  return (
    <main>
      <Menu />
      {!loadingDream ? (
        dreamData != undefined ? (
          <div>
            <header className="p-4 mb-3">
              <h1 className="text-center text-4xl font-bold text-black">
                {dreamData.title}
              </h1>
            </header>

            <NavBar links={goalDreamLinks} />
            <PageDreamItems dreamData={dreamData} goals={goals} loading={loadingGoals} />
          </div>
        ) : (
          <NotFound text="No such dream" />
        )
      ) : (
        <Loading isFull={true} />
      )}
    </main>
  );
}
