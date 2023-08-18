// Global imports
import { Inter } from "next/font/google";
import { ToastProvider } from "@/providers/toast-provider";
import { Amplify } from "aws-amplify";

// Local imports
import { ModalProvider } from "@/providers/modal-provider";
import awsExports from "@/aws-exports";

import "./globals.css";

Amplify.configure({ ...awsExports, ssr: true });

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Maniak Wod Admin",
  description: "Lets get Maniak!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider />
        <ModalProvider />
        {children}
      </body>
    </html>
  );
}
