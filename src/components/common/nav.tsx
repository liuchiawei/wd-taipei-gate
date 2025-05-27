import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/ui/navigation-menu'
import { SidebarTrigger } from '@/components/ui/sidebar'
import ThemeToggle from '@/components/common/themeToggle'
import { Cog } from 'lucide-react';

export default function Nav() {
  return (
    <NavigationMenu>
      <NavigationMenuList className='p-2'>
        <NavigationMenuItem>
          <SidebarTrigger />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ThemeToggle />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Cog className='size-4' />
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

