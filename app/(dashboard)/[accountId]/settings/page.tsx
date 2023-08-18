import { redirect } from "next/navigation";

import { SettingsForm } from "@/components/settings-form";
import { getAccountByIdSSR } from "@/lib/db/account.server";
import { getUserSSR } from "@/lib/auth/authSSR";

interface SettingsPageProps {
  params: {
    accountId: string;
  };
}

const SettingsPage: React.FC<SettingsPageProps> = async ({ params: { accountId } }) => {
  const user = await getUserSSR();
  if (!user) {
    redirect("/sign-in");
  }

  const account = await getAccountByIdSSR(accountId);
  if (!account) {
    redirect("/");
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SettingsForm account={account} />
      </div>
    </div>
  );
};

export default SettingsPage;
