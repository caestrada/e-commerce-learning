import { withSSRContext } from "aws-amplify";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import * as queries from "@/graphql/queries";

import { Color, Order } from "@/API";
import { headers } from "next/headers";

/**
 * Retrieves a color from the API by its ID.
 *
 * @param colorId - The ID of the Color to fetch.
 * @returns A Promise resolving to the retrieved color, or null if the color is not found.
 * @throws An error if an error occurs during the API request.
 */
export const getColorByIdSSR = async (colorId: string): Promise<Color | null> => {
  try {
    const req = { headers: { cookie: headers().get("cookie") } };
    const SSR = withSSRContext({ req });
    const res = await SSR.API.graphql({
      query: queries.getColor,
      variables: { id: colorId },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    });

    return res.data?.getColor as Color;
  } catch (error) {
    console.error("[SSR] Error occurred while fetching the color:", error);
    throw error;
  }
};

export const getOrdersByAccountIdSSR = async (accountId: string): Promise<Order[]> => {
  try {
    const req = { headers: { cookie: headers().get("cookie") } };
    const SSR = withSSRContext({ req });
    const res = await SSR.API.graphql({
      query: queries.listOrders,
      variables: { filter: { accountOrdersId: { eq: accountId } } },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    });

    const orders = res.data?.listOrders?.items;
    if (!orders) {
      return [];
    }

    return orders as Order[];
  } catch (error) {
    console.error("[SSR] An error occurred while fetching orders:", error);
    throw error;
  }
};
