import { format } from "date-fns";

import { ColorColumn } from "./components/columns";
import { ColorsClient } from "./components/client";
import { getColorsByAccountIdSSR } from "@/lib/db/color.server";

const ColorsPage = async ({ params }: { params: { accountId: string } }) => {
  const colors = await getColorsByAccountIdSSR(params.accountId);

  const formattedColors: ColorColumn[] = colors.map((item) => ({
    id: item.id,
    name: item.name || "",
    value: item.value || "",
    createdAt: format(new Date(item.createdAt), "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorsClient data={formattedColors} />
      </div>
    </div>
  );
};

export default ColorsPage;
