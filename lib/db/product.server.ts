import { withSSRContext } from "aws-amplify";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import * as queries from "@/graphql/queries";

import { Product } from "@/API";
import { headers } from "next/headers";

export const getProductsByAccountIdSSR = async (accountId: string): Promise<Product[]> => {
  try {
    const req = {
      headers: {
        cookie: headers().get("cookie"),
      },
    };

    const SSR = withSSRContext({ req });

    const res = await SSR.API.graphql({
      query: queries.listProducts,
      variables: { filter: { accountProductsId: { eq: accountId } } },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    });

    const products = res.data?.listProducts?.items;
    if (!products) {
      return [];
    }

    return products as Product[];
  } catch (error) {
    console.error("SSR An error occurred while fetching products:", error);
    throw error;
  }
};

/**
 * Retrieves a product from the API by its ID.
 *
 * @param productId - The ID of the product to fetch.
 * @returns A Promise resolving to the retrieved product, or null if the product is not found.
 * @throws An error if an error occurs during the API request.
 */
export const getProductByIdSSR = async (productId: string): Promise<Product | null> => {
  try {
    const req = {
      headers: { cookie: headers().get("cookie") },
    };
    const SSR = withSSRContext({ req });
    const res = await SSR.API.graphql({
      query: queries.getProduct,
      variables: { id: productId },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    });

    return res.data?.getProduct as Product;
  } catch (error) {
    console.error("Error occurred while fetching the product:", error);
    throw error;
  }
};
