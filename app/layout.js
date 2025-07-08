import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AIspire",
  description: "Empowering careers through personalized, AI-driven guidance.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen px-12">{children}</main>
            <Toaster richColors />

           <footer className="bg-muted/50 py-12">
  <div className="container mx-auto px-6 text-center">
    <h1 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-white tracking-wide">
      AIspire
    </h1>
    <p className="mt-1 text-xs text-gray-300">
      Where innovation meets ambition.
    </p>
    <p className="mt-3 text-[11px] text-gray-500">
      &copy; {new Date().getFullYear()} AIspire. All rights reserved.
    </p>
  </div>
</footer>




          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
