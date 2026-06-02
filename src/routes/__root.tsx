import { createRootRoute, Outlet } from "@tanstack/react-router";
import { HelmetProvider } from "react-helmet-async";
import { Main } from "../components/layout/main";
import { ThemeProvider } from "../providers/ThemeProvider";

export const Route = createRootRoute({
  component: () => (
    <HelmetProvider>
      <ThemeProvider>
        <Main>
          <Outlet />
        </Main>
      </ThemeProvider>
    </HelmetProvider>
  ),
});
