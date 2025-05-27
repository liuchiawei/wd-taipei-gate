import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/ui/navigation-menu'
import ThemeToggle from '@/components/common/themeToggle'

export default function Nav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <ThemeToggle />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <NavigationMenuLink href="/">Home</NavigationMenuLink>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ThemeToggle />
            <ThemeToggle />
            <ThemeToggle />
            <ThemeToggle />
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

