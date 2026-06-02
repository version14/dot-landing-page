import { defineConfig } from "@pandacss/dev";
import { v14Preset } from "@version14/ui/preset";

export default defineConfig({
  preflight: true,
  presets: [v14Preset],
  theme: {
    extend: {
      tokens: {
        spacing: {
          "root-padding": { value: "56px" },
        },
        sizes: {
          "max-w-global": { value: "calc(1234px + 56px * 2)" },
        },
      },
    },
  },
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  jsxFramework: "react",
  outdir: "styled-system",
});
