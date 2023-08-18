import { API } from "aws-amplify";
import { GraphQLQuery, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";

import {
  CreateSizeMutation,
  DeleteSizeInput,
  DeleteSizeMutation,
  GetSizeQuery,
  ListSizesQuery,
  Size,
  UpdateSizeMutation,
} from "@/API";

/**
 * Creates a new sizes with the specified name and user ID.
 *
 * @param name - The name of the size to create.
 * @param value - The value of the size to create.
 * @param accountId - The ID of the account associated with the size.
 * @returns A Promise resolving to the newly created size.
 * @throws An error if an error occurs during the size creation process.
 */
export const createSize = async (name: string, value: string, accountId: string): Promise<Size> => {
  try {
    const size = await API.graphql<GraphQLQuery<CreateSizeMutation>>({
      query: mutations.createSize,
      variables: {
        input: {
          name,
          value,
          accountSizesId: accountId,
        },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      },
    });

    return size.data?.createSize as Size;
  } catch (error) {
    console.error("Error occurred while creating the size:", error);
    throw error;
  }
};

/**
 * Retrieves a category from the API by its ID.
 *
 * @param sizeId - The ID of the Size to fetch.
 * @returns A Promise resolving to the retrieved size, or null if the size is not found.
 * @throws An error if an error occurs during the API request.
 */
export const getSizeById = async (sizeId: string): Promise<Size | null> => {
  try {
    const res = await API.graphql<GraphQLQuery<GetSizeQuery>>({
      query: queries.getSize,
      variables: { id: sizeId },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });

    return res.data?.getSize as Size;
  } catch (error) {
    console.error("Error occurred while fetching the size:", error);
    throw error;
  }
};

export const getSizesByAccountId = async (accountId: string): Promise<Size[]> => {
  try {
    const res = await API.graphql<GraphQLQuery<ListSizesQuery>>({
      query: queries.listSizes,
      variables: { filter: { accountSizesId: { eq: accountId } } },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
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

export const updateSize = async (name: string, value: string, id: string): Promise<Size> => {
  try {
    const size = await API.graphql<GraphQLQuery<UpdateSizeMutation>>({
      query: mutations.updateSize,
      variables: {
        input: {
          id,
          name,
          value,
        },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      },
    });

    return size.data?.updateSize as Size;
  } catch (error) {
    console.error("Error occurred while updating the size:", error);
    throw error;
  }
};

export const deleteSize = async (id: string): Promise<Size> => {
  const sizeDetails: DeleteSizeInput = {
    id,
  };
  try {
    const size = await API.graphql<GraphQLQuery<DeleteSizeMutation>>({
      query: mutations.deleteSize,
      variables: {
        input: sizeDetails,
        authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
      },
    });

    return size.data?.deleteSize as Size;
  } catch (error) {
    console.error("Error occurred while updating the size:", error);
    throw error;
  }
};
