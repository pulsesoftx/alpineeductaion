"use client";

import { PageShell } from "@/components/layout/page-shell";
import { useLanguage } from "@/components/providers/language-provider";
import { resolveText, siteContent } from "@/lib/i18n";
import { universities } from "@/lib/mock-data";

export default function UniversitiesPage() {
  const { language } = useLanguage();
  const t = siteContent[language].pages.universities;

  return (
    <div className="min-h-screen bg-slate-50">
      <PageShell title={resolveText(t.title, language)} description={resolveText(t.description, language)} eyebrow={resolveText(t.eyebrow, language)}>
        <div className="grid gap-6 lg:grid-cols-3">
          {universities.map((university) => (
            <div key={university.id} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0d253d]">{university.country}</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">{university.name}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{siteContent[language].universitiesSection.tuition} {university.tuition} · {siteContent[language].universitiesSection.acceptance} {university.acceptance}</p>
            </div>
          ))}
        </div>
      </PageShell>
    </div>
  );
}
