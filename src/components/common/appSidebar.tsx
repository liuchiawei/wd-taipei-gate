import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarTrigger, SidebarHeader } from "@/components/ui/sidebar";
import data from "@/data/content.json";

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <h1>{data.title}</h1>
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.gates.map((gate) => (
                <SidebarMenuItem key={gate.name}>
                  <SidebarMenuButton>
                    <h1>{gate.name}</h1>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
