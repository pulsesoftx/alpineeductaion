"use client";

import { MessageCircleMore } from "lucide-react";

const actions = [
  { label: "WhatsApp", icon: MessageCircleMore, href: "https://wa.me/9712083324" },
];

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <a
            key={action.label}
            href={action.href}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#25d366] via-[#1ebc5f] to-[#138a57] px-2.5 py-2.5 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(37,211,102,0.42)] ring-4 ring-[#25d366]/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(37,211,102,0.5)]"
            aria-label="Chat on WhatsApp"
          >
            <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
              <Icon size={20} className="text-white" />
            </span>
            <span className="hidden sm:flex sm:flex-col sm:items-start sm:pr-1">
              <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-emerald-50/80">Quick chat</span>
              <span className="text-sm font-semibold text-white">{action.label}</span>
            </span>
            <span className="absolute -right-2 -top-2 h-3 w-3 rounded-full bg-[#f5b54a] ring-2 ring-white" />
          </a>
        );
      })}
    </div>
  );
}
