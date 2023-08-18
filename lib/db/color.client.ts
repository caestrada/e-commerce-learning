import { API } from "aws-amplify";
import { GraphQLQuery, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";

import {
  Color,
  CreateColorMutation,
  DeleteColorInput,
  DeleteColorMutation,
  GetColorQuery,
  ListColorsQuery,
  UpdateColorMutation,
} from "@/API";

/**
 * Creates a new colors with the specified name and user ID.
 *
 * @param name - The name of the color to create.
 * @param value - The value of the color to create.
 * @param accountId - The ID of the account associated with the color.
 * @returns A Promise resolving to the newly created color.
 * @throws An error if an error occurs during the color creation process.
 */
export const createColor = async (
  name: string,
  value: string,
  accountId: string
): Promise<Color> => {
  try {
    const color = await API.graphql<GraphQLQuery<CreateColorMutation>>({
      query: mutations.createColor,
      variables: {
        input: {
          name,
          value,
          accountColorsId: accountId,
        },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      },
    });

    return color.data?.createColor as Color;
  } catch (error) {
    console.error("Error occurred while creating the color:", error);
    throw error;
  }
};

/**
 * Retrieves a color from the API by its ID.
 *
 * @param colorId - The ID of the Color to fetch.
 * @returns A Promise resolving to the retrieved color, or null if the color is not found.
 * @throws An error if an error occurs during the API request.
 */
export const getColorById = async (colorId: string): Promise<Color | null> => {
  try {
    const res = await API.graphql<GraphQLQuery<GetColorQuery>>({
      query: queries.getColor,
      variables: { id: colorId },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });

    return res.data?.getColor as Color;
  } catch (error) {
    console.error("Error occurred while fetching the color:", error);
    throw error;
  }
};

export const getColorsByAccountId = async (accountId: string): Promise<Color[]> => {
  try {
    const res = await API.graphql<GraphQLQuery<ListColorsQuery>>({
      query: queries.listColors,
      variables: { filter: { accountColorsId: { eq: accountId } } },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });

    const colors = res.data?.listColors?.items;
    if (!colors) {
      return [];
    }

    return colors as Color[];
  } catch (error) {
    console.error("An error occurred while fetching colors:", error);
    throw error;
  }
};

export const updateColor = async (name: string, value: string, id: string): Promise<Color> => {
  try {
    const color = await API.graphql<GraphQLQuery<UpdateColorMutation>>({
      query: mutations.updateColor,
      variables: {
        input: {
          id,
          name,
          value,
        },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      },
    });

    return color.data?.updateColor as Color;
  } catch (error) {
    console.error("Error occurred while updating the color:", error);
    throw error;
  }
};

export const deleteColor = async (id: string): Promise<Color> => {
  const colorDetails: DeleteColorInput = {
    id,
  };
  try {
    const color = await API.graphql<GraphQLQuery<DeleteColorMutation>>({
      query: mutations.deleteColor,
      variables: {
        input: colorDetails,
        authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
      },
    });

    return color.data?.deleteColor as Color;
  } catch (error) {
    console.error("Error occurred while updating the color:", error);
    throw error;
  }
};
