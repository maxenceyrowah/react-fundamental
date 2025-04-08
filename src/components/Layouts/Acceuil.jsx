import useJsonPlaceholderGateway from "../../services/useApiJsonPlaceholder.service";
import Contact from "./Contact";
import Presentation from "./Presentation";
import Projects from "./Projets";

const Acceuil = () => {
  const { projets } = useJsonPlaceholderGateway();

  return (
    <>
      <Presentation />
      <Projects {...{ projets }} />
      <Contact />
    </>
  );
};

export default Acceuil;
