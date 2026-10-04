"use client";

import { ArrowRight, BookOpen, GraduationCap, Landmark, ShieldCheck, Users2 } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/providers/language-provider";
import { siteContent } from "@/lib/i18n";

const features = [
  {
    key: "card1Title",
    descriptionKey: "card1Description",
    icon: GraduationCap,
  },
  {
    key: "card2Title",
    descriptionKey: "card2Description",
    icon: ShieldCheck,
  },
  {
    key: "card3Title",
    descriptionKey: "card3Description",
    icon: Landmark,
  },
  {
    key: "card4Title",
    descriptionKey: "card4Description",
    icon: BookOpen,
  },
];

export function FeatureGrid() {
  const { language } = useLanguage();
  const t = siteContent[language].features;

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0d253d]">{t.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">{t.heading}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            {t.description}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[24px] border border-slate-200 bg-white/90 p-6 shadow-sm shadow-slate-200/40 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">{t.advisorLabel}</p>
              <p className="mt-3 text-2xl font-semibold text-slate-900">{t.advisorValue}</p>
              <p className="mt-2 text-sm text-slate-600">{t.advisorDescription}</p>
            </div>
            <div className="rounded-[24px] border border-slate-200 bg-white/90 p-6 shadow-sm shadow-slate-200/40 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">{t.dataLabel}</p>
              <p className="mt-3 text-2xl font-semibold text-slate-900">{t.dataValue}</p>
              <p className="mt-2 text-sm text-slate-600">{t.dataDescription}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.key} className="group rounded-[28px] border border-slate-200 bg-white/95 p-7 shadow-lg shadow-slate-200/50 transition hover:-translate-y-1 hover:border-[#c0902b]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0d253d] to-[#c0902b] text-white shadow-sm shadow-[#0d253d]/20">
                  <Icon size={20} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">{t[feature.key as keyof typeof t]}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{t[feature.descriptionKey as keyof typeof t]}</p>
                <Link href="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0d253d] transition group-hover:text-[#8b6c2a]">
                  {t.learnMore} <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}
          <div className="rounded-[28px] border border-slate-200 bg-slate-950 p-7 text-white shadow-lg shadow-slate-950/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0d253d] text-white">
              <Users2 size={20} />
            </div>
            <h3 className="mt-6 text-xl font-semibold">{t.featureTitle}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-200">
              {t.featureDescription}
            </p>
            <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#c0902b] transition hover:text-white">
              {t.featureCta} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
