import { format } from "date-fns";

import { BillboardClient } from "@/components/billboard-client";
import { BillboardColumn } from "@/components/billboard-client/columns";
import { getBillboardsByAccountIdSSR } from "@/lib/db/billboard.server";

const Billboards = async ({ params }: { params: { accountId: string } }) => {
  const billboards = await getBillboardsByAccountIdSSR(params.accountId);

  const formattedBillboards: BillboardColumn[] = billboards.map((item) => ({
    id: item.id,
    label: item.label || "",
    createdAt: format(new Date(item.createdAt), "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient data={formattedBillboards} />
      </div>
    </div>
  );
};

export default Billboards;
