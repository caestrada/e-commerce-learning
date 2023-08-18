import { Auth } from "aws-amplify";

export interface CognitoUser {
  username: string;
  attributes: {
    sub: string;
    email_verified: boolean;
    name: string;
    email: string;
  };
}

export const getUser = async (): Promise<CognitoUser | null> => {
  try {
    const session = await Auth.currentAuthenticatedUser();
    return session;
  } catch (error) {
    console.log("error getting user: ", error);
    return null;
  }
};

export const signInWithEmailAndPassword = async (username: string, password: string) => {
  try {
    await Auth.signIn(username, password);
  } catch (error) {
    throw error;
  }
};

export const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    if (name.length < 1) {
      throw new Error("Name is required");
    }

    const username = email;
    await Auth.signUp({
      username,
      password,
      attributes: {
        email,
        name,
      },
      autoSignIn: {
        enabled: true, // enables auto sign in after user is confirmed
      },
    });
  } catch (error) {
    throw error;
  }
};

export const verifyCode = async (email: string, code: string) => {
  await Auth.confirmSignUp(email, code);
};

export const signOut = async () => {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log("error signing out: ", error);
    throw error;
  }
};
