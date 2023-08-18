import { redirect } from "next/navigation";
import Navbar from "@/components/navbar";

import { getUserSSR } from "@/lib/auth/authSSR";
import { getAccountByUserIdAndAccountIdSSR } from "@/lib/db/account.server";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { accountId: string };
}) {
  const user = await getUserSSR();
  if (!user) {
    redirect("/sign-in");
  }

  const userId = user?.attributes.sub;
  const account = await getAccountByUserIdAndAccountIdSSR(userId, params.accountId);
  if (!account) {
    redirect("/");
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
