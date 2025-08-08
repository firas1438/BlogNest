import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "./providers";


const geist = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"]
});

export const metadata: Metadata = {
  title: "BlogNest",
  description:
    "A platform for writing, publishing, and reading blog posts and articles across a variety of topics."
};


export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${geist.className} `}>
        <Providers>
          <ThemeProvider attribute="class">
            <SiteHeader />
              {children}
              <Toaster />
            <SiteFooter />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}