import Navbar from "@/components/ui/Navbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" dir="rtl">
        <Navbar />
      <div>
        {children}
      </div>
    </html>
  );
}
