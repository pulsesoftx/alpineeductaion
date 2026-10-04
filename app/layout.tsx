import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LanguageProvider } from "@/components/providers/language-provider";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { FloatingActions } from "@/components/ui/floating-actions";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alpineeducation.com.np"),
  title: {
    default: "Alpine Educational Consultancy | Study Abroad Experts in Nepal",
    template: "%s | Alpine Educational Consultancy",
  },
  description:
    "Alpine Educational Consultancy helps students in Nepal apply to top international universities, secure scholarships, and navigate visa support with expert guidance.",
  keywords: [
    "study abroad consultancy in Nepal",
    "education consultancy",
    "study abroad experts",
    "university admissions",
    "scholarships",
    "visa guidance",
    "international education advisory",
  ],
  applicationName: "Alpine Educational Consultancy",
  authors: [{ name: "Alpine Educational Consultancy Pvt. Ltd" }],
  creator: "Alpine Educational Consultancy Pvt. Ltd",
  publisher: "Alpine Educational Consultancy Pvt. Ltd",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Alpine Educational Consultancy | Study Abroad Experts in Nepal",
    description:
      "Expert help for international university admission, scholarships, and visa support for students in Nepal.",
    url: "https://www.alpineeducation.com.np",
    siteName: "Alpine Educational Consultancy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpine Educational Consultancy | Study Abroad Experts in Nepal",
    description:
      "Find trusted study abroad guidance, admissions support, scholarship planning, and visa assistance in Nepal.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full bg-slate-50 font-sans text-slate-900">
        <LanguageProvider>
          <ThemeProvider>
            <ScrollProgress />
            {children}
            <Footer />
            <ScrollToTop />
            <FloatingActions />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
