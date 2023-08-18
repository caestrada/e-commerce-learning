import { API, withSSRContext } from "aws-amplify";
import { GraphQLQuery, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import * as queries from "@/graphql/queries";

import { Billboard, GetBillboardQuery, GetCategoryQuery } from "@/API";
import { headers } from "next/headers";

export const getBillboardsByAccountIdSSR = async (accountId: string): Promise<Billboard[]> => {
  try {
    const req = {
      headers: {
        cookie: headers().get("cookie"),
      },
    };

    const SSR = withSSRContext({ req });

    const res = await SSR.API.graphql({
      query: queries.listBillboards,
      variables: { filter: { accountBillboardsId: { eq: accountId } } },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    });

    const billboards = res.data?.listBillboards?.items;
    if (!billboards) {
      return [];
    }

    return billboards as Billboard[];
  } catch (error) {
    console.error("SSR An error occurred while fetching billboards:", error);
    throw error;
  }
};

/**
 * Retrieves a billboard from the API by its ID.
 *
 * @param billboardId - The ID of the billboard to fetch.
 * @returns A Promise resolving to the retrieved billboard, or null if the billboard is not found.
 * @throws An error if an error occurs during the API request.
 */
export const getBillboardByIdSSR = async (billboardId: string): Promise<Billboard | null> => {
  try {
    const req = {
      headers: { cookie: headers().get("cookie") },
    };
    const SSR = withSSRContext({ req });
    const res = await SSR.API.graphql({
      query: queries.getBillboard,
      variables: { id: billboardId },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    });

    return res.data?.getBillboard as Billboard;
  } catch (error) {
    console.error("Error occurred while fetching the billboard:", error);
    throw error;
  }
};

export const getBillboardByIdAPI = async (billboardId: string): Promise<Billboard | null> => {
  try {
    const res = await API.graphql<GraphQLQuery<GetBillboardQuery>>({
      query: queries.getBillboard,
      variables: { id: billboardId },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });

    return res.data?.getBillboard as Billboard;
  } catch (error) {
    console.error("Error occurred while fetching the billboard:", error);
    throw error;
  }
};
