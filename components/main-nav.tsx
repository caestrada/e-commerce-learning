"use client";

import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import Link from "next/link";

export const MainNav = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
  const pathName = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/${params.accountId}`,
      label: "Dashboard",
      active: pathName === `/${params.accountId}`,
    },
    {
      href: `/${params.accountId}/billboards`,
      label: "Billboards",
      active: pathName === `/${params.accountId}/billboards`,
    },
    {
      href: `/${params.accountId}/categories`,
      label: "Categories",
      active: pathName === `/${params.accountId}/categories`,
    },
    {
      href: `/${params.accountId}/sizes`,
      label: "Sizes",
      active: pathName === `/${params.accountId}/sizes`,
    },
    {
      href: `/${params.accountId}/colors`,
      label: "Colors",
      active: pathName === `/${params.accountId}/colors`,
    },
    {
      href: `/${params.accountId}/products`,
      label: "Products",
      active: pathName === `/${params.accountId}/products`,
    },
    {
      href: `/${params.accountId}/orders`,
      label: "Orders",
      active: pathName === `/${params.accountId}/orders`,
    },
    {
      href: `/${params.accountId}/settings`,
      label: "Settings",
      active: pathName === `/${params.accountId}/settings`,
    },
  ];
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active ? "text-black dark:text-white" : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};
