import { withSSRContext } from "aws-amplify";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import * as queries from "@/graphql/queries";

import { Size } from "@/API";
import { headers } from "next/headers";

/**
 * Retrieves a category from the API by its ID.
 *
 * @param sizeId - The ID of the Size to fetch.
 * @returns A Promise resolving to the retrieved size, or null if the size is not found.
 * @throws An error if an error occurs during the API request.
 */
export const getSizeByIdSSR = async (sizeId: string): Promise<Size | null> => {
  try {
    const req = { headers: { cookie: headers().get("cookie") } };
    const SSR = withSSRContext({ req });
    const res = await SSR.API.graphql({
      query: queries.getSize,
      variables: { id: sizeId },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    });

    return res.data?.getSize as Size;
  } catch (error) {
    console.error("Error occurred while fetching the size:", error);
    throw error;
  }
};

export const getSizesByAccountIdSSR = async (accountId: string): Promise<Size[]> => {
  try {
    const req = { headers: { cookie: headers().get("cookie") } };
    const SSR = withSSRContext({ req });
    const res = await SSR.API.graphql({
      query: queries.listSizes,
      variables: { filter: { accountSizesId: { eq: accountId } } },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    });

    const sizes = res.data?.listSizes?.items;
    if (!sizes) {
      return [];
    }

    return sizes as Size[];
  } catch (error) {
    console.error("An error occurred while fetching sizes:", error);
    throw error;
  }
};
