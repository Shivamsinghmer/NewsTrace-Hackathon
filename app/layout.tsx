import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Button from "@/components/Button";
import PillNav from "@/components/PillNav";
import { dark } from '@clerk/themes';
import Link from "next/link";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"], 
  weight: ["300", "400", "600", "700"],
});

const geistMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/reporter_7417853.png",
  },

  title: "NewsTrace",
  description: "Get the latest news from your favorite journalists",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        elements: {
          formButtonPrimary:
            'bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg',
          card: 'bg-transparent shadow-none',
          headerTitle: 'hidden',
          headerSubtitle: 'hidden',
          socialButtonsBlockButton:
            'border-slate-300 text-slate-700 hover:bg-slate-50',
          formFieldInput:
            'rounded-lg border-slate-300 focus:border-purple-500 focus:ring-purple-500',
          footerActionLink:
            'text-purple-400 hover:text-purple-300 font-medium',
          dividerLine: 'bg-slate-300',
          dividerText: 'text-slate-400',
        },
      }}
    >
      <html lang="en" className="dark">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <header className="flex justify-end items-center fixed top-2 left-0 right-0 p-4 gap-4 h-16 z-50">
            <div className="fixed top-0 left-0 right-0 z-20 flex justify-center pt-6">
              <PillNav
                logo="reporter_7417853.png"
                logoAlt="Company Logo"
                items={[
                  { label: "Home", href: "/" },
                  { label: "About", href: "/about" },
                  { label: "Features", href: "/features" },
                  { label: "Contact", href: "/contact" },
                ]}
                activeHref="#hero"
                className="custom-nav backdrop-blur-lg bg-black/20 border border-white/10 rounded-full shadow-2xl"
                ease="power2.easeOut"
                baseColor="#000000"
                pillColor="#ffffff"
                hoveredPillTextColor="#ffffff"
                pillTextColor="#000000"
              />
            </div>
            <SignedOut>
              <SignInButton>
                <Button text="SignIn" />
              </SignInButton>
              <SignUpButton>
                <Button text="SignUp" />
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Link href="/search">
                <Button text="Search Outlet" />
              </Link>
              <UserButton />
            </SignedIn>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
