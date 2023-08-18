import { getUserSSR } from "@/lib/auth/authSSR";
import { redirect } from "next/navigation";

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  const user = await getUserSSR();

  if (user) {
    redirect("/");
  }
  return <div className="flex items-center justify-center h-full">{children}</div>;
}
