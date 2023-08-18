import { format } from "date-fns";

import { SizeColumn } from "./components/columns";
import { SizesClient } from "./components/client";
import { getSizesByAccountIdSSR } from "@/lib/db/size.server";

const SizesPage = async ({ params }: { params: { accountId: string } }) => {
  const sizes = await getSizesByAccountIdSSR(params.accountId);

  const formattedSizes: SizeColumn[] = sizes.map((item) => ({
    id: item.id,
    name: item.name || "",
    value: item.value || "",
    createdAt: format(new Date(item.createdAt), "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizesClient data={formattedSizes} />
      </div>
    </div>
  );
};

export default SizesPage;
