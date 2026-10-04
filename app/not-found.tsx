import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="max-w-xl rounded-[32px] border border-slate-200 bg-white p-10 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0d253d]">404</p>
        <h1 className="mt-4 text-3xl font-semibold text-slate-900">Page not found</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">The page you are looking for may have moved or no longer exists.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white">Return home</Link>
      </div>
    </div>
  );
}
