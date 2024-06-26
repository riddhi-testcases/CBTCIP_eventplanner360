import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'

const robotoMono = Roboto_Mono({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600'],
  variable: '--font-robotoMono',
  });

export const metadata: Metadata = {
  title: "EventPlanner360",
  description: "Organize and oversee diverse events ranging from conferences & meetings to weddings & parties with us.",
  icons:{
    icon:'/assets/images/logo2.svg'
  } };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

    
    <html lang="en">
      <body className={robotoMono.variable}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
