"use client";

import { testimonials } from "@/lib/mock-data";
import { ArrowRight, Quote, Sparkles, Trophy } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/providers/language-provider";
import { siteContent } from "@/lib/i18n";

export function TestimonialSection() {
  const { language } = useLanguage();
  const t = siteContent[language].testimonials;

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 p-10 text-white shadow-2xl shadow-slate-950/10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0d253d]">{t.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{t.heading}</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              {t.description}
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[24px] bg-white/10 p-5">
              <Sparkles size={18} className="text-[#c0902b]" />
              <p className="mt-3 text-3xl font-semibold">4.9/5</p>
              <p className="mt-2 text-sm text-slate-300">{t.ratingLabel}</p>
            </div>
            <div className="rounded-[24px] bg-white/10 p-5">
              <Trophy size={18} className="text-amber-300" />
              <p className="mt-3 text-3xl font-semibold">82%</p>
              <p className="mt-2 text-sm text-slate-300">{t.visaLabel}</p>
            </div>
          </div>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#c0902b] transition hover:text-[#0d253d]">
            {t.cta} <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid gap-6">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-950">
              <Quote size={20} className="text-[#0d253d]" />
              <p className="mt-5 text-lg leading-8 text-slate-700 dark:text-slate-200">“{testimonial.story}”</p>
              <div className="mt-6 border-t border-slate-200 pt-5 dark:border-slate-700">
                <p className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role} • {testimonial.destination}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
