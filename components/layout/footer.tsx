"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { siteContent } from "@/lib/i18n";

const socialLinks = [
  { href: "https://www.facebook.com/", label: "Facebook", icon: "/facebookicon.svg" },
  { href: "https://www.instagram.com/consultancyalpineeducation?igsh=Mjhmb2Zoc25iMXZ6", label: "Instagram", icon: "/instagramicon.svg" },
  { href: "https://www.tiktok.com/", label: "TikTok", icon: "/tiktokicon.svg" },
  { href: "https://wa.me/9712083324", label: "WhatsApp", icon: "/whatapp.svg" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/countries", label: "Countries" },
  { href: "/universities", label: "Universities" },
  { href: "/career", label: "Career" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const { language } = useLanguage();
  const pathname = usePathname();
  const t = siteContent[language].footer;

  return (
    <footer className="border-t border-sky-200/10 bg-[#071c2d] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-sky-200/10 pb-10 lg:grid-cols-[1.1fr_0.9fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="Alpine Educational Consultancy logo" className="h-12 w-12 rounded-full bg-white/5 p-1" />
              <div>
                <p className="text-lg font-semibold text-white">Alpine Educational Consultancy</p>
                <p className="text-sm text-sky-100/70">Study Abroad Experts</p>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-3 text-sm text-sky-100/70">
              <span className="rounded-full border border-sky-200/15 bg-white/5 px-2 py-1 font-medium text-sky-100">EN</span>
              <span className="rounded-full border border-sky-200/15 bg-white/5 px-2 py-1 font-medium text-sky-100">ने</span>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f5b54a]">{t.quickLinks}</p>
            <nav className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm">
              {navLinks.map((item) => (
                <Link key={item.label} href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f5b54a]">{t.contactTitle}</p>
            <div className="mt-5 space-y-3 text-sm text-sky-100/75">
              <div className="flex items-center gap-2"><MapPin size={16} className="text-[#f5b54a]" /> Hattisar-1, Kathmandu, Nepal</div>
              <div className="flex items-center gap-2"><Phone size={16} className="text-[#f5b54a]" /> 014502811 / 9712083324</div>
              <div className="flex items-center gap-2"><Mail size={16} className="text-[#f5b54a]" /><a href="mailto:contact@alpine.com.np" className="hover:text-white">contact@alpine.com.np</a></div>
            </div>
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sky-200/15 bg-white/5 transition hover:border-[#f5b54a]/50 hover:bg-white/10"
                >
                  <img src={social.icon} alt={social.label} className="h-5 w-5 object-contain" />
                </a>
              ))}
            </div>
            <div className="mt-5 overflow-hidden rounded-2xl border border-sky-200/10 bg-white/5">
              <iframe
                title="Alpine Educational Consultancy location"
                src="https://www.google.com/maps?q=Hattisar-1%20Kathmandu%20Nepal&z=15&output=embed"
                className="h-52 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-sm text-sky-100/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 Alpine Educational Consultancy. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <Link href="/about" className="transition hover:text-white">About</Link>
            <Link href="/contact" className="transition hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
