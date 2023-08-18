import "server-only";

import { Amplify } from "aws-amplify";

Amplify.configure({ ...awsExports, ssr: true });

import * as queries from "@/graphql/queries";
import { API } from "aws-amplify";
import { Book, ListBooksQuery } from "@/API";
import { GraphQLQuery, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import awsExports from "@/aws-exports";

export const getBooks = async (): Promise<Book[]> => {
  try {
    const books = await API.graphql<GraphQLQuery<ListBooksQuery>>({
      query: queries.listBooks,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });

    return books.data?.listBooks?.items as Book[];
  } catch (error) {
    console.error("Error occurred while creating the books:", error);
    throw error;
  }
};
