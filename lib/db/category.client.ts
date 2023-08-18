import { API } from "aws-amplify";
import { GraphQLQuery, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";

import {
  Category,
  CreateCategoryMutation,
  DeleteCategoryInput,
  DeleteCategoryMutation,
  GetCategoryQuery,
  ListCategoriesQuery,
  UpdateCategoryMutation,
} from "@/API";

/**
 * Retrieves a category from the API by its ID.
 *
 * @param categoryId - The ID of the category to fetch.
 * @returns A Promise resolving to the retrieved category, or null if the category is not found.
 * @throws An error if an error occurs during the API request.
 */
export const getCategoryById = async (categoryId: string): Promise<Category | null> => {
  try {
    const res = await API.graphql<GraphQLQuery<GetCategoryQuery>>({
      query: queries.getCategory,
      variables: { id: categoryId },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });

    return res.data?.getCategory as Category;
  } catch (error) {
    console.error("Error occurred while fetching the category:", error);
    throw error;
  }
};

export const getCategoriesByAccountId = async (accountId: string): Promise<Category[]> => {
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
    console.error("An error occurred while fetching categories:", error);
    throw error;
  }
};

/**
 * Creates a new billboards with the specified name and user ID.
 *
 * @param name - The name of the category to create.
 * @param billboardId - The image url of the billboard to create.
 * @param accountId - The ID of the account associated with the billboard.
 * @returns A Promise resolving to the newly created billboard.
 * @throws An error if an error occurs during the billboard creation process.
 */
export const createCategory = async (
  name: string,
  billboardId: string,
  accountId: string
): Promise<Category> => {
  try {
    const category = await API.graphql<GraphQLQuery<CreateCategoryMutation>>({
      query: mutations.createCategory,
      variables: {
        input: {
          name,
          billboardCategoriesId: billboardId,
          accountCategoriesId: accountId,
        },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      },
    });

    return category.data?.createCategory as Category;
  } catch (error) {
    console.error("Error occurred while creating the category:", error);
    throw error;
  }
};

export const updateCategory = async (
  name: string,
  billboardCategoriesId: string,
  id: string
): Promise<Category> => {
  try {
    const category = await API.graphql<GraphQLQuery<UpdateCategoryMutation>>({
      query: mutations.updateCategory,
      variables: {
        input: {
          id,
          name,
          billboardCategoriesId,
        },
        // authMode: GRAPHQL_AUTH_MODE.API_KEY,
      },
    });

    return category.data?.updateCategory as Category;
  } catch (error) {
    console.error("Error occurred while updating the category:", error);
    throw error;
  }
};

export const deleteCategory = async (id: string): Promise<Category> => {
  const categoryDetails: DeleteCategoryInput = {
    id,
  };
  try {
    const category = await API.graphql<GraphQLQuery<DeleteCategoryMutation>>({
      query: mutations.deleteCategory,
      variables: {
        input: categoryDetails,
        authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
      },
    });

    return category.data?.deleteCategory as Category;
  } catch (error) {
    console.error("Error occurred while updating the category:", error);
    throw error;
  }
};
