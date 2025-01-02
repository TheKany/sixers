import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LoginPage from "./pages/login/page";
import Main from "./pages/main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);
