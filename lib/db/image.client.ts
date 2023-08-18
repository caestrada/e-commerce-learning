import { API } from "aws-amplify";
import { GraphQLQuery, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import * as mutations from "@/graphql/mutations";

import { Image, CreateImageMutation } from "@/API";

export const createImages = async (
  images: { url: string }[],
  productId: string
): Promise<Image[]> => {
  try {
    const newImages: Image[] = [];
    images.forEach(async (image) => {
      const newImage = await API.graphql<GraphQLQuery<CreateImageMutation>>({
        query: mutations.createImage,
        variables: {
          input: {
            url: image.url,
            productImagesId: productId,
          },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        },
      });
      newImages.push(newImage.data?.createImage as Image);
    });

    return newImages;
  } catch (error) {
    console.error("Error occurred while creating the images:", error);
    throw error;
  }
};
