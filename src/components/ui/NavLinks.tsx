import { NavigationMenu } from "./base/navigation-menu";

interface NavLink {
  label: string;
  href: string;
}

interface NavLinksProps {
  links: NavLink[];
  linkClassName?: string;
}

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
