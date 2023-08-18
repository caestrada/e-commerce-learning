import { MainNav } from "@/components/main-nav";
import { redirect } from "next/navigation";

import AccountSwitcher from "@/components/account-switcher";
import { getUserSSR } from "@/lib/auth/authSSR";
import { getAccountsSSR } from "@/lib/db/account.server";

const Navbar = async () => {
  const user = await getUserSSR();
  if (!user) {
    redirect("/sign-in");
  }

  const accounts = await getAccountsSSR();

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <AccountSwitcher items={accounts} />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">{/* <UserAvatar /> */}</div>
      </div>
    </div>
  );
};

export default Navbar;
