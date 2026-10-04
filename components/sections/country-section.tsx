"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { countries } from "@/lib/mock-data";
import { useLanguage } from "@/components/providers/language-provider";
import { siteContent } from "@/lib/i18n";

export function CountrySection() {
  const { language } = useLanguage();
  const t = siteContent[language].countriesSection;

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0d253d]">{t.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">{t.heading}</h2>
        </div>
        <Link href="/countries" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0d253d]">
          {t.cta} <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {countries.map((country) => (
          <div key={country.slug} className="group rounded-[28px] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-[0_20px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#d6b169] hover:shadow-[0_24px_50px_rgba(15,23,42,0.10)] dark:border-slate-700 dark:from-slate-900 dark:to-slate-950">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-slate-500">{country.region}</p>
              <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-[10px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                <MapPin size={12} /> {t.topChoice}
              </div>
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">{country.name}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{country.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {country.topUniversities.map((university) => (
                <span key={university} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  {university}
                </span>
              ))}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              <div className="rounded-3xl bg-slate-950/95 px-4 py-3 text-white">
                <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">{t.visaApproval}</p>
                <p className="mt-2 text-lg font-semibold">82%</p>
              </div>
              <div className="rounded-3xl bg-slate-100 px-4 py-3 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                <p className="text-[10px] uppercase tracking-[0.28em] text-slate-500">{t.scholarships}</p>
                <p className="mt-2 text-lg font-semibold">32% avg.</p>
              </div>
            </div>
            <Link href="/countries" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0d253d] transition hover:text-[#8b6c2a]">
              {t.explore} <ArrowRight size={14} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
