const sizeMap = {
  xs: 16,
  sm: 24,
  md: 40,
  lg: 64,
  xl: 96,
} as const;

type DotProps = {
  variant?: "dark" | "light";
  size?: keyof typeof sizeMap;
};

export function Dot({ variant = "dark", size = "md" }: DotProps) {
  const bg = variant === "dark" ? "black" : "white";
  const mark = variant === "dark" ? "white" : "black";
  const px = sizeMap[size];

  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Dot"
    >
      <path d="M100 0H0V100H100V0Z" fill={bg} />
      <path d="M43.75 43.75H56.25V56.25H43.75V43.75Z" fill={mark} />
    </svg>
  );
}
