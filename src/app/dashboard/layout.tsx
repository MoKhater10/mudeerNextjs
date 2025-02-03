import Navbar from "@/components/ui/Navbar";
import SideBar from "@/components/ui/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      <div className="flex h-screen"> {/* Set full height for the layout */}
        <SideBar />
        <div className="flex-1 overflow-y-auto"> {/* Ensure children scroll independently */}
          {children}
        </div>
      </div>
    </div>
  );
}

