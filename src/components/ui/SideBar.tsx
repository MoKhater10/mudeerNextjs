"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import bonousLogo from "../../app/assets/bonous-group.png";
import { useRouter, usePathname } from "next/navigation";
import { sideBarSections } from "@/lib/sidebarSections";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "./button";

function SideBar() {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  // Automatically open the sidebar for medium and larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true); // Open sidebar for medium screens and up
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize the sidebar state based on the current screen width

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen overflow-y-scroll bg-[#F4F4F5] fixed">
      <div
        className={`bg-[#F4F4F5] flex flex-col justify-start transition-all duration-300 ease-in-out ${
          isOpen ? "w-60" : "w-16"
        } md:w-60`} // Ensure the sidebar is always open on medium screens
      >
        <div className="flex justify-center items-center gap-2 cursor-pointer py-3 px-4">
          <button className="p-2 py-4 w-fit md:hidden" onClick={toggleSidebar}>
            {isOpen ? (
              <ArrowLeft size={20} color="#71717A" />
            ) : (
              <ArrowRight size={20} color="#71717A" />
            )}
          </button>
          <ArrowLeft
            size={20}
            strokeWidth={0.75}
            absoluteStrokeWidth
            className="max-md:hidden"
            onClick={() => {
              router.push("/");
            }}
          />
          <span
            className="text-[#71717A] font-normal text-sm max-md:hidden"
            onClick={() => {
              router.push("/");
            }}
          >
            Back to Workspace
          </span>
        </div>

        <div className="flex flex-col items-center mt-6">
          <Image src={bonousLogo} alt="bonous-logo" />
          {isOpen && (
            <span className="font-semibold text-base">BONUS Group, Inc.</span>
          )}
        </div>

        <div
          className={`flex flex-col justify-start gap-4 mt-6 mb-4 py-3 ${
            isOpen ? "px-6" : "px-2"
          }`}
        >
          {sideBarSections.map((sec, index) => {
            const Icon = sec.icon;
            const isActive = pathname === sec.path;

            return (
              <div
                key={index}
                className={`flex items-center gap-2 cursor-pointer transition-colors duration-300 px-4 py-2 rounded-[8px]  hover:bg-[#E5EBFF] hover: ${
                  isActive
                    ? "text-[#000B33] font-semibold"
                    : "text-[#3F3F46] font-light"
                }`}
                onClick={() => router.push(sec.path)}
              >
                <Icon
                  size={18}
                  strokeWidth={isActive ? "1" : "0.75"}
                  color={isActive ? "#000B33" : "#3F3F46"}
                />
                {isOpen && <span className="text-sm">{sec.section}</span>}
              </div>
            );
          })}
        </div>

        <div className="border-t border-[#D4D4D8] p-8 flex flex-col gap-6 pb-24">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              width={40}
              height={40}
              className="rounded-full"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {isOpen && (
            <>
              <p className="font-normal text-sm text-[#09090B]">
                Our Customer Success team can help you achieve your goals.
              </p>
              <Button className="bg-white w-fit  border border-[#E4E4E7] text-[#010101] rounded-[6px] text-xs font-medium px-6 py-2">
                Get in touch
              </Button>
              <span className="text-[#09090B] font-medium text-sm mt-2">
                Made with 💛 by Mudeer
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
