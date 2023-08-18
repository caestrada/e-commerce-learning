import { withSSRContext } from "aws-amplify";
import { headers } from "next/headers";
import { CognitoUser } from ".";

// TODO: Update method to get user from Cache Header. If no user then query for user.
export const getUserSSR = async (): Promise<CognitoUser | null> => {
  try {
    const req: any = {
      headers: {
        cookie: headers().get("cookie"),
      },
    };

    const { Auth } = withSSRContext({ req });
    const user = await Auth.currentAuthenticatedUser();
    return user;
  } catch (error) {
    console.log("error getting user SSR: ", error);
    return null;
  }
};
