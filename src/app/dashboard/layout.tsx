import Navbar from "@/components/ui/Navbar";
import SideBar from "@/components/ui/SideBar";
import { Toaster } from 'sonner'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
       <Toaster position="top-right"  />
      <Navbar />
      <div
        className="grid grid-cols-[4rem_calc(100%-4rem)] md:grid-cols-[245px_calc(100%-245px)] h-screen"
      >
        {" "}
        {/* Set full height for the layout */}
        <div>
          <SideBar />
        </div>
        <div className="flex-1 overflow-y-auto">
          {" "}
          {/* Ensure children scroll independently */}
          {children}
        </div>
      </div>
    </div>
  );
}
