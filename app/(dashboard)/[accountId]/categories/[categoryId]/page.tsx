import { CategoryForm } from "./components/category-form";
import { getBillboardsByAccountIdSSR } from "@/lib/db/billboard.server";
import { getCategoryByIdSSR } from "@/lib/db/category.server";

const CategoryPage = async ({ params }: { params: { categoryId: string; accountId: string } }) => {
  const category = await getCategoryByIdSSR(params.categoryId);
  const billboards = await getBillboardsByAccountIdSSR(params.accountId);

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryForm billboards={billboards} initialData={category} />
      </div>
    </div>
  );
};

export default CategoryPage;
