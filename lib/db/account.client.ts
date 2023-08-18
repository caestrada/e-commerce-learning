import { API } from "aws-amplify";
import { GraphQLQuery, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";

import {
  Account,
  ListAccountsQuery,
  CreateAccountMutation,
  UpdateAccountMutation,
  DeleteAccountMutation,
  DeleteAccountInput,
} from "@/API";

// Accounts ----------------------------------------------------------------------------------------

/**
 * Creates a new account with the specified name and user ID.
 *
 * @param name - The name of the account to create.
 * @param userId - The ID of the user associated with the account.
 * @returns A Promise resolving to the newly created account.
 * @throws An error if an error occurs during the account creation process.
 */
export const createAccount = async (name: string, userId: string): Promise<Account> => {
  try {
    const account = await API.graphql<GraphQLQuery<CreateAccountMutation>>({
      query: mutations.createAccount,
      variables: {
        input: {
          name,
          userId,
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      },
    });

    return account.data?.createAccount as Account;
  } catch (error) {
    console.error("Error occurred while creating the account:", error);
    throw error;
  }
};

export const updateAccount = async (id: string, userId: string, name: string): Promise<Account> => {
  try {
    const account = await API.graphql<GraphQLQuery<UpdateAccountMutation>>({
      query: mutations.updateAccount,
      variables: {
        input: {
          id,
          name,
          userId,
        },
        // authMode: GRAPHQL_AUTH_MODE.API_KEY,
      },
    });

    return account.data?.updateAccount as Account;
  } catch (error) {
    console.error("Error occurred while updating the account:", error);
    throw error;
  }
};

export const deleteAccount = async (id: string): Promise<Account> => {
  const accountDetails: DeleteAccountInput = {
    id,
  };
  try {
    const account = await API.graphql<GraphQLQuery<DeleteAccountMutation>>({
      query: mutations.deleteAccount,
      variables: {
        input: accountDetails,
        authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
      },
    });

    return account.data?.deleteAccount as Account;
  } catch (error) {
    console.error("Error occurred while updating the account:", error);
    throw error;
  }
};

/**
 * Retrieves an account by the specified user ID and account ID.
 *
 * @param userId - The ID of the user.
 * @param accountId - The ID of the account.
 * @returns The account matching the provided IDs, or null if no account is found.
 */
export const getAccountByUserIdAndAccountId = async (
  userId: string,
  accountId: string
): Promise<Account | null> => {
  try {
    const res = await API.graphql<GraphQLQuery<ListAccountsQuery>>({
      query: queries.listAccounts,
      variables: { filter: { and: { id: { eq: accountId }, userId: { eq: userId } } } },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
    const accounts = res.data?.listAccounts?.items;

    if (!accounts || accounts.length === 0) {
      return null;
    }

    const account = accounts[0];
    return account as Account;
  } catch (error) {
    console.error("Error occurred while fetching the account by id and userId:", error);
    throw error;
  }
};
