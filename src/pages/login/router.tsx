import { RouteObject } from "react-router-dom";

export const router: RouteObject[] = [
  {
    path: "login",
    lazy: async () => {
      const LoginPage = (await import("./page")).default;
      return {
        Component: LoginPage,
      };
    },
  },
];
