import { ChartNoAxesCombined, CircleHelp, LayoutGrid, ReceiptText, Settings, Trash2, UserRound, Users } from "lucide-react"; // Example icons

interface SideBarSection {
  icon: React.ElementType; // Icon as a component
  section: string;
  path: string;
}

export const sideBarSections: SideBarSection[] = [
  {
    icon: ChartNoAxesCombined,
    section: "Insights",
    path: "/dashboard/insights",
  },
  {
    icon: UserRound,
    section: "Members",
    path: "/dashboard/members",
  },
  {
    icon: Users,
    section: "Teams",
    path: "/dashboard/teams",
  },
  {
    icon: ReceiptText,
    section: "Plans & Billing",
    path: "/dashboard/plans-billing",
  },
  {
    icon: Settings,
    section: "General Settings",
    path: "/dashboard/general-settings",
  },
  {
    icon: LayoutGrid,
    section: "Integrations",
    path: "/dashboard/integrations",
  },
  {
    icon: Trash2,
    section: "Trash",
    path: "/dashboard/trash",
  },
  {
    icon: CircleHelp,
    section: "Resources",
    path: "/dashboard/resources",
  },
];

