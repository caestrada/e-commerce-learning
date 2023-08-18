"use client";

import { useAccountModal } from "@/hooks/use-store-modal";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Check, ChevronsUpDown, PlusCircle, Store } from "lucide-react";

import { Account } from "@/API";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command";

type PopoverTriggerProps = React.ComponentPropsWithRef<typeof PopoverTrigger>;

interface AccountSwitcherProps extends PopoverTriggerProps {
  items: Account[];
}

export default function AccountSwitcher({ className, items = [] }: AccountSwitcherProps) {
  const accountModal = useAccountModal();
  const params = useParams();
  const router = useRouter();

  const formattedItems = items.map((item) => ({
    label: item.name,
    value: item.id,
  }));

  const currentAccount = formattedItems.find((item) => item.value === params.accountId);

  const [open, setOpen] = useState(false);

  const onAccountSelect = (account: { label: string; value: string }) => {
    setOpen(false);
    router.push(`/${account.value}`);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          role="combobox"
          aria-expanded={open}
          aria-label="Select an Account"
          className={cn("w-[200px] justify-between", className)}
        >
          <Store className="mr-2 h-4 w-4" />
          {currentAccount?.label || "Select an Account"}
          <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search Accounts..." />
            <CommandEmpty>No store found.</CommandEmpty>
            <CommandGroup heading="Accounts">
              {formattedItems.map((account) => (
                <CommandItem
                  key={account.value}
                  onSelect={() => onAccountSelect(account)}
                  className="text-sm"
                >
                  <Store className="mr-2 h-4 w-4" />
                  {account.label}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      currentAccount?.value == account.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          <CommandSeparator />
          <CommandList>
            <CommandGroup>
              <CommandItem
                onSelect={() => {
                  setOpen(false);
                  accountModal.onOpen();
                }}
              >
                <PlusCircle className="mr-2 h-5 w-5" />
                Create Account
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
