"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { useLanguage } from "@/components/providers/language-provider";
import { resolveText, siteContent } from "@/lib/i18n";

type PageShellProps = {
  title: string;
  description: string;
  eyebrow?: string;
  children: ReactNode;
  ctaHref?: string;
  ctaLabel?: string;
};

export function PageShell({ title, description, eyebrow, children, ctaHref = "/contact", ctaLabel }: PageShellProps) {
  const { language } = useLanguage();
  const fallbackCta = resolveText(siteContent[language].pageShell.ctaLabel, language);

  return (
    <section className="w-full px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[32px] border border-slate-200 bg-white/80 p-8 shadow-sm shadow-slate-200/60 backdrop-blur sm:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0d253d]">{eyebrow}</p> : null}
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900">
              <ArrowLeft size={15} /> Back to home
            </Link>
            <Link href={ctaHref} className="inline-flex items-center gap-2 rounded-full bg-[#0d253d] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0d253d]/10 hover:bg-[#09162a]">
              {ctaLabel ?? fallbackCta} <ArrowRight size={15} />
            </Link>
          </div>
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
