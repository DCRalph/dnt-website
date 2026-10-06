import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionProvider } from "@/components/motion/motion-provider";
import { company } from "@/lib/content";
import "./globals.css";

const dm = DM_Sans({ subsets: ["latin"], variable: "--font-dm" });

/* Headlines only. */
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  title: {
    default: `${company.name}. ${company.tagline}`,
    template: `%s | ${company.name}`,
  },
  description: company.blurb,
  openGraph: { siteName: company.name, locale: "en_NZ", type: "website" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-NZ"
      className={`${dm.variable} ${bricolage.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only bg-accent px-4 py-2 text-white focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50"
        >
          Skip to content
        </a>
        <MotionProvider>
          <SiteHeader />
          {/* Top padding clears the floating header. */}
          <main id="main" className="flex-1 pt-32 md:pt-28">
            {children}
          </main>
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
