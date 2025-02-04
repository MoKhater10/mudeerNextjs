"use client";

import InvoicesHistory from "./_components/InvoicesHistory";
import PlansDetails from "./_components/PlansDetails";
import PricingPlans from "./_components/PricingPlans";

export default function PlansBilling() {
  return (
    <div>
      <div className="border-b border-[#E4E4E7]">
        <div className="p-8">
          <h1 className="font-semibold text-xl">Plans & Billing</h1>
        </div>
      </div>
      <PlansDetails />
      <PricingPlans />
      <InvoicesHistory />
    </div>
  );
}
