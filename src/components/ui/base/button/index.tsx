import { Button as BaseButton } from "@base-ui/react/button";
import type { ButtonProps as BaseButtonProps } from "@base-ui/react/button";

type ButtonVariant = "solid" | "outline";

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  solid: "lp-btn-solid",
  outline: "lp-btn-line",
};

interface ButtonProps extends Omit<BaseButtonProps, "render"> {
  variant?: ButtonVariant;
}

export function Button({ variant = "solid", className = "", ...props }: Readonly<ButtonProps>) {
  return <BaseButton className={`${VARIANT_CLASS[variant]} ${className}`.trim()} {...props} />;
}

interface LinkButtonProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
  variant?: ButtonVariant;
  className?: string;
  children?: React.ReactNode;
}

/**
 * A visually-styled CTA rendered as an <a> tag via Base UI Button's render prop.
 * Keeps button accessibility semantics while navigating like a link.
 */
export function LinkButton({
  variant = "solid",
  className = "",
  href,
  target,
  rel,
  children,
  ...anchorProps
}: Readonly<LinkButtonProps>) {
  return (
    <BaseButton
      render={<a href={href} target={target} rel={rel} {...anchorProps} />}
      className={`${VARIANT_CLASS[variant]} ${className}`.trim()}
    >
      {children}
    </BaseButton>
  );
}
