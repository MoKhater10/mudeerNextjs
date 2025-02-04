"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { pricingPlans } from "@/lib/data";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

export default function PricingPlans() {
  const [billingType, setBillingType] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const filteredPlans = pricingPlans.filter(
    (plan) => plan.billingType === billingType
  );

  return (
    <div className="">
      <div className="px-4 sm:px-6 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4 md:gap-0">
        <div className="font-semibold text-lg">All Plans</div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <RadioGroup
            defaultValue="Billed monthly"
            className="flex flex-col sm:flex-row gap-2 sm:gap-4"
            onValueChange={(value) =>
              setBillingType(
                value === "Billed annually (17% off)" ? "annually" : "monthly"
              )
            }
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Billed monthly" id="billed-monthly" />
              <Label className="font-semibold text-sm">Billed monthly</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="Billed annually (17% off)"
                id="billed-annually"
              />
              <Label className="font-semibold text-sm">
                Billed annually (17% off)
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlans.map((plan, index) => (
          <div
            key={index}
            className={`border rounded-[10px] py-4 grid gap-4 max-w-full sm:max-w-[380px] cursor-pointer transition-all duration-300 ${
              selectedPlan === plan.title
                ? "border-blue-500 border-2"
                : "border-[#F4F4F5]"
            } ${plan.isCurrentPlan ? "bg-[#E5EBFF]" : ""}`}
            onClick={() => setSelectedPlan(plan.title)}
          >
            <div className="px-4 sm:px-6 grid gap-2">
              <h3 className="font-semibold text-base text-[#010101]">
                {plan.title}
              </h3>
              <p className="text-sm font-normal text-[#71717A] w-full sm:w-4/5">
                {plan.description}
              </p>
            </div>
            <div>
              <div className="px-4 sm:px-6 pb-4">
                <h2 className="text-2xl font-semibold">
                  {plan.price}
                  {plan.priceNote && (
                    <sub className="text-sm">{plan.priceNote}</sub>
                  )}
                </h2>
              </div>
              <hr />
              <div className="px-4 sm:px-6 py-4 grid gap-3">
                <span className="text-[#010101] font-semibold text-sm">
                  Workspace Limits
                </span>
                <ul className="px-5 sm:px-7 list-disc">
                  {plan.workspaceLimits.map((limit, idx) => (
                    <li
                      key={idx}
                      className="font-normal text-sm text-[#010101]"
                    >
                      {limit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-4 sm:px-6 py-1 grid gap-3">
                <span className="text-[#010101] font-semibold text-sm">
                  {plan.title === "Basic"
                    ? "Features"
                    : `Everything in ${index === 1 ? "Starter" : "Pro"}, and`}
                </span>
                <ul className="px-5 sm:px-7 list-disc">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="font-normal text-sm text-[#010101]"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center items-center mt-4">
                <button
                  className={`w-11/12 text-sm font-semibold rounded-[6px] border py-2 transition duration-300 ${
                    plan.isCurrentPlan
                      ? "bg-[#CCD7FF] text-[#0037FF] cursor-not-allowed"
                      : plan.isHighlighted
                      ? "bg-[#09090B] text-white hover:bg-[#1c1c1e]"
                      : "hover:border-none hover:bg-gray-100"
                  }`}
                  disabled={plan.isCurrentPlan}
                >
                  {plan.buttonLabel}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center pt-12 pb-4 ">
        <span className="text-[#0037FF] font-semibold text-base cursor-pointer ">
          See all features and benefits
        </span>
      </div>
    </div>
  );
}
