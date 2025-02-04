"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Ellipsis, Pen, Plus, Trash2, X, Zap } from "lucide-react";
import Image from "next/image";
import { FormEvent, useState } from "react";
import visa from "../../assets/visa.png";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface CardDetails {
  cardholderName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

interface Errors {
  cardholderName?: string;
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
}

export default function PlansBilling() {
  interface PricingPlan {
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

  const pricingPlans: PricingPlan[] = [
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

  const [billingType, setBillingType] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [hasCardDetails, setHasCardDetails] = useState(false);

  const filteredPlans = pricingPlans.filter(
    (plan) => plan.billingType === billingType
  );

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [cardDetails, setCardDetails] = useState<CardDetails>({
    cardholderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [errors, setErrors] = useState<Errors>({}); // Typed for specific keys

  // 2. Handle Change with Types
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" })); // Clear error when typing
  };

  // 3. Handle Submit with Validation
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Errors = {};

    Object.entries(cardDetails).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key as keyof CardDetails] = "This field is required"; // Type-safe key
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Form Submitted:", cardDetails);
      setIsOpen(false); // Close dialog on success
      setIsOpenEdit(false); // Close dialog on success
      setHasCardDetails(true);
      const toastId = toast(
        <div className="flex items-center justify-between w-full text-white">
          <p>Card Updated successfully.</p>
          <button onClick={() => toast.dismiss(toastId)}>
            <X size={18} />
          </button>
        </div>,
        {
          style: {
            background: "black",
            border: "0",
          },
        }
      );
    }
  };

  const handleCancel = () => {
    setIsOpen(false);
    setCardDetails({
      cardholderName: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    });
    setErrors({});
  };

  const removePayment = () => {
    setCardDetails({
      cardholderName: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    });
    setErrors({});
    setHasCardDetails(false);
    const toastId = toast(
      <div className="flex items-center justify-between w-full text-white">
        <p>Card removed successfully.</p>
        <button onClick={() => toast.dismiss(toastId)}>
          <X size={18} />
        </button>
      </div>,
      {
        style: {
          background: "black",
          border: "0",
        },
      }
    );
  };

  return (
    <div>
      <div className="border-b border-[#E4E4E7]">
        <div className="p-8">
          <h1 className="font-semibold text-xl">Plans & Billing</h1>
        </div>
      </div>
      <div className="p-4 sm:p-6 md:p-8 grid grid-cols-1 gap-6 ">
        {/* Plan Details & Total Paid Seats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {/* Plan Details */}
          <div className="border border-[#E4E4E7] rounded-xl py-5 px-4 sm:px-6 grid gap-4 sm:gap-6">
            <h2 className="text-[#010101] font-semibold text-sm">
              Plan details
            </h2>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
              <span className="text-[#010101] font-semibold text-base">
                Business Plan Trial
              </span>
              <span className="flex items-center gap-1 bg-[#CCD7FF] py-1 px-3 rounded-full text-xs font-normal w-fit">
                <Zap size={14} color="#010101" strokeWidth={1.25} /> 13 days
                left in free trial
              </span>
            </div>
            <div className="font-medium text-base text-[#335FFF] cursor-pointer">
              Manage Subscription
            </div>
          </div>

          {/* Total Paid Seats */}
          <div className="border border-[#E4E4E7] rounded-xl py-5 px-4 sm:px-6 grid gap-4 sm:gap-6">
            <h2 className="text-[#010101] font-semibold text-sm">
              Total paid seats today
            </h2>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-2">
                <span className="text-[#010101] font-semibold text-base">
                  3 seats
                </span>
                <span className="text-[#3F3F46] font-normal text-sm">
                  (2 Admins, 1 Member)
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[#010101] font-semibold text-base">
                  $10
                </span>
                <span className="text-[#3F3F46] font-normal text-sm">
                  per seat per month
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Invoice Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-8 border-b border-dashed border-[#D4D4D8]">
          {/* Next Invoice Issue Date */}
          <div className="border border-[#E4E4E7] rounded-xl py-4 px-4 sm:px-6 grid gap-2">
            <span className="font-semibold text-sm text-[#010101]">
              Next invoice issue date
            </span>
            <span className="font-semibold text-base text-[#010101]">
              Dec 29, 2024
            </span>
          </div>

          {/* Invoice Total */}
          <div className="border border-[#E4E4E7] rounded-xl py-4 px-4 sm:px-6 grid gap-2">
            <span className="font-semibold text-sm text-[#010101]">
              Invoice total
            </span>
            <span className="font-semibold text-base text-[#010101]">$125</span>
          </div>

          {/* Payment Method */}
          <div className="border border-[#E4E4E7] rounded-xl py-4 px-4 sm:px-6 grid gap-2">
            <span className="font-semibold text-sm text-[#010101]">
              Payment Method
            </span>

            {!hasCardDetails ? (
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <Button className="rounded-[6px] border border-[#F4F4F5] hover:border-transparent flex items-center gap-2 w-fit">
                    <Plus size={20} color="#010101" strokeWidth={3} />
                    <span className="font-semibold text-xs text-[#010101]">
                      Add Card
                    </span>
                  </Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[612px] flex flex-col">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-semibold pt-4 px-6">
                      Add Payment Method
                    </DialogTitle>
                  </DialogHeader>

                  <form
                    onSubmit={handleSubmit}
                    className="grid gap-4 px-6 pb-4"
                  >
                    {/** Cardholder Name */}
                    <div className="flex flex-col gap-1">
                      <Label className="font-normal text-base">
                        Cardholder Name
                      </Label>
                      <Input
                        id="cardholderName"
                        value={cardDetails.cardholderName}
                        onChange={handleChange}
                        placeholder="Enter your name on card"
                      />
                      {errors.cardholderName && (
                        <span className="text-red-500 text-sm">
                          {errors.cardholderName}
                        </span>
                      )}
                    </div>

                    {/** Card Number */}
                    <div className="flex flex-col gap-1">
                      <Label className="font-normal text-base">
                        Card Number
                      </Label>
                      <Input
                        id="cardNumber"
                        value={cardDetails.cardNumber}
                        onChange={handleChange}
                        placeholder="0000 0000 0000 0000"
                      />
                      {errors.cardNumber && (
                        <span className="text-red-500 text-sm">
                          {errors.cardNumber}
                        </span>
                      )}
                    </div>

                    {/** Expiry Date & CVV */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1">
                        <Label className="font-normal text-base">
                          Expiry Date
                        </Label>
                        <Input
                          id="expiryDate"
                          value={cardDetails.expiryDate}
                          onChange={handleChange}
                          placeholder="MM / YY"
                        />
                        {errors.expiryDate && (
                          <span className="text-red-500 text-sm">
                            {errors.expiryDate}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-col gap-1">
                        <Label className="font-normal text-base">CVV</Label>
                        <Input
                          id="cvv"
                          value={cardDetails.cvv}
                          onChange={handleChange}
                          placeholder="123"
                        />
                        {errors.cvv && (
                          <span className="text-red-500 text-sm">
                            {errors.cvv}
                          </span>
                        )}
                      </div>
                    </div>

                    {/** Footer Buttons */}
                    <DialogFooter className="px-4 border-t py-6">
                      <Button
                        type="button"
                        className="bg-white text-black font-semibold text-sm rounded-[8px]"
                        onClick={handleCancel}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        className="bg-black text-white font-semibold text-sm rounded-[8px]"
                      >
                        Update
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            ) : (
              <div className="flex justify-between items-center">
                <div className="flex  items-center gap-2">
                  <Image src={visa} alt="visa" />
                  <span className="text-[#71717A] font-normal text-base">
                    ending in {cardDetails.expiryDate}
                  </span>
                </div>
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="rounded-[6px] bg-[#F4F4F5] border border-[#E4E4E7] px-[10px] py-1">
                        <Ellipsis size={20} color="#010101" strokeWidth={1} />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-40 bg-white">
                      {/* <DropdownMenuItem className="!hover:bg-[#E5EBFF]"> */}
                      <Dialog open={isOpenEdit} onOpenChange={setIsOpenEdit}>
                        <DialogTrigger className="px-2 py-2 flex items-center gap-2 w-full rounded hover:bg-[#E5EBFF]">
                          <Pen size={20} color="#010101" strokeWidth={1} />
                          <span className="font-normal text-sm">Edit info</span>
                        </DialogTrigger>

                        <DialogContent className="sm:max-w-[612px] flex flex-col">
                          <DialogHeader>
                            <DialogTitle className="text-xl font-semibold pt-4 px-6">
                              Edit Payment Method
                            </DialogTitle>
                          </DialogHeader>

                          <form
                            onSubmit={handleSubmit}
                            className="grid gap-4 px-6 pb-4"
                          >
                            {/** Cardholder Name */}
                            <div className="flex flex-col gap-1">
                              <Label className="font-normal text-base">
                                Cardholder Name
                              </Label>
                              <Input
                                id="cardholderName"
                                value={cardDetails.cardholderName}
                                onChange={handleChange}
                                placeholder="Enter your name on card"
                              />
                              {errors.cardholderName && (
                                <span className="text-red-500 text-sm">
                                  {errors.cardholderName}
                                </span>
                              )}
                            </div>

                            {/** Card Number */}
                            <div className="flex flex-col gap-1">
                              <Label className="font-normal text-base">
                                Card Number
                              </Label>
                              <Input
                                id="cardNumber"
                                value={cardDetails.cardNumber}
                                onChange={handleChange}
                                placeholder="0000 0000 0000 0000"
                              />
                              {errors.cardNumber && (
                                <span className="text-red-500 text-sm">
                                  {errors.cardNumber}
                                </span>
                              )}
                            </div>

                            {/** Expiry Date & CVV */}
                            <div className="grid grid-cols-2 gap-4">
                              <div className="flex flex-col gap-1">
                                <Label className="font-normal text-base">
                                  Expiry Date
                                </Label>
                                <Input
                                  id="expiryDate"
                                  value={cardDetails.expiryDate}
                                  onChange={handleChange}
                                  placeholder="MM / YY"
                                />
                                {errors.expiryDate && (
                                  <span className="text-red-500 text-sm">
                                    {errors.expiryDate}
                                  </span>
                                )}
                              </div>

                              <div className="flex flex-col gap-1">
                                <Label className="font-normal text-base">
                                  CVV
                                </Label>
                                <Input
                                  id="cvv"
                                  value={cardDetails.cvv}
                                  onChange={handleChange}
                                  placeholder="123"
                                />
                                {errors.cvv && (
                                  <span className="text-red-500 text-sm">
                                    {errors.cvv}
                                  </span>
                                )}
                              </div>
                            </div>

                            {/** Footer Buttons */}
                            <DialogFooter className="px-4 border-t py-6">
                              <Button
                                type="button"
                                className="bg-white text-black font-semibold text-sm rounded-[8px]"
                                onClick={handleCancel}
                              >
                                Cancel
                              </Button>
                              <Button
                                type="submit"
                                className="bg-black text-white font-semibold text-sm rounded-[8px]"
                              >
                                Update
                              </Button>
                            </DialogFooter>
                          </form>
                        </DialogContent>
                      </Dialog>
                      {/* </DropdownMenuItem> */}
                      <DropdownMenuItem
                        onClick={removePayment}
                        className="px-0  flex items-center gap-2 w-full rounded hover:bg-[#E5EBFF]"
                      >
                        <span className="cursor-pointer px-1 py-2 flex items-center gap-2 w-full rounded hover:bg-[#E5EBFF]">
                          <Trash2 size={20} color="#DB4F00" strokeWidth={1} />{" "}
                          Remove card
                        </span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

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
        <div className="flex justify-center items-center py-12 ">
          <span className="text-[#0037FF] font-semibold text-base cursor-pointer ">
            See all features and benefits
          </span>
        </div>
      </div>

      <div className="border-t border-dashed border-[#D4D4D8] px-8">
        Invoices History
      </div>
      {/* <button
        onClick={() => {
          const toastId = toast(
            <div className="flex items-center justify-between w-full text-white">
              <p>Card removed successfully.</p>
              <button onClick={() => toast.dismiss(toastId)}>
                <X size={18} />
              </button>
            </div>,
            {
              style: {
                background: "black",
                border: "0",
              },
            }
          );
        }}
      >
        Remove Card
      </button> */}
    </div>
  );
}
