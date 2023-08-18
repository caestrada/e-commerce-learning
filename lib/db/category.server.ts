import { API, withSSRContext } from "aws-amplify";
import { GraphQLQuery, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import * as queries from "@/graphql/queries";

import { Category, ListCategoriesQuery } from "@/API";
import { headers } from "next/headers";

import { Amplify } from "aws-amplify";
import awsExports from "@/aws-exports";
Amplify.configure({ ...awsExports, ssr: true });

/**
 * Retrieves a category from the API by its ID.
 *
 * @param categoryId - The ID of the category to fetch.
 * @returns A Promise resolving to the retrieved category, or null if the category is not found.
 * @throws An error if an error occurs during the API request.
 */
export const getCategoryByIdSSR = async (categoryId: string): Promise<Category | null> => {
  try {
    const req = { headers: { cookie: headers().get("cookie") } };
    const SSR = withSSRContext({ req });

    const res = await SSR.API.graphql({
      query: queries.getCategory,
      variables: { id: categoryId },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    });

    return res.data?.getCategory as Category;
  } catch (error) {
    console.error("Error occurred while fetching the category:", error);
    throw error;
  }
};

export const getCategoriesByAccountIdSSR = async (accountId: string): Promise<Category[]> => {
  try {
    const req = { headers: { cookie: headers().get("cookie") } };
    const SSR = withSSRContext({ req });

    const res = await SSR.API.graphql({
      query: queries.listCategories,
      variables: { filter: { accountCategoriesId: { eq: accountId } } },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    });

    const categories = res.data?.listCategories?.items;
    if (!categories) {
      return [];
    }

    return categories as Category[];
  } catch (error) {
    console.error("[Category SSR] An error occurred while fetching categories:", error);
    throw error;
  }
};

export const getCategoriesByAccountIdAPI = async (accountId: string): Promise<Category[]> => {
  try {
    const res = await API.graphql<GraphQLQuery<ListCategoriesQuery>>({
      query: queries.listCategories,
      variables: { filter: { accountCategoriesId: { eq: accountId } } },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });

    const categories = res.data?.listCategories?.items;
    if (!categories) {
      return [];
    }

    return categories as Category[];
  } catch (error) {
    console.error("[Category API] An error occurred while fetching categories:", error);
    throw error;
  }
};
