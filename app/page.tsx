import { HeroSection } from "@/components/sections/hero-section";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { CountrySection } from "@/components/sections/country-section";
import { UniversitySection } from "@/components/sections/university-section";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { BlogSection } from "@/components/sections/blog-section";
import { Navbar } from "@/components/layout/navbar";

export const metadata = {
  title: "Study Abroad Consultancy in Nepal | University Admissions & Visa Support",
  description:
    "Study abroad with Alpine Educational Consultancy in Nepal. We help students shortlist universities, apply for scholarships, and plan their visa and admission journey with confidence.",
  keywords: [
    "study abroad consultancy in Nepal",
    "best education consultancy in Nepal",
    "international university admission help",
    "scholarship guidance",
    "student visa support",
    "career counselling for study abroad",
  ],
};

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Alpine Educational Consultancy Pvt. Ltd",
  url: "https://www.alpineeducation.com.np",
  description:
    "Education consultancy helping students in Nepal secure admissions, scholarships, and visa support for studying abroad.",
  areaServed: "Nepal",
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Study abroad counselling",
        description: "University shortlisting, application guidance, and scholarship support.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Student visa assistance",
        description: "Guidance for visa documentation, interviews, and application planning.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Career and admissions strategy",
        description: "Personalized planning for international education success.",
      },
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#071c2d] text-slate-100">
      <Navbar />
      <main id="main-content">
        <HeroSection />

        <section className="relative z-10 mx-auto -mt-12 max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-slate-200 bg-white/95 p-6 shadow-[0_28px_80px_rgba(15,23,42,0.12)] backdrop-blur-sm dark:border-slate-700 dark:bg-slate-950/90 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0d253d] dark:text-sky-300">
                  Trusted by students & families
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                  Strategic support for every step of your international education journey.
                </h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-900">
                  <p className="text-2xl font-semibold text-slate-900 dark:text-white">1,200+</p>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Students guided</p>
                </div>
                <div className="rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-900">
                  <p className="text-2xl font-semibold text-slate-900 dark:text-white">82%</p>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Visa success</p>
                </div>
                <div className="rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-900">
                  <p className="text-2xl font-semibold text-slate-900 dark:text-white">150+</p>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Partner institutions</p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-[24px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 dark:border-slate-700 dark:from-slate-900 dark:to-slate-950">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0d253d] dark:text-sky-300">
                  University matching
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  Personalized shortlists based on academic goals, budget, future career plans, and destination fit.
                </p>
              </div>

              <div className="rounded-[24px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 dark:border-slate-700 dark:from-slate-900 dark:to-slate-950">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0d253d] dark:text-sky-300">
                  Scholarship strategy
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  Data-backed guidance to unlock funding, reduce costs, and strengthen your application profile.
                </p>
              </div>

              <div className="rounded-[24px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 dark:border-slate-700 dark:from-slate-900 dark:to-slate-950">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0d253d] dark:text-sky-300">
                  Visa + admissions support
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  Clear advice, document support, and steady guidance through each application and interview stage.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FeatureGrid />
        <CountrySection />
        <UniversitySection />
        <TestimonialSection />
        <BlogSection />

        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-[28px] border border-[#d6b169] bg-[#fffaf1] p-6 shadow-sm dark:border-[#d6b169] dark:bg-slate-900 sm:p-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0d253d] dark:text-sky-300">Partner with us</p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">University & consultancy partnerships</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  We welcome collaborations with external education consultancies, university representatives, and student referral partners who need a reliable team for student recruitment, admissions support, and counseling services.
                </p>
              </div>

              <a href="/contact?type=partnership" className="inline-flex items-center justify-center rounded-full bg-[#0d253d] px-5 py-3 text-sm font-semibold text-white hover:bg-[#143d63]">
                Contact for partnership
              </a>
            </div>
          </div>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
    </div>
  );
}
