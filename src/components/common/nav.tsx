import { SidebarTrigger } from '@/components/ui/sidebar'
import ThemeToggle from '@/components/common/themeToggle'
import data from '@/data/content.json'

export default function Nav() {
  return (
    <nav className='fixed top-0 left-0 w-full p-2 flex items-center justify-between bg-background border-b z-40'>
      <SidebarTrigger />
      <h1 className='text-2xl font-title'>{data.title}</h1>
      <ThemeToggle />
    </nav>
  );
}

