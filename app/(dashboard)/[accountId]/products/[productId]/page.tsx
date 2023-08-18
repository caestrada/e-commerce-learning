import { getProductByIdSSR } from "@/lib/db/product.server";
import { ProductForm } from "./components/product-form";
import { getCategoriesByAccountIdSSR } from "@/lib/db/category.server";
import { getSizesByAccountIdSSR } from "@/lib/db/size.server";
import { getColorsByAccountIdSSR } from "@/lib/db/color.server";

const ProductPage = async ({ params }: { params: { productId: string; accountId: string } }) => {
  const product = await getProductByIdSSR(params.productId);
  const categories = await getCategoriesByAccountIdSSR(params.accountId);
  const sizes = await getSizesByAccountIdSSR(params.accountId);
  const colors = await getColorsByAccountIdSSR(params.accountId);
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductForm categories={categories} colors={colors} sizes={sizes} initialData={product} />
      </div>
    </div>
  );
};

export default ProductPage;
