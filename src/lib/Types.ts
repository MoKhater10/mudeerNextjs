export interface CardDetails {
  cardholderName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

export interface ErrorsCardDetails {
  cardholderName?: string;
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
}

export interface PricingPlan {
  title: string;
  description: string;
  price: string;
  priceNote?: string;
  workspaceLimits: string[];
  features: string[];
  buttonLabel: string;
  isHighlighted?: boolean;
  isCurrentPlan?: boolean;
  billingType: "monthly" | "annually";
}

export interface SideBarSection {
  icon: React.ElementType; // Icon as a component
  section: string;
  path: string;
}

 export interface Invoice {
  date: string;
  description: string;
  seats: string;
  total: string;
  status: string;
  file: string;
}
