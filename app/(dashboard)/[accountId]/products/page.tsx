import { format } from "date-fns";

import { formatter } from "@/lib/utils";
import { ProductColumn } from "./components/columns";
import { ProductClient } from "./components/client";
import { getProductsByAccountIdSSR } from "@/lib/db/product.server";

const ProductsPage = async ({ params }: { params: { accountId: string } }) => {
  const products = await getProductsByAccountIdSSR(params.accountId);

  const formattedProducts: ProductColumn[] = products.map((item) => ({
    id: item.id,
    name: item.name || "",
    isFeatured: item.isFeatured || false,
    isArchived: item.isArchived || false,
    price: formatter.format(item.price || 0),
    category: item.category?.name,
    size: item.size?.name || "",
    color: item.color?.value || "",
    createdAt: format(new Date(item.createdAt), "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductClient data={formattedProducts} />
      </div>
    </div>
  );
};

export default ProductsPage;
