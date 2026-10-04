"use client";

import { PageShell } from "@/components/layout/page-shell";
import { useLanguage } from "@/components/providers/language-provider";
import { resolveText, siteContent } from "@/lib/i18n";

export default function AboutPage() {
  const { language } = useLanguage();
  const t = siteContent[language].pages.about;

  return (
    <div className="min-h-screen bg-slate-50">
      <PageShell title={resolveText(t.title, language)} description={resolveText(t.description, language)} eyebrow={resolveText(t.eyebrow, language)}>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">{resolveText(t.missionTitle, language)}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{resolveText(t.missionDescription, language)}</p>
          </div>
          <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">{resolveText(t.visionTitle, language)}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{resolveText(t.visionDescription, language)}</p>
          </div>
          <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">{resolveText(t.valuesTitle, language)}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{resolveText(t.valuesDescription, language)}</p>
          </div>
        </div>
      </PageShell>
    </div>
  );
}
