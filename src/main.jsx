import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";

import "./index.css";
import { Acceuil, Contact, Presentation, Projets } from "./components/Layouts";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Acceuil },
      { path: "/presentation", Component: Presentation },
      {
        path: "/projets",
        Component: Projets,
      },
      { path: "/contacts", Component: Contact },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
