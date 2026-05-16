import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-slate-900">
          Islander <span className="text-emerald-600">PR</span>
        </Link>
        <nav className="flex gap-6 text-sm font-medium text-slate-600">
          <Link href="/" className="hover:text-emerald-600 transition-colors">
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
}
