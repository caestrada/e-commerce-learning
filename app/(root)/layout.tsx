import { redirect } from "next/navigation";

import { getUserSSR } from "@/lib/auth/authSSR";
import { getAccountsSSR } from "@/lib/db/account.server";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const user = await getUserSSR();
  if (!user) {
    redirect("/signin");
  }

  const accounts = await getAccountsSSR();
  const account = accounts[0];

  if (account) {
    redirect(`/${account.id}`);
  }

  return <>{children}</>;
}
