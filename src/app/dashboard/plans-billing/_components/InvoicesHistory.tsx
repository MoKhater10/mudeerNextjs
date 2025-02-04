"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import noInvoice from "../../../assets/no-invoic.png";
import { Invoice } from "@/lib/Types";
import { InvoiceData } from "@/lib/data";

export default function InvoicesHistory() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInvoices(InvoiceData);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const getStatusBgColor = (status: string): string => {
    switch (status) {
      case "Paid":
        return "#AFF0CC";
      case "Grace Period":
        return "#FFF7CC";
      case "On Hold":
        return "#F8DCCC";
      default:
        return "transparent";
    }
  };

  return (
    <div className="border-[#D4D4D8] px-8">
      <h2 className="border-t border-dashed pt-4 text-[#010101] font-semibold text-lg">
        Invoices History
      </h2>

      {invoices.length === 0 ? (
        <div className=" flex flex-col gap-4 justify-center items-center w-full text-center py-8 pb-12">
          <Image src={noInvoice} alt="no-invoice" />
          <span className="text-[#010101] font-semibold text-base">
            No Invoices until now!
          </span>
          <span className="text-[#010101] font-normal text-sm">
            You have not made any payments on Mudeer.{" "}
          </span>
        </div>
      ) : (
        <Table className="table-fixed border-separate border-spacing-y-3 overflow-x-scroll">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[160px]">Date</TableHead>
              <TableHead className="w-[210px]">Description</TableHead>
              <TableHead className="w-[170px]">Seats</TableHead>
              <TableHead className="w-[170px]">Invoice Total</TableHead>
              <TableHead className="w-[170px]">Status</TableHead>
              <TableHead className="w-[170px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice, index) => (
              <TableRow key={index}>
                <TableCell className="w-[160px] font-medium">
                  {invoice.date}
                </TableCell>
                <TableCell className="w-[210px]">
                  {invoice.description}
                </TableCell>
                <TableCell className="w-[170px]">{invoice.seats}</TableCell>
                <TableCell className="w-[170px]">{invoice.total}</TableCell>
                <TableCell className="w-[170px]">
                  <span
                    className="w-fit rounded-full px-2"
                    style={{
                      backgroundColor: getStatusBgColor(invoice.status),
                    }}
                  >
                    {invoice.status}
                  </span>
                </TableCell>
                <TableCell className="w-[170px] flex items-center gap-2 cursor-pointer">
                  <Download size={20} color="#0037FF" strokeWidth={1.5} />
                  <span className="text-sm text-[#0037FF] font-semibold">
                    Download Invoice
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
