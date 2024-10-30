import type { Metadata } from "next";
import { ThemeProvider } from "@/components/contexts/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";
const siteName = "Best of Git"
export const metadata: Metadata = {
  title: "Curating The Best GitHub Repositories | " + siteName,
  metadataBase: new URL("https://bestofgit.codes/"),
  description:
    "Best Of Git Is Directory Listing GitHub Repositories By Language, Frameworks And Purpose. Our Lists Ranked By Must Forked And Reviewed On GitHub.",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased font-sans`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="sm:container mx-auto w-[90vw] h-auto">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
