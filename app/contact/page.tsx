"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { PageShell } from "@/components/layout/page-shell";
import { useLanguage } from "@/components/providers/language-provider";
import { resolveText, siteContent } from "@/lib/i18n";
import { siteConfig } from "@/constants/site";
import { Mail, Phone, MapPin, CalendarClock, Send } from "lucide-react";

const initialStudentForm = {
  fullName: "",
  email: "",
  phone: "",
  destination: "Malta",
  preferredDate: "",
  preferredTime: "",
  message: "",
};

const initialPartnershipForm = {
  companyName: "",
  contactPerson: "",
  role: "",
  email: "",
  phone: "",
  country: "Nepal",
  website: "",
  partnershipType: "Education Consultancy",
  studentVolume: "1-100 students / month",
  meetingPlatform: "Zoom",
  timezone: "Nepal (UTC+5:45)",
  preferredDate: "",
  preferredTime: "",
  meetingGoal: "",
  message: "",
};

const whatsappNumber = "9712083324";

const buildStudentWhatsAppMessage = (formData: typeof initialStudentForm) => {
  const date = formData.preferredDate ? new Date(formData.preferredDate).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }) : "Not specified";

  return [
    "Hello Alpine Education,",
    "I would like to book a consultation.",
    `Full name: ${formData.fullName}`,
    `Email: ${formData.email}`,
    `Phone: ${formData.phone}`,
    `Destination: ${formData.destination}`,
    `Preferred date: ${date}`,
    `Preferred time: ${formData.preferredTime || "Not specified"}`,
    `Message: ${formData.message || "No additional message"}`,
  ].join("\n");
};

const buildPartnershipWhatsAppMessage = (formData: typeof initialPartnershipForm) => {
  const date = formData.preferredDate ? new Date(formData.preferredDate).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }) : "Not specified";

  return [
    "Hello Alpine Education,",
    "I would like to schedule an online partnership meeting.",
    `Company / consultancy: ${formData.companyName}`,
    `Contact person: ${formData.contactPerson}`,
    `Role: ${formData.role}`,
    `Email: ${formData.email}`,
    `Phone: ${formData.phone}`,
    `Country: ${formData.country}`,
    `Website: ${formData.website || "Not provided"}`,
    `Partnership type: ${formData.partnershipType}`,
    `Student volume: ${formData.studentVolume}`,
    `Preferred meeting platform: ${formData.meetingPlatform}`,
    `Timezone: ${formData.timezone}`,
    `Preferred date: ${date}`,
    `Preferred time: ${formData.preferredTime || "Not specified"}`,
    `Main goal of the meeting: ${formData.meetingGoal || "Not specified"}`,
    `Message: ${formData.message || "No additional message"}`,
  ].join("\n");
};

