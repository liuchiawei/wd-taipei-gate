import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/ui/navigation-menu'
import { SidebarTrigger } from '@/components/ui/sidebar'
import ThemeToggle from '@/components/common/themeToggle'

export default function Nav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <SidebarTrigger />
        </NavigationMenuItem>
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

