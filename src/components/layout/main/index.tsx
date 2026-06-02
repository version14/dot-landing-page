import { css } from "@styled-system/css";
import { Nav } from "./nav";

export function Main(props: { children: React.ReactNode }) {
  return (
    <main
      className={css({
        display: "flex",
        flexDir: "column",
      })}
    >
      <Nav />
      {props.children}
    </main>
  );
}
