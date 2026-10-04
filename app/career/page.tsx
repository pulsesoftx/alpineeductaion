import { PageShell } from "@/components/layout/page-shell";
import { Navbar } from "@/components/layout/navbar";

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />
      <main>
        <PageShell
          eyebrow="Career"
          title="Build your future with Alpine."
          description="Join a team helping students turn global education goals into confident next steps."
        >
          <div className="space-y-6">
            <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Open opportunities</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                We are always interested in meeting thoughtful advisors and education professionals. Contact us to
                explore how you could contribute.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {[
                {
                  title: "Study Abroad Counselor",
                  type: "Full-time",
                  description: "Guide students through university selection, applications, scholarships, and visa planning.",
                },
                {
                  title: "University Admissions Advisor",
                  type: "Full-time",
                  description: "Support applicants with country-specific advising, documentation guidance, and admission strategy.",
                },
                {
                  title: "Education Sales Executive",
                  type: "Full-time",
                  description: "Build student relationships, convert inquiries, and convert leads into successful enrollments.",
                },
              ].map((job) => (
                <div key={job.title} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0d253d] dark:text-sky-300">{job.type}</p>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{job.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{job.description}</p>
                  <a href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#0d253d] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#143d63]">
                    Apply now
                  </a>
                </div>
              ))}
            </div>

            <div className="rounded-[28px] border border-[#d6b169] bg-[#fffaf1] p-6 shadow-sm dark:border-[#d6b169] dark:bg-slate-900">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0d253d] dark:text-sky-300">Partner with us</p>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">University & consultancy partnerships</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    We welcome collaborations with external education consultancies, university representatives, and student referral partners who need a reliable team for student recruitment, admissions support, and counseling services.
                  </p>
                </div>

                <a href="/contact?type=partnership" className="inline-flex items-center justify-center rounded-full bg-[#0d253d] px-5 py-3 text-sm font-semibold text-white hover:bg-[#143d63]">
                  Contact for partnership
                </a>
              </div>
            </div>
          </div>
        </PageShell>
      </main>
    </div>
  );
}