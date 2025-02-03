"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const route = useRouter()
  return (
    <div className="flex justify-center items-center h-screen ">
      <Button className="bg-black text-white rounded-xl py-6 px-20 text-xl" onClick={()=>{route.push("/dashboard")}}>
        das
      </Button>
    </div>
  );
}
