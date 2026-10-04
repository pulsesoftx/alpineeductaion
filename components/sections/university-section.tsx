"use client";

import { useState } from "react";
import { universities } from "@/lib/mock-data";
import { ArrowRight, Trophy, Star } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/providers/language-provider";
import { siteContent } from "@/lib/i18n";

export function UniversitySection() {
  const { language } = useLanguage();
  const t = siteContent[language].universitiesSection;
  const [selectedId, setSelectedId] = useState(universities[0]?.id ?? "");
  const selectedUniversity = universities.find((university) => university.id === selectedId) ?? universities[0];

  const handleUniversityWhatsApp = (universityName: string) => {
    const message = `Hello Alpine Education, I want to know more about ${universityName}. Please guide me about admissions and the application process.`;
    window.open(`https://wa.me/9712083324?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0d253d]">{t.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">{t.heading}</h2>
        </div>
        <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0d253d]">
          {t.contactAdvisor} <ArrowRight size={14} />
        </Link>
      </div>

      <div className="mb-8 rounded-[28px] border border-slate-200 bg-gradient-to-r from-[#081f33] via-[#0d253d] to-[#123d63] p-6 text-white shadow-[0_20px_40px_rgba(15,23,42,0.12)]">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">Trusted university partners</p>
            <h3 className="mt-3 text-2xl font-semibold">Familiar universities, expert guidance, and direct support</h3>
          </div>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f5b54a] px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-[#f5b54a]/25 transition hover:bg-[#f7c766]">
            Contact us now <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <div className="space-y-8">
        {universities.map((university) => {
          const isSelected = selectedUniversity?.id === university.id;

          return (
            <button
              key={university.id}
              type="button"
              onClick={() => {
                setSelectedId(university.id);
                handleUniversityWhatsApp(university.name);
              }}
              className={`w-full rounded-[28px] border p-5 text-left shadow-[0_20px_40px_rgba(15,23,42,0.04)] transition ${
                isSelected
                  ? "border-[#d6b169] bg-[#fffaf1] shadow-[0_24px_50px_rgba(15,23,42,0.08)] dark:border-[#d6b169] dark:bg-slate-900"
                  : "border-slate-200 bg-white hover:border-[#d6b169] hover:shadow-[0_24px_50px_rgba(15,23,42,0.08)] dark:border-slate-700 dark:bg-slate-950"
              }`}
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                    {university.country}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{university.name}</h3>
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                    <span>{t.tuition} {university.tuition}</span>
                    <span className="h-1 w-1 rounded-full bg-slate-400" />
                    <span>{t.acceptance} {university.acceptance}</span>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                    <Star size={12} className="text-amber-500" /> #{university.ranking}
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#0d253d] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#143d63]">
                    {t.contactAdvisor} <ArrowRight size={14} />
                  </span>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {university.programs.map((program) => (
                  <span key={program} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                    {program}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300">
                  <Trophy size={14} /> {university.scholarship}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {selectedUniversity && (
        <div className="mt-8 rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-[0_20px_40px_rgba(15,23,42,0.04)] dark:border-slate-700 dark:from-slate-900 dark:to-slate-950">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            About this university
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{selectedUniversity.name}</h3>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">
            {selectedUniversity.about}
          </p>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Best for
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {selectedUniversity.bestFor.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-800 dark:border-amber-900/40 dark:bg-amber-950/40 dark:text-amber-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Categories
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {selectedUniversity.categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#0d253d] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0d253d]/10 hover:bg-[#143d63]">
              Talk to an advisor <ArrowRight size={14} />
            </Link>
            <a href="https://wa.me/9712083324?text=Hello%20Alpine%20Education%2C%20I%20want%20to%20know%20more%20about%20this%20university." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:border-[#0d253d] hover:text-[#0d253d] dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100">
              WhatsApp us
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
