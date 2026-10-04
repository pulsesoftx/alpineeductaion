"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, TrendingUp, Clock3 } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { siteContent } from "@/lib/i18n";

export function HeroSection() {
  const { language } = useLanguage();
  const t = siteContent[language].hero;
  const whatsappNumber = "9712083324";
  const callbackMessage = encodeURIComponent("Hello Alpine Education, I would like a callback for my study abroad consultation.");

  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8" style={{background: 'radial-gradient(circle at top left, rgba(34,211,238,0.2), transparent 24%), radial-gradient(circle at bottom right, rgba(245,181,74,0.16), transparent 20%), linear-gradient(135deg, #041c2b 0%, #0b2d47 32%, #0d3c5d 60%, #0a1f33 100%)'}}>
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.95fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="inline-flex items-center gap-2 rounded-full border border-[#f5b54a]/60 bg-[#f5b54a]/15 px-4 py-2.5 text-sm font-semibold text-[#fff4cf] shadow-[0_0_0_1px_rgba(245,181,74,0.28)] backdrop-blur-sm sm:text-base">
            <ShieldCheck size={18} className="text-[#f5b54a]" />
            <span>{t.badge}</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.55 }} className="mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            {t.heading}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.55 }} className="mt-6 max-w-2xl text-lg leading-8 text-sky-100/85">
            {t.description}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.55 }} className="mt-8 flex flex-wrap gap-3">
            <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#f5b54a] px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_12px_30px_rgba(245,181,74,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f7c766]">
              {t.primaryCta} <ArrowRight size={16} />
            </a>
            <a href="/universities" className="inline-flex items-center gap-2 rounded-full border border-sky-200/40 bg-white/10 px-5 py-3 text-sm font-semibold text-sky-50 transition duration-300 hover:border-[#f5b54a] hover:bg-white/15 hover:text-[#fff1c5] backdrop-blur-sm">
              {t.secondaryCta}
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${callbackMessage}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#f5b54a]/60 bg-[#f5b54a]/10 px-5 py-3 text-sm font-semibold text-[#f9d58a] transition duration-300 hover:-translate-y-0.5 hover:border-[#f7c766] hover:bg-[#f5b54a]/20"
            >
              Request a callback
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.55 }} className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-sky-100/15 bg-slate-950/35 p-5 shadow-lg shadow-cyan-950/20 backdrop-blur-sm">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-100/70">{t.card1Label}</p>
              <p className="mt-3 text-2xl font-semibold text-white">{t.card1Value}</p>
              <p className="mt-2 text-sm text-sky-100/75">{t.card1Description}</p>
            </div>
            <div className="rounded-3xl border border-sky-100/15 bg-slate-950/35 p-5 shadow-lg shadow-cyan-950/20 backdrop-blur-sm">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-100/70">{t.card2Label}</p>
              <p className="mt-3 text-2xl font-semibold text-white">{t.card2Value}</p>
              <p className="mt-2 text-sm text-sky-100/75">{t.card2Description}</p>
            </div>
            <div className="rounded-3xl border border-sky-100/15 bg-slate-950/35 p-5 shadow-lg shadow-cyan-950/20 backdrop-blur-sm">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-100/70">{t.card3Label}</p>
              <p className="mt-3 text-2xl font-semibold text-white">{t.card3Value}</p>
              <p className="mt-2 text-sm text-sky-100/75">{t.card3Description}</p>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="group relative overflow-hidden rounded-[34px] border border-sky-200/20 bg-white/6 p-4 shadow-[0_35px_120px_rgba(8,47,72,0.58)] backdrop-blur-xl">
          <div className="absolute -right-12 -top-14 h-40 w-40 rounded-full bg-[#f5b54a]/20 blur-3xl" />
          <div className="absolute -bottom-12 left-12 h-32 w-32 rounded-full bg-sky-400/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[28px] border border-sky-100/15 bg-slate-950/30 ring-1 ring-white/10">
            <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-4">
              <span className="rounded-full border border-white/15 bg-slate-950/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-sky-100/90 backdrop-blur-sm">
                Premium guidance
              </span>
              <span className="rounded-full border border-[#f5b54a]/40 bg-[#f5b54a]/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#f9d58a] backdrop-blur-sm">
                Live tracking
              </span>
            </div>
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onLoadedMetadata={(event) => {
                event.currentTarget.currentTime = 0;
                void event.currentTarget.play().catch(() => undefined);
              }}
              poster="/hero-illustration.svg"
              aria-label={t.imageAlt}
              className="aspect-[640/540] h-full w-full object-cover brightness-[0.9] saturate-[1.1]"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="relative mt-5 space-y-4 rounded-[24px] border border-sky-100/10 bg-slate-950/80 p-5 text-white shadow-[0_20px_50px_rgba(14,116,144,0.18)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-sky-100/70">{t.trackerLabel}</p>
                <p className="mt-1 text-xl font-semibold text-white">{t.trackerValue}</p>
              </div>
              <div className="rounded-2xl bg-[#f5b54a]/20 p-2 text-[#f5b54a] ring-1 ring-[#f5b54a]/25"><TrendingUp size={18} /></div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl border border-sky-100/10 bg-slate-900/80 p-4 shadow-inner shadow-slate-950/40">
                <p className="text-xs uppercase tracking-[0.3em] text-sky-100/70">{t.planningLabel}</p>
                <p className="mt-3 text-sm text-slate-100">{t.planningValue}</p>
              </div>
              <div className="rounded-3xl border border-sky-100/10 bg-slate-900/80 p-4 shadow-inner shadow-slate-950/40">
                <p className="text-xs uppercase tracking-[0.3em] text-sky-100/70">{t.supportLabel}</p>
                <p className="mt-3 text-sm text-slate-100">{t.supportValue}</p>
              </div>
            </div>
          </div>

          <div className="relative mt-5 flex items-center justify-between rounded-[24px] border border-sky-100/10 bg-slate-900/70 p-4 text-sky-50 shadow-[0_10px_25px_rgba(2,6,23,0.35)]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-sky-100/60">{t.nextStepLabel}</p>
              <p className="mt-1 font-semibold text-white">{t.nextStepValue}</p>
            </div>
            <div className="rounded-2xl bg-[#f5b54a] p-3 text-slate-950 shadow-lg shadow-[#f5b54a]/30"><Clock3 size={18} /></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
