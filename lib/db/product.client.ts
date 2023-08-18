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
  Product,
  UpdateProductMutation,
  DeleteProductMutation,
  DeleteProductInput,
  Image,
  CreateProductMutation,
} from "@/API";

/**
 * Creates a new billboards with the specified name and user ID.
 *
 * @param label - The label of the billboard to create.
 * @param imageUrl - The image url of the billboard to create.
 * @param accountId - The ID of the account associated with the billboard.
 * @returns A Promise resolving to the newly created billboard.
 * @throws An error if an error occurs during the billboard creation process.
 */
export const createProduct = async (
  name: string,
  price: number,
  categoryId: string,
  colorId: string,
  sizeId: string,
  isFeatured: boolean,
  isArchived: boolean,
  accountId: string
): Promise<Product> => {
  try {
    const product = await API.graphql<GraphQLQuery<CreateProductMutation>>({
      query: mutations.createProduct,
      variables: {
        input: {
          name,
          price,
          accountProductsId: accountId,
          categoryProductsId: categoryId,
          colorProductsId: colorId,
          sizeProductsId: sizeId,
          isFeatured,
          isArchived,
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      },
    });

    return product.data?.createProduct as Product;
  } catch (error) {
    console.error("Error occurred while creating the product:", error);
    throw error;
  }
};

export const updateProduct = async (
  name: string,
  price: number,
  categoryId: string,
  colorId: string,
  sizeId: string,
  isFeatured: boolean,
  isArchived: boolean,
  id: string
): Promise<Product> => {
  try {
    const product = await API.graphql<GraphQLQuery<UpdateProductMutation>>({
      query: mutations.updateProduct,
      variables: {
        input: {
          id,
          name,
          price,
          categoryProductsId: categoryId,
          colorProductsId: colorId,
          sizeProductsId: sizeId,
          isFeatured,
          isArchived,
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      },
    });

    return product.data?.updateProduct as Product;
  } catch (error) {
    console.error("Error occurred while updating the product:", error);
    throw error;
  }
};

export const deleteProduct = async (id: string): Promise<Product> => {
  const productDetails: DeleteProductInput = {
    id,
  };
  try {
    const product = await API.graphql<GraphQLQuery<DeleteProductMutation>>({
      query: mutations.deleteProduct,
      variables: {
        input: productDetails,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      },
    });

    return product.data?.deleteProduct as Product;
  } catch (error) {
    console.error("Error occurred while updating the product:", error);
    throw error;
  }
};
