import { css } from "@styled-system/css";
import { Stack } from "@styled-system/jsx";
import { P } from "@version14/ui";
import { Dot } from "@/components/icons/dot";
import { useThemeContext } from "@/providers/ThemeProvider";

export function Nav() {
  const { theme } = useThemeContext();
  return (
    <header>
      <nav
        className={css({
          paddingX: "root-padding",
          maxW: "max-w-global",
          marginX: "auto",
        })}
      >
        <Stack
          padding={5}
          borderX={"1px solid"}
          borderBottom={"1px solid"}
          borderBottomColor={"border"}
          borderColor={"border"}
          direction={"row"}
          alignItems={"center"}
        >
          <Dot size="sm" variant={theme === "dark" ? "dark" : "light"} />
          <strong>
            <P fontSize={"18"}>
              v14 /{" "}
              <span
                className={css({
                  fontFamily: "serif",
                  fontWeight: 100,
                  fontStyle: "italic",
                })}
              >
                Dot
              </span>
            </P>
          </strong>
        </Stack>
      </nav>
    </header>
  );
}
