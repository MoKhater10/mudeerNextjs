import React from "react";
import logo from "../../app/assets/logo.png";

import { ChevronDown, Globe, Search } from "lucide-react";
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

function Navbar() {
  return (
    <div className="bg-black px-4 pr-6 py-2 grid grid-cols-2 sticky top-0 z-20">
      <div
        className="grid  items-center"
        style={{ gridTemplateColumns: "1fr 4fr" }}
      >
        <div>
          <Image src={logo} alt="logo" className="min-w-[108px]" />
        </div>
        <div className="relative  max-md:hidden">
          <input
            type="search"
            placeholder="Search anything"
            className="flex justify-self-end bg-[#FFFFFF33] rounded-full w-4/5 px-10 py-2 text-white"
          />
          <Search
            size={16}
            color="white"
            strokeWidth={1.25}
            className="absolute left-[22%] top-3"
          />
          <div className="absolute right-4 top-3 flex justify-center items-center">
            <div>
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_dd_26_231)">
                  <rect
                    x="2.72217"
                    y="1.40735"
                    width="15.5556"
                    height="16.1852"
                    rx="2.59259"
                    fill="#18181B"
                  />
                  <path
                    d="M8.11556 13C7.63161 13 7.24444 12.8583 6.95407 12.5748C6.67062 12.2914 6.52889 11.9111 6.52889 11.4341C6.52889 10.9294 6.67753 10.5388 6.97481 10.2622C7.27901 9.97877 7.72494 9.83704 8.31259 9.83704H8.92444V8.6963H8.31259C7.72494 8.6963 7.27901 8.55802 6.97481 8.28148C6.67753 7.99802 6.52889 7.60395 6.52889 7.09926C6.52889 6.62222 6.67062 6.24197 6.95407 5.95852C7.24444 5.67506 7.63161 5.53333 8.11556 5.53333C8.50272 5.53333 8.80691 5.60593 9.02815 5.75111C9.2563 5.8963 9.41531 6.08988 9.50519 6.33185C9.60198 6.57383 9.65037 6.84 9.65037 7.13037V7.99111H10.7911V7.13037C10.7911 6.84 10.836 6.57383 10.9259 6.33185C11.0227 6.08988 11.1817 5.8963 11.403 5.75111C11.6311 5.60593 11.9388 5.53333 12.3259 5.53333C12.8099 5.53333 13.1936 5.67506 13.477 5.95852C13.7674 6.24197 13.9126 6.62222 13.9126 7.09926C13.9126 7.60395 13.764 7.99802 13.4667 8.28148C13.1694 8.55802 12.7235 8.6963 12.1289 8.6963H11.517V9.83704H12.1289C12.7235 9.83704 13.1694 9.97877 13.4667 10.2622C13.764 10.5388 13.9126 10.9294 13.9126 11.4341C13.9126 11.9111 13.7674 12.2914 13.477 12.5748C13.1936 12.8583 12.8099 13 12.3259 13C11.9388 13 11.6311 12.9274 11.403 12.7822C11.1817 12.637 11.0227 12.4435 10.9259 12.2015C10.836 11.9595 10.7911 11.6933 10.7911 11.403V10.5422H9.65037V11.403C9.65037 11.6933 9.60198 11.9595 9.50519 12.2015C9.41531 12.4435 9.2563 12.637 9.02815 12.7822C8.80691 12.9274 8.50272 13 8.11556 13ZM11.517 7.10963V7.99111H12.1289C12.4953 7.99111 12.7615 7.91852 12.9274 7.77333C13.0933 7.62123 13.1763 7.39654 13.1763 7.09926C13.1763 6.79506 13.0933 6.57728 12.9274 6.44593C12.7684 6.31457 12.5679 6.24889 12.3259 6.24889C12.0563 6.24889 11.8523 6.32839 11.7141 6.48741C11.5827 6.63951 11.517 6.84691 11.517 7.10963ZM8.31259 7.99111H8.92444V7.10963C8.92444 6.84691 8.85531 6.63951 8.71704 6.48741C8.58568 6.32839 8.38519 6.24889 8.11556 6.24889C7.87358 6.24889 7.66963 6.31457 7.5037 6.44593C7.34469 6.57728 7.26519 6.79506 7.26519 7.09926C7.26519 7.39654 7.34815 7.62123 7.51407 7.77333C7.68 7.91852 7.94617 7.99111 8.31259 7.99111ZM9.65037 9.83704H10.7911V8.6963H9.65037V9.83704ZM8.11556 12.2844C8.38519 12.2844 8.58568 12.2084 8.71704 12.0563C8.85531 11.8973 8.92444 11.6864 8.92444 11.4237V10.5422H8.31259C7.94617 10.5422 7.68 10.6183 7.51407 10.7704C7.34815 10.9156 7.26519 11.1368 7.26519 11.4341C7.26519 11.7383 7.34469 11.956 7.5037 12.0874C7.66963 12.2188 7.87358 12.2844 8.11556 12.2844ZM11.517 11.4237C11.517 11.6864 11.5827 11.8973 11.7141 12.0563C11.8523 12.2084 12.0563 12.2844 12.3259 12.2844C12.5679 12.2844 12.7684 12.2188 12.9274 12.0874C13.0933 11.956 13.1763 11.7383 13.1763 11.4341C13.1763 11.1368 13.0933 10.9156 12.9274 10.7704C12.7615 10.6183 12.4953 10.5422 12.1289 10.5422H11.517V11.4237Z"
                    fill="#D4D4D8"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_dd_26_231"
                    x="0.777724"
                    y="0.111053"
                    width="19.4446"
                    height="20.0741"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="0.648148" />
                    <feGaussianBlur stdDeviation="0.648148" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0941176 0 0 0 0 0.137255 0 0 0 0 0.133333 0 0 0 0.06 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_26_231"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="0.648148" />
                    <feGaussianBlur stdDeviation="0.972222" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0941176 0 0 0 0 0.137255 0 0 0 0 0.133333 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_26_231"
                      result="effect2_dropShadow_26_231"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_26_231"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div>
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_dd_26_233)">
                  <rect
                    x="2.61108"
                    y="1.40747"
                    width="15.5556"
                    height="16.1852"
                    rx="2.59259"
                    fill="#18181B"
                  />
                  <path
                    d="M7.84299 13.0001V5.63716H8.73484V9.2979L12.043 5.63716H13.1734L10.2904 8.83123L13.3704 13.0001H12.2815L9.68892 9.49494L8.73484 10.5423V13.0001H7.84299Z"
                    fill="#D4D4D8"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_dd_26_233"
                    x="0.66664"
                    y="0.111175"
                    width="19.4446"
                    height="20.0741"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="0.648148" />
                    <feGaussianBlur stdDeviation="0.648148" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0941176 0 0 0 0 0.137255 0 0 0 0 0.133333 0 0 0 0.06 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_26_233"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="0.648148" />
                    <feGaussianBlur stdDeviation="0.972222" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0941176 0 0 0 0 0.137255 0 0 0 0 0.133333 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_26_233"
                      result="effect2_dropShadow_26_233"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_26_233"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
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
            stroke-width="0.428571"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.8539 7.8161C18.6761 7.20453 17.7419 7.20453 17.5642 7.8161L17.3136 8.68295C16.7717 10.5513 16.0325 12.0102 14.0224 12.5129L13.089 12.7463C12.9504 12.7738 12.8257 12.8486 12.736 12.9578C12.6464 13.0671 12.5974 13.204 12.5974 13.3453C12.5974 13.4866 12.6464 13.6235 12.736 13.7328C12.8257 13.842 12.9504 13.9168 13.089 13.9443L14.0224 14.1777C16.0325 14.6812 16.7717 16.14 17.3136 18.0076L17.5642 18.8745C17.7419 19.4868 18.6761 19.4868 18.8539 18.8745L19.1045 18.0076C19.6463 16.14 20.3863 14.6812 22.3965 14.1785L23.3283 13.9443C23.4669 13.9168 23.5916 13.842 23.6813 13.7328C23.7709 13.6235 23.8199 13.4866 23.8199 13.3453C23.8199 13.204 23.7709 13.0671 23.6813 12.9578C23.5916 12.8486 23.4669 12.7738 23.3283 12.7463L22.3965 12.5129C20.3863 12.0102 19.6463 10.5513 19.1045 8.68373L18.8539 7.8161Z"
            fill="url(#paint0_linear_26_244)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
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
              <stop stop-color="#FF802B" />
              <stop offset="1" stop-color="#335FFF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_26_244"
              x1="10.5607"
              y1="23.8544"
              x2="14.1542"
              y2="16.6682"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2CC171" />
              <stop offset="1" stop-color="#0037FF" />
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
