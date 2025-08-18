'use client';

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Header } from "../components/Header/Header";
import { ArrowRight, Home } from "lucide-react";

export default function TermsOfService() {
  const t = useTranslations("terms");

  return (
    <>
      <Header />
      <main className="min-h-screen  mx-auto px-8 relative bg-gradient-to-br from-slate-950 via-slate-900 to-orange-900  overflow-hidden">
        <div className="p-10">
          <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-slate-900/60 backdrop-blur-sm rounded-full border-2 border-orange-400/30 hover:bg-slate-800/60 hover:border-orange-400/50 transition-all duration-300 group text-sm font-mono font-bold text-white shadow-[0_0_20px_rgba(251,146,60,0.2)]"
            >
              <Home className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300 text-orange-400" />
              <span className="hidden sm:inline">{t('backToHome')}</span>
              
              <ArrowRight className="h-4 w-4 ml-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300 text-orange-400" />
            </Link>
        </div>

      <div className="absolute  inset-0 bg-[linear-gradient(rgba(251,146,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
        {/* Floating background particles */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-conic from-orange-500/15 via-amber-500/15 to-yellow-500/15 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-conic from-amber-500/10 via-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
        <div className="absolute top-20 left-20 w-2 h-2 bg-orange-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-amber-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1s' }}></div>

        {/* Main Content Box */}
        <div className=" max-w-5xl mx-auto mt-16 bg-slate-900/60 backdrop-blur-xl border-2 border-orange-400/30 rounded-3xl shadow-2xl shadow-orange-500/20 p-8 sm:p-12">

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-black mb-10 bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-200 to-amber-200 uppercase font-mono drop-shadow-[0_0_20px_rgba(251,146,60,0.3)]">
            {t("title")}
          </h1>

          {/* Sections */}
          <section className="space-y-10 text-sm sm:text-base leading-relaxed">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="p-6 bg-slate-900/40 backdrop-blur-xl border border-orange-400/20 rounded-2xl hover:border-orange-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
              >
                <h2 className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 mb-4 uppercase tracking-wider font-mono">
                  {t(`section${index + 1}.title`)}
                </h2>
                <p className="text-slate-300 font-mono leading-relaxed">
                  {t(`section${index + 1}.description`)}
                </p>
              </div>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
