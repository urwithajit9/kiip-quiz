import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider"

import "./globals.css";



export const metadata: Metadata = {
  title: "Quiz: KIIP Level-II ",
  description: "A sample app for pratice Korean words and grammer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className="antialiased bg-gray-100">
        <Provider>
        {children}
        </Provider>       
       
       
      </body>
    </html>
  );
}
