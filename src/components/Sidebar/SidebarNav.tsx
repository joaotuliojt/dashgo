import { Stack } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";


export function SidebarNav() {
  return (
    <Stack
      spacing={12}
      align="flex-start"
    >
      <NavSection title='GERAL'>
        <NavLink children='Dashboard' href="/dashboard" icon={RiDashboardLine} />
        <NavLink children='Usuários' href="/users" icon={RiContactsLine} />
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <NavLink children='Formulários' href="/forms" icon={RiInputMethodLine} />
        <NavLink children='Automação' href="/automation" icon={RiGitMergeLine} />
      </NavSection>
    </Stack>
  )
}