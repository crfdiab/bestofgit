import type { Metadata } from "next";
import { ThemeProvider } from "@/components/contexts/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";
import { GoogleTagManager} from '@next/third-parties/google'
import { WebSite, WithContext, Person, WebPage, ItemList, SearchAction } from 'schema-dts';

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
  const websiteSchema: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Best Of Git",
    "url": "https://bestofgit.codes",
    "description": "Best Of Git is a directory of curated GitHub repositories organized by programming languages, frameworks, and use cases.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://bestofgit.codes/?search={search_term}",
      "query-input": "required name=search_term"
    } as SearchAction,
    "about": {
      "@type": "WebPage",
      "name": "About Us",
      "url": "https://bestofgit.codes/about-us",
      "description": "Learn more about Best Of Git, our mission to provide developers with a centralized hub for discovering high-quality GitHub repositories.",
      "@id": "https://bestofgit.codes/about-us"
    } as WebPage,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "WebPage",
          "name": "Repositories List",
          "url": "https://bestofgit.codes/repositories",
          "description": "A curated list of the best GitHub repositories.",
          "@id": "https://bestofgit.codes/repositories"
        },
        {
          "@type": "WebPage",
          "name": "Blog",
          "url": "https://bestofgit.codes/blog",
          "description": "Insights on GitHub, open-source contributions, and popular repositories.",
          "@id": "https://bestofgit.codes/blog"
        },
        {
          "@type": "WebPage",
          "name": "Changelog",
          "url": "https://bestofgit.codes/changelog",
          "description": "Updates and changes to the Best Of Git platform.",
          "@id": "https://bestofgit.codes/changelog"
        }
      ]
    } as ItemList,
    "author": {
      "@type": "Person",
      "name": "Mohamed Diab",
      "@id": "https://bestofgit.codes/#author"
    } as Person,
    "copyrightYear": 2024
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
          }}
        />
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2726475267654049"
          crossOrigin="anonymous"
        />
      </head>
      <GoogleTagManager gtmId="GTM-PXQC2Z4T" />
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
