"use client";

import { PageShell } from "@/components/layout/page-shell";
import { useLanguage } from "@/components/providers/language-provider";
import { resolveText, siteContent } from "@/lib/i18n";
import { countries } from "@/lib/mock-data";

export default function CountriesPage() {
  const { language } = useLanguage();
  const t = siteContent[language].pages.countries;

  return (
    <div className="min-h-screen bg-slate-50">
      <PageShell title={resolveText(t.title, language)} description={resolveText(t.description, language)} eyebrow={resolveText(t.eyebrow, language)}>
        <div className="grid gap-6 md:grid-cols-2">
          {countries.map((country) => (
            <div key={country.slug} className={`rounded-[24px] border border-slate-200 bg-gradient-to-br ${country.tint} p-8 shadow-sm`}>
              <h3 className="text-2xl font-semibold text-slate-900">{country.name}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{country.description}</p>
            </div>
          ))}
        </div>
      </PageShell>
    </div>
  );
}