function ContactPageContent() {
  const { language } = useLanguage();
  const t = siteContent[language].pages.contact;
  const searchParams = useSearchParams();
  const isPartnership = searchParams.get("type") === "partnership";
  const [studentForm, setStudentForm] = useState(initialStudentForm);
  const [partnershipForm, setPartnershipForm] = useState(initialPartnershipForm);
  const [submitted, setSubmitted] = useState(false);

  const handleStudentChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setStudentForm((current) => ({ ...current, [name]: value }));
  };

  const handlePartnershipChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setPartnershipForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = isPartnership
      ? buildPartnershipWhatsAppMessage(partnershipForm)
      : buildStudentWhatsAppMessage(studentForm);
    const subject = isPartnership
      ? "New partnership meeting request"
      : "New consultation booking request";

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(siteConfig.contactEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setStudentForm(initialStudentForm);
    setPartnershipForm(initialPartnershipForm);
  };

  return (
    <div className="min-h-screen bg-[#f7fbff]">
      <PageShell title={resolveText(t.title, language)} description={resolveText(t.description, language)} eyebrow={resolveText(t.eyebrow, language)}>
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[24px] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">{resolveText(t.advisorTitle, language)}</h3>
            <div className="mt-6 space-y-4 text-sm text-slate-800">
              <div className="flex items-center gap-3"><Mail className="text-[#0d253d]" size={18} /> contact@alpine.com.np</div>
              <div className="flex items-center gap-3"><Phone className="text-[#0d253d]" size={18} /> 014502811 / 9712083324</div>
              <div className="flex items-center gap-3"><MapPin className="text-[#0d253d]" size={18} /> Hattisar-1, Kathmandu, Nepal</div>
            </div>
          </div>
          <div className="rounded-[24px] border border-slate-200 bg-slate-950 p-8 text-white shadow-sm">
            <h3 className="text-xl font-semibold">{resolveText(t.consultationTitle, language)}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-100">{resolveText(t.consultationDescription, language)}</p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Alpine Education, I would like to book a consultation.")}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center rounded-full bg-[#0d253d] px-5 py-3 text-sm font-semibold text-white"
            >
              {resolveText(t.inquiryCta, language)}
            </a>
          </div>
        </div>

        <div className="mt-10 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0d253d] text-white">
              <CalendarClock size={18} />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-700">
                {isPartnership ? "Partnership meeting" : "Book a session"}
              </p>
              <h3 className="mt-1 text-2xl font-semibold text-slate-900">
                {isPartnership ? "Schedule an online partnership meeting" : "Schedule your consultation"}
              </h3>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
            {isPartnership ? (
              <>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-900">Company / consultancy name</span>
                  <input
                    type="text"
                    name="companyName"
                    value={partnershipForm.companyName}
                    onChange={handlePartnershipChange}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0d253d] focus:bg-white"
                    placeholder="Your company or consultancy"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-900">Contact person</span>
                  <input
                    type="text"
                    name="contactPerson"
                    value={partnershipForm.contactPerson}
                    onChange={handlePartnershipChange}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0d253d] focus:bg-white"
                    placeholder="Name of the main contact"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-900">Role / title</span>
                  <input
                    type="text"
                    name="role"
                    value={partnershipForm.role}
                    onChange={handlePartnershipChange}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0d253d] focus:bg-white"
                    placeholder="Director, Manager, Founder..."
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-900">Email address</span>
                  <input
                    type="email"
                    name="email"
                    value={partnershipForm.email}
                    onChange={handlePartnershipChange}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0d253d] focus:bg-white"
                    placeholder="you@company.com"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-900">Phone number</span>
                  <input
                    type="tel"
                    name="phone"
                    value={partnershipForm.phone}
                    onChange={handlePartnershipChange}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0d253d] focus:bg-white"
                    placeholder="98XXXXXXXX"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-900">Country</span>
                  <input
                    type="text"
                    name="country"
                    value={partnershipForm.country}
                    onChange={handlePartnershipChange}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0d253d] focus:bg-white"
                    placeholder="Country"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-900">Website</span>
                  <input
                    type="url"
                    name="website"
                    value={partnershipForm.website}
                    onChange={handlePartnershipChange}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0d253d] focus:bg-white"
                    placeholder="https://yourcompany.com"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-900">Partnership type</span>
                  <select
                    name="partnershipType"
                    value={partnershipForm.partnershipType}
                    onChange={handlePartnershipChange}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0d253d] focus:bg-white"
                  >
                    <option>Education Consultancy</option>
                    <option>University Partner</option>
                    <option>Recruitment Agency</option>
                    <option>Referral Partner</option>
                    <option>Other</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-900">Student volume</span>
                  <select
                    name="studentVolume"
                    value={partnershipForm.studentVolume}
                    onChange={handlePartnershipChange}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0d253d] focus:bg-white"
                  >
                    <option>1-100 students / month</option>
                    <option>101-300 students / month</option>
                    <option>301-500 students / month</option>
                    <option>500+ students / month</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-900">Preferred meeting platform</span>
                  <select
                    name="meetingPlatform"
                    value={partnershipForm.meetingPlatform}
                    onChange={handlePartnershipChange}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0d253d] focus:bg-white"
                  >
                    <option>Zoom</option>
                    <option>Google Meet</option>
                    <option>WhatsApp Call</option>
                    <option>Phone Call</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-900">Timezone</span>
                  <input
                    type="text"
                    name="timezone"
                    value={partnershipForm.timezone}
                    onChange={handlePartnershipChange}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0d253d] focus:bg-white"
                    placeholder="Example: Nepal (UTC+5:45)"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-900">Preferred date</span>
                  <input
                    type="date"
                    name="preferredDate"
                    value={partnershipForm.preferredDate}
                    onChange={handlePartnershipChange}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0d253d] focus:bg-white"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-900">Preferred time</span>
                  <input
                    type="time"
                    name="preferredTime"
                    value={partnershipForm.preferredTime}
                    onChange={handlePartnershipChange}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0d253d] focus:bg-white"
                  />
                </label>

                <label className="block md:col-span-2">
                  <span className="mb-2 block text-sm font-medium text-slate-900">What would you like to discuss?</span>
                  <textarea
                    name="meetingGoal"
                    value={partnershipForm.meetingGoal}
                    onChange={handlePartnershipChange}
                    rows={3}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0d253d] focus:bg-white"
                    placeholder="University collaboration, student referrals, enrollment volume, marketing strategy, or partnership model..."
                  />
                </label>

                <label className="block md:col-span-2">
                  <span className="mb-2 block text-sm font-medium text-slate-900">Additional message</span>
                  <textarea
                    name="message"
                    value={partnershipForm.message}
                    onChange={handlePartnershipChange}
                    rows={5}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0d253d] focus:bg-white"
                    placeholder="Tell us more about your partnership goals, target markets, and preferred collaboration model."
                  />
                </label>
              </>
            ) : (
              <>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-900">Full name</span>
                  <input
                    type="text"
                    name="fullName"
                    value={studentForm.fullName}
                    onChange={handleStudentChange}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0d253d] focus:bg-white"
                    placeholder="Your full name"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-900">Email address</span>
                  <input
                    type="email"
                    name="email"
                    value={studentForm.email}
                    onChange={handleStudentChange}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0d253d] focus:bg-white"
                    placeholder="you@example.com"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-900">Phone number</span>
                  <input
                    type="tel"
                    name="phone"
                    value={studentForm.phone}
                    onChange={handleStudentChange}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0d253d] focus:bg-white"
                    placeholder="98XXXXXXXX"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-900">Interested destination</span>
                  <select
                    name="destination"
                    value={studentForm.destination}
                    onChange={handleStudentChange}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0d253d] focus:bg-white"
                  >
                    <option>Malta</option>
                    <option>South Korea</option>
                    <option>Cyprus</option>
                    <option>USA</option>
                    <option>Germany</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-900">Preferred date</span>
                  <input
                    type="date"
                    name="preferredDate"
                    value={studentForm.preferredDate}
                    onChange={handleStudentChange}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0d253d] focus:bg-white"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-900">Preferred time</span>
                  <input
                    type="time"
                    name="preferredTime"
                    value={studentForm.preferredTime}
                    onChange={handleStudentChange}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0d253d] focus:bg-white"
                  />
                </label>

                <label className="block md:col-span-2">
                  <span className="mb-2 block text-sm font-medium text-slate-900">Message</span>
                  <textarea
                    name="message"
                    value={studentForm.message}
                    onChange={handleStudentChange}
                    rows={5}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0d253d] focus:bg-white"
                    placeholder="Tell us about your study goals, preferred programs, or destination interest."
                  />
                </label>
              </>
            )}

            <div className="md:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0d253d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#143d63]"
              >
                {isPartnership ? "Send partnership request" : "Book consultation"} <Send size={16} />
              </button>

              {submitted && (
                <p className="text-sm font-medium text-emerald-600">
                  {isPartnership
                    ? "Your partnership meeting request has been sent. We will contact you shortly."
                    : "Your consultation request has been received. We will contact you shortly."}
                </p>
              )}
            </div>
          </form>
        </div>
      </PageShell>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f7fbff]" /> }>
      <ContactPageContent />
    </Suspense>
  );
}
