import { ChartNoAxesCombined, CircleHelp, LayoutGrid, ReceiptText, Settings, Trash2, UserRound, Users } from "lucide-react"; // Example icons
import { Invoice, PricingPlan, SideBarSection } from "./Types";



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


export const pricingPlans: PricingPlan[] = [
  {
    title: "Basic",
    description:
      "For individuals and small teams looking to manage their tasks.",
    price: "Free",
    workspaceLimits: ["3 Projects", "5 MB File Upload", "Up to 5 Users"],
    features: [
      "10 Projects",
      "50 Tasks per project",
      "5 MB File Upload",
      "Up to 5 Guests",
    ],
    buttonLabel: "Downgrade",
    billingType: "monthly",
  },
  {
    title: "Pro",
    description:
      "For growing teams that need to track their projects progress.",
    price: "$10",
    priceNote: "/mo/user",
    workspaceLimits: [
      "Unlimited Projects",
      "100 MB File Upload",
      "Up to 10 Guests",
    ],
    features: [
      "Unlimited Projects",
      "Unlimited Tasks",
      "100 MB File Upload",
      "Up to 10 Guests",
    ],
    buttonLabel: "Upgrade",
    isHighlighted: true,
    billingType: "monthly",
  },
  {
    title: "Business",
    description:
      "For companies that need to manage a portfolio of work and goals.",
    price: "$19",
    priceNote: "/mo/user",
    workspaceLimits: [
      "Unlimited Projects",
      "500 MB File Upload",
      "Unlimited Guests",
    ],
    features: [
      "Unlimited Projects",
      "Unlimited Tasks",
      "500 MB File Upload",
      "Unlimited Guests",
    ],
    buttonLabel: "Upgrade",
    isHighlighted: true,
    billingType: "annually",
  },
  {
    title: "Pro",
    description:
      "For growing teams that need to track their projects' progress.",
    price: "$15",
    priceNote: "/mo/user",
    workspaceLimits: [
      "Unlimited Projects",
      "200 MB File Upload",
      "Unlimited Guests",
    ],
    features: [
      "Priority Support",
      "Advanced Analytics",
      "200 MB File Upload",
      "Unlimited Guests",
    ],
    buttonLabel: "Current Plan",
    isCurrentPlan: true,
    billingType: "monthly",
  },
];

export const InvoiceData : Invoice[] =[
  {
    date: "Dec 18 2023",
    description: "Pro Plan (monthly)",
    seats: "4 Seats",
    total: "$120.00",
    status: "Paid",
    file: "",
  },
  {
    date: "Dec 18 2023",
    description: "Pro Plan (monthly)",
    seats: "4 Seats",
    total: "$200.00",
    status: "Grace Period",
    file: "",
  },
  {
    date: "Dec 18 2023",
    description: "Pro Plan (monthly)",
    seats: "4 Seats",
    total: "$200.00",
    status: "On Hold",
    file: "",
  },
]