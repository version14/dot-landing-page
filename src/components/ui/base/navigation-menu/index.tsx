import { NavigationMenu } from "@base-ui/react/navigation-menu";

export { NavigationMenu };

interface NavLink {
  label: string;
  href: string;
}

interface NavLinksProps {
  links: NavLink[];
  linkClassName?: string;
}

/**
 * Renders a list of simple navigation links using Base UI NavigationMenu.
 * Provides a semantic <nav> with keyboard-accessible arrow-key navigation.
 */
export function NavLinks({ links, linkClassName = "lp-nl" }: Readonly<NavLinksProps>) {
  return (
    <NavigationMenu.Root aria-label="Main navigation">
      <NavigationMenu.List className="lp-nav-list">
        {links.map(({ label, href }) => (
          <NavigationMenu.Item key={label} className="lp-nav-item">
            <NavigationMenu.Link
              href={href}
              className={linkClassName}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
