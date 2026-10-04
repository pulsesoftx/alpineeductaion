"use client";

import Image from "next/image";
import { blogs } from "@/lib/mock-data";
import { ArrowRight, Clock3, Sparkles } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/providers/language-provider";
import { siteContent } from "@/lib/i18n";

export function BlogSection() {
  const { language } = useLanguage();
  const t = siteContent[language].blog;

  return null;
}
