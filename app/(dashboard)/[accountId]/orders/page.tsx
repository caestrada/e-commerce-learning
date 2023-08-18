import { format } from "date-fns";

import { OrderColumn } from "./components/columns";
import { ColorsClient } from "./components/client";
import { getOrdersByAccountIdSSR } from "@/lib/db/order.server";

import { formatter } from "@/lib/utils";

const OrdersPage = async ({ params }: { params: { accountId: string } }) => {
  const orders = await getOrdersByAccountIdSSR(params.accountId);

  const formattedOrders: OrderColumn[] = orders.map((item) => ({
    id: item.id,
    phone: item.phone || "",
    address: item.address || "",
    products: item.orderItems?.items?.map((orderItem) => orderItem?.product?.name).join(", ") || "",
    totalPrice: formatter.format(
      item.orderItems?.items?.reduce((total, item) => {
        return total + Number(item?.product?.price ?? 0);
      }, 0) ?? 0
    ),
    isPaid: item.isPaid || false,
    createdAt: format(new Date(item.createdAt), "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorsClient data={formattedOrders} />
      </div>
    </div>
  );
};

export default OrdersPage;
