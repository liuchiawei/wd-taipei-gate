export default function SidebarBtn({ scrollToGate, activeSection, id, name }: { scrollToGate: (id: string) => void, activeSection: string, id: string, name: string }) {
  return (
    <button
      onClick={() => scrollToGate(id)}
      className={`p-4 border-t cursor-pointer before:content-[""] before:absolute before:bg-primary before:h-full before:left-0 before:top-0 before:transition-all before:duration-300 transition-all duration-300 relative ${
        activeSection === id 
          ? 'text-primary-foreground shadow-md hover:bg-primary/80 hover:text-primary-foreground before:right-0' 
          : 'before:right-full hover:bg-accent hover:text-accent-foreground'
      }`}
    >
      <h1 className={`transition-all duration-300 ${
        activeSection === id ? '-translate-y-1' : 'font-normal'
      }`}>
        {name}
      </h1>
    </button>
  )
}
