"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Menu, Phone, Search, X } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { siteConfig } from "@/constants/site";
import { siteContent } from "@/lib/i18n";

const links = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "countries", href: "/countries" },
  { key: "universities", href: "/universities" },
  { key: "career", href: "/career" },
  { key: "contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/consultancyalpineeducation?igsh=Mjhmb2Zoc25iMXZ6",
    icon: InstagramIcon,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/",
    icon: TikTokIcon,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/",
    icon: WhatsAppIcon,
  },
];

function FacebookIcon() {
  return <Image src="/facebookicon.svg" alt="Facebook" width={16} height={16} className="h-4 w-4" />;
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="url(#instagramGradient)" />
      <rect x="7" y="7" width="10" height="10" rx="3" stroke="white" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="12" r="2.6" stroke="white" strokeWidth="1.5" fill="none" />
      <circle cx="15.5" cy="8.5" r="0.8" fill="white" />
      <defs>
        <linearGradient id="instagramGradient" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#405DE6" />
          <stop offset="20%" stopColor="#5B51D8" />
          <stop offset="40%" stopColor="#833AB4" />
          <stop offset="60%" stopColor="#C13584" />
          <stop offset="80%" stopColor="#E1306C" />
          <stop offset="100%" stopColor="#FD1D1D" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function TikTokIcon() {
  return <Image src="/tiktokicon.svg" alt="TikTok" width={20} height={20} className="h-5 w-5" />;
}

function WhatsAppIcon() {
  return <Image src="/whatapp.svg" alt="WhatsApp" width={16} height={16} className="h-4 w-4" />;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = siteContent[language].navbar;

  return (
    <header className="sticky top-0 z-50 border-b border-sky-200/20 bg-[#081f33]/85 backdrop-blur-xl">
      <div className="border-b border-sky-200/10 bg-[#0a2441]/80 px-4 py-2 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 sm:gap-3">
          <div className="hidden items-center rounded-full border border-sky-200/20 bg-slate-900/40 px-3 py-1.5 text-sm text-sky-50 shadow-sm sm:inline-flex">
            <span>{siteConfig.location}</span>
          </div>

          <div className="hidden flex-1 items-center justify-end gap-2 sm:flex">
            <div className="flex items-center gap-2 rounded-full border border-sky-200/20 bg-slate-900/40 px-3 py-1.5 text-sm shadow-sm">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-1.5 text-sky-100 transition hover:text-[#f5b54a]">
                <Phone size={14} />
                <span>{siteConfig.phone}</span>
              </a>
              <a href={`mailto:${siteConfig.contactEmail}`} className="flex items-center gap-1.5 text-sky-100 transition hover:text-[#f5b54a]">
                <Mail size={14} />
                <span>{siteConfig.contactEmail}</span>
              </a>
            </div>

            <div className="flex items-center gap-1 rounded-full border border-sky-200/20 bg-slate-900/40 p-1 shadow-sm">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${language === "en" ? "bg-[#f5b54a] text-slate-950" : "text-sky-100"}`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage("ne")}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${language === "ne" ? "bg-[#f5b54a] text-slate-950" : "text-sky-100"}`}
              >
                ने
              </button>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-sky-200/20 bg-slate-900/40 px-2 py-1.5 shadow-sm">
              {socialLinks.map((socialLink) => {
                const Icon = socialLink.icon;
                return (
                  <a
                    key={socialLink.label}
                    href={socialLink.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={socialLink.label}
                    className="rounded-full p-2 text-sky-100 transition hover:bg-sky-500/10 hover:text-[#f5b54a]"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-sky-200/20 bg-white shadow-lg shadow-cyan-950/30">
            <Image src="/logo.svg" alt="Alpine Educational Consultancy logo" width={48} height={48} className="object-cover" priority />
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight text-white">{t.brandTitle}</p>
            <p className="text-xs text-sky-100/70">{t.brandSubtitle}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-sky-100 transition hover:text-[#f5b54a]">
              {t[link.key as keyof typeof t]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button className="hidden rounded-full border border-sky-200/20 p-2 text-sky-100 transition hover:border-[#f5b54a] hover:text-[#f5b54a] sm:inline-flex">
            <Search size={18} />
          </button>
          <motion.div whileHover={{ scale: 1.02 }}>
            <Link href="/contact" className="hidden rounded-full bg-[#f5b54a] px-4 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-[#f5b54a]/25 transition hover:bg-[#f7c766] sm:inline-flex">
              {t.bookConsultation}
            </Link>
          </motion.div>
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-label={open ? t.closeMenu : t.openMenu}
            className="rounded-full border border-sky-200/20 p-2 text-sky-100 transition hover:border-[#f5b54a] hover:text-[#f5b54a] lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-slate-200 bg-white/95 px-4 pt-4 pb-6 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/95 lg:hidden"
          >
            <nav className="space-y-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-sky-100 transition hover:bg-sky-500/10 hover:text-[#f5b54a]"
                >
                  {t[link.key as keyof typeof t]}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex items-center justify-center gap-2 rounded-full border border-sky-200/20 bg-slate-900/40 px-3 py-2">
              {socialLinks.map((socialLink) => {
                const Icon = socialLink.icon;
                return (
                  <a
                    key={socialLink.label}
                    href={socialLink.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={socialLink.label}
                    className="rounded-full p-2 text-sky-100 transition hover:bg-sky-500/10 hover:text-[#f5b54a]"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
            <div className="mt-4">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-[#c0902b] dark:hover:bg-[#a07b25]"
              >
                {t.bookConsultation}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
