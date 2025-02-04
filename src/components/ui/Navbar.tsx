import React from "react";
import logo from "../../app/assets/logo.png";

import { ChevronDown, Globe } from "lucide-react";
import Image from "next/image";
import { Button } from "./button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ComponentSearch from "../comp-25";

function Navbar() {
  return (
    <div className="bg-black px-4 pr-6 py-2 grid grid-cols-2 sticky top-0 z-50 ">
      <div
        className="grid  items-center"
        style={{ gridTemplateColumns: "1fr 4fr" }}
      >
        <div>
          <Image src={logo} alt="logo" className="min-w-[108px]" />
        </div>
        <div className="relative  max-md:hidden">
          
          <ComponentSearch />
        </div>
      </div>
      <div className="flex justify-end items-center gap-2">
        <Button className="bg-[#CCD7FF] text-[#000B33] rounded-[5px] text-sm font-semibold px-10 py-2 max-md:px-4 hover:bg-white">
          Upgrade
        </Button>
        <Globe
          size={30}
          color="#71717A"
          strokeWidth={1}
          className="cursor-pointer"
        />
        <svg
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.714286"
            y="0.714286"
            width="29.5714"
            height="29.5714"
            rx="14.7857"
            stroke="#71717A"
            strokeWidth="0.428571"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.8539 7.8161C18.6761 7.20453 17.7419 7.20453 17.5642 7.8161L17.3136 8.68295C16.7717 10.5513 16.0325 12.0102 14.0224 12.5129L13.089 12.7463C12.9504 12.7738 12.8257 12.8486 12.736 12.9578C12.6464 13.0671 12.5974 13.204 12.5974 13.3453C12.5974 13.4866 12.6464 13.6235 12.736 13.7328C12.8257 13.842 12.9504 13.9168 13.089 13.9443L14.0224 14.1777C16.0325 14.6812 16.7717 16.14 17.3136 18.0076L17.5642 18.8745C17.7419 19.4868 18.6761 19.4868 18.8539 18.8745L19.1045 18.0076C19.6463 16.14 20.3863 14.6812 22.3965 14.1785L23.3283 13.9443C23.4669 13.9168 23.5916 13.842 23.6813 13.7328C23.7709 13.6235 23.8199 13.4866 23.8199 13.3453C23.8199 13.204 23.7709 13.0671 23.6813 12.9578C23.5916 12.8486 23.4669 12.7738 23.3283 12.7463L22.3965 12.5129C20.3863 12.0102 19.6463 10.5513 19.1045 8.68373L18.8539 7.8161Z"
            fill="url(#paint0_linear_26_244)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.112 16.626C11.0055 16.2438 10.4448 16.2438 10.3391 16.626L10.188 17.1678C9.86303 18.3346 9.41982 19.2469 8.21312 19.5617L7.65402 19.7073C7.56962 19.7271 7.4944 19.7749 7.44056 19.8428C7.38672 19.9108 7.35742 19.9949 7.35742 20.0816C7.35742 20.1683 7.38672 20.2524 7.44056 20.3204C7.4944 20.3883 7.56962 20.4361 7.65402 20.4559L8.21312 20.6023C9.41904 20.9163 9.86303 21.8286 10.188 22.9954L10.3391 23.5373C10.4448 23.9202 11.0055 23.9202 11.112 23.5373L11.2631 22.9954C11.5873 21.8286 12.0321 20.9163 13.238 20.6023L13.7971 20.4559C13.8815 20.4361 13.9568 20.3883 14.0106 20.3204C14.0644 20.2524 14.0937 20.1683 14.0937 20.0816C14.0937 19.9949 14.0644 19.9108 14.0106 19.8428C13.9568 19.7749 13.8815 19.7271 13.7971 19.7073L13.238 19.5617C12.0321 19.2476 11.5873 18.3354 11.2631 17.1678L11.112 16.626Z"
            fill="url(#paint1_linear_26_244)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_26_244"
              x1="18.1045"
              y1="19.1838"
              x2="23.853"
              y2="7.6869"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF802B" />
              <stop offset="1" stopColor="#335FFF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_26_244"
              x1="10.5607"
              y1="23.8544"
              x2="14.1542"
              y2="16.6682"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2CC171" />
              <stop offset="1" stopColor="#0037FF" />
            </linearGradient>
          </defs>
        </svg>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="relative cursor-pointer">
              <AvatarImage
                src="https://github.com/shadcn.png"
                width={30}
                height={30}
                className="rounded-full"
              />
              <AvatarFallback className="text-white">CN</AvatarFallback>
              <span className="rounded-full p-[2px] bg-[#FFD800] absolute -bottom-1 right-0 cursor-pointer"><ChevronDown size={10} color="#18181B" />  </span>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-white">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Billing
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Keyboard shortcuts
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Email</DropdownMenuItem>
                    <DropdownMenuItem>Message</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>More...</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem>
                New Team
                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>GitHub</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuItem disabled>API</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Navbar;
