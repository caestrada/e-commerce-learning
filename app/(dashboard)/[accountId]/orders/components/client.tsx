"use client";

import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { OrderColumn, columns } from "./columns";

interface OrdersClientProps {
  data: OrderColumn[];
}

export const ColorsClient: React.FC<OrdersClientProps> = ({ data }) => {
  return (
    <>
      <Heading title={`Orders (${data.length})`} description="Manage orders for your account" />
      <Separator />

      <DataTable searchKey="products" columns={columns} data={data} />
    </>
  );
};
