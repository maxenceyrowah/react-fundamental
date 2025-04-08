import { Outlet } from "react-router";
import "./App.css";

import { Header, Main } from "./components";

const NAV_ITEMS = [
  {
    title: "Presentation",
    link: "/presentation",
  },
  {
    title: "Projets",
    link: "/projets",
  },
  {
    title: "Contact",
    link: "/contacts",
  },
];

const App = () => {
  return (
    <>
      <Header {...{ items: NAV_ITEMS }} />

      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default App;
