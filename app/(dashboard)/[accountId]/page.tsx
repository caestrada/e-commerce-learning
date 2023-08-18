import { getAccountByIdSSR } from "@/lib/db/account.server";

interface DashboardPageProps {
  params: { accountId: string };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params: { accountId } }) => {
  const account = await getAccountByIdSSR(accountId);
  return <div>Active Account {account?.name}</div>;
};

export default DashboardPage;
