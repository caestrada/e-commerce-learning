import { API } from "aws-amplify";
import { GraphQLQuery, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";

import {
  GetBillboardQuery,
  CreateBillboardMutation,
  UpdateBillboardMutation,
  Billboard,
  DeleteBillboardInput,
  DeleteBillboardMutation,
} from "@/API";

/**
 * Retrieves a billboard from the API by its ID.
 *
 * @param billboardId - The ID of the billboard to fetch.
 * @returns A Promise resolving to the retrieved billboard, or null if the billboard is not found.
 * @throws An error if an error occurs during the API request.
 */
// TODO: Remove if not used client side.
export const getBillboardById = async (billboardId: string): Promise<Billboard | null> => {
  try {
    const res = await API.graphql<GraphQLQuery<GetBillboardQuery>>({
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

/**
 * Creates a new billboards with the specified name and user ID.
 *
 * @param label - The label of the billboard to create.
 * @param imageUrl - The image url of the billboard to create.
 * @param accountId - The ID of the account associated with the billboard.
 * @returns A Promise resolving to the newly created billboard.
 * @throws An error if an error occurs during the billboard creation process.
 */
export const createBillboard = async (
  label: string,
  imageUrl: string,
  accountId: string
): Promise<Billboard> => {
  try {
    const billboard = await API.graphql<GraphQLQuery<CreateBillboardMutation>>({
      query: mutations.createBillboard,
      variables: {
        input: {
          label,
          imageUrl,
          accountBillboardsId: accountId,
        },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      },
    });

    return billboard.data?.createBillboard as Billboard;
  } catch (error) {
    console.error("Error occurred while creating the billboard:", error);
    throw error;
  }
};

export const updateBillboard = async (
  label: string,
  imageUrl: string,
  id: string
): Promise<Billboard> => {
  try {
    const billboard = await API.graphql<GraphQLQuery<UpdateBillboardMutation>>({
      query: mutations.updateBillboard,
      variables: {
        input: {
          id,
          label,
          imageUrl,
        },
        // authMode: GRAPHQL_AUTH_MODE.API_KEY,
      },
    });

    return billboard.data?.updateBillboard as Billboard;
  } catch (error) {
    console.error("Error occurred while updating the billboard:", error);
    throw error;
  }
};

export const deleteBillboard = async (id: string): Promise<Billboard> => {
  const billboardDetails: DeleteBillboardInput = {
    id,
  };
  try {
    const billboard = await API.graphql<GraphQLQuery<DeleteBillboardMutation>>({
      query: mutations.deleteBillboard,
      variables: {
        input: billboardDetails,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      },
    });

    return billboard.data?.deleteBillboard as Billboard;
  } catch (error) {
    console.error("Error occurred while updating the billboard:", error);
    throw error;
  }
};
