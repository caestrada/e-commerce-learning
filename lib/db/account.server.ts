import "server-only";

import * as queries from "@/graphql/queries";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { Account } from "@/API";
import { withSSRContext } from "aws-amplify";
import { headers } from "next/headers";

/**
 * Retrieves an account from the API by its ID.
 *
 * @param accountId - The ID of the account to fetch.
 * @returns A Promise resolving to the retrieved account, or null if the account is not found.
 * @throws An error if an error occurs during the API request.
 */
export const getAccountByIdSSR = async (accountId: string): Promise<Account | null> => {
  try {
    const req = {
      headers: {
        cookie: headers().get("cookie"),
      },
    };

    const SSR = withSSRContext({ req });
    const res = await SSR.API.graphql({
      query: queries.getAccount,
      variables: { id: accountId },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    });

    return res.data?.getAccount as Account;
  } catch (error) {
    console.error("Error occurred while fetching the account by Id:", error);
    throw error;
  }
};

export const getAccountsSSR = async (): Promise<Account[]> => {
  try {
    const req = {
      headers: {
        cookie: headers().get("cookie"),
      },
    };

    const SSR = withSSRContext({ req });
    const res = await SSR.API.graphql({
      query: queries.listAccounts,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    });
    const accounts = res.data?.listAccounts?.items;
    if (!accounts) {
      return [];
    }

    return accounts as Account[];
  } catch (error) {
    console.error("[ERROR] An error occurred getting accounts: ", error);
    return [];
  }
};

export const getAccountByUserIdAndAccountIdSSR = async (
  userId: string,
  accountId: string
): Promise<Account | null> => {
  try {
    const req: any = {
      headers: {
        cookie: headers().get("cookie"),
      },
    };
    const SSR = withSSRContext({ req });
    const res = await SSR.API.graphql({
      query: queries.listAccounts,
      variables: { filter: { and: { id: { eq: accountId }, userId: { eq: userId } } } },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    });
    const accounts = res.data?.listAccounts?.items;

    if (!accounts || accounts.length === 0) {
      return null;
    }

    const account = accounts[0];
    return account as Account;
  } catch (error) {
    console.error("Error SSR occurred while fetching the account by id and userId:", error);
    throw error;
  }
};
