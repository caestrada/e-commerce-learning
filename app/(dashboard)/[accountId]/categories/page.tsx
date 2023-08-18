import { format } from "date-fns";

import { CategoryColumn } from "./[categoryId]/components/columns";
import { CategoryClient } from "./[categoryId]/components/client";
import { getCategoriesByAccountIdSSR } from "@/lib/db/category.server";

const CategoriesPage = async ({ params }: { params: { accountId: string } }) => {
  const categories = await getCategoriesByAccountIdSSR(params.accountId);

  const formattedCategories: CategoryColumn[] = categories.map((item) => ({
    id: item.id,
    name: item.name || "",
    billboardLabel: item.billboard?.label || "",
    createdAt: format(new Date(item.createdAt), "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryClient data={formattedCategories} />
      </div>
    </div>
  );
};

export default CategoriesPage;
