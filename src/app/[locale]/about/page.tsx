"use client";

import Link from "next/link";
import { Header } from "../components/Header/Header";
import { useLocale, useTranslations } from "next-intl";
import { Home, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  const t = useTranslations("about");
  const locale = useLocale()

  return (
    <>
      <Header />
      <section className="w-full  mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 relative bg-gradient-to-br from-slate-950 via-slate-900 to-orange-900 overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* Crypto Effects - Responsive */}
        <div className="absolute top-1/4 left-4 sm:left-8 md:left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gradient-conic from-orange-500/15 via-amber-500/15 to-yellow-500/15 rounded-full blur-2xl sm:blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/4 right-4 sm:right-8 md:right-1/4 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-gradient-conic from-amber-500/10 via-orange-500/10 to-red-500/10 rounded-full blur-2xl sm:blur-3xl animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
        
        {/* Floating Particles - Responsive */}
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-20 sm:top-40 right-16 sm:right-32 w-1 h-1 bg-amber-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-16 sm:bottom-32 left-1/3 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-yellow-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>

        <div className="  relative z-10">
          {/* Back to Home Button - Fixed Size */}
          <div className="mb-6 sm:mb-8">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-slate-900/60 backdrop-blur-sm rounded-full border-2 border-orange-400/30 hover:bg-slate-800/60 hover:border-orange-400/50 transition-all duration-300 group text-sm font-mono font-bold text-white shadow-[0_0_20px_rgba(251,146,60,0.2)]"
            >
              <Home className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300 text-orange-400" />
              <span className="hidden sm:inline">{t('backToHome')}</span>
              
              <ArrowRight className="h-4 w-4 ml-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300 text-orange-400" />
            </Link>
          </div>

          {/* HERO SECTION */}
          <section className="py-6 sm:py-8 md:py-10 text-center px-4 sm:px-6 md:px-12 max-w-3xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-200 to-amber-200 mb-4 sm:mb-6 tracking-wide uppercase font-mono drop-shadow-[0_0_20px_rgba(251,146,60,0.3)]">
              {t("title")}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-orange-100 max-w-xl mx-auto font-mono leading-relaxed">
              {t("subtitle")}
            </p>
          </section>

          {/* CONTENT SECTIONS */}
          <section className="max-w-2xl mx-auto px-4 sm:px-6 md:px-12 pb-16 sm:pb-24 md:pb-32 space-y-8 sm:space-y-12 md:space-y-16">
            <div className="text-center p-4 sm:p-6 md:p-8 bg-slate-900/40 backdrop-blur-xl border-2 border-orange-400/20 rounded-xl sm:rounded-2xl shadow-2xl shadow-orange-500/10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 mb-4 sm:mb-6 uppercase tracking-wider font-mono">
                {t("missionTitle")}
              </h2>
              <p className="text-slate-300 leading-relaxed font-mono text-sm sm:text-base">{t("missionText")}</p>
            </div>

            <div className="text-center p-4 sm:p-6 md:p-8 bg-slate-900/40 backdrop-blur-xl border-2 border-orange-400/20 rounded-xl sm:rounded-2xl shadow-2xl shadow-orange-500/10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 mb-4 sm:mb-6 uppercase tracking-wider font-mono">
                {t("whoTitle")}
              </h2>
              <p className="text-slate-300 leading-relaxed font-mono text-sm sm:text-base">{t("whoText")}</p>
            </div>

            <div className="text-center p-4 sm:p-6 md:p-8 bg-slate-900/40 backdrop-blur-xl border-2 border-orange-400/20 rounded-xl sm:rounded-2xl shadow-2xl shadow-orange-500/10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 mb-4 sm:mb-6 uppercase tracking-wider font-mono">
                {t("whyTitle")}
              </h2>
              <p className="text-slate-300 leading-relaxed font-mono text-sm sm:text-base">{t("whyText")}</p>
            </div>

            <div className="pt-6 sm:pt-8 border-t-2 border-orange-400/30">
              <h2 className="text-lg sm:text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 mb-8 sm:mb-10 md:mb-12 text-center uppercase tracking-wider font-mono">
                {t("guidesTitle")}
              </h2>
              <div className="space-y-6 sm:space-y-8">
                <div className="text-center p-4 sm:p-5 md:p-6 bg-slate-900/30 backdrop-blur-xl border border-orange-400/20 rounded-lg sm:rounded-xl hover:border-orange-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20">
                  <h3 className="text-base sm:text-lg font-bold text-orange-200 mb-2 sm:mb-3 uppercase tracking-wide font-mono">
                    {t("value1Title")}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-mono">{t("value1Text")}</p>
                </div>
                <div className="text-center p-4 sm:p-5 md:p-6 bg-slate-900/30 backdrop-blur-xl border border-orange-400/20 rounded-lg sm:rounded-xl hover:border-orange-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20">
                  <h3 className="text-base sm:text-lg font-bold text-orange-200 mb-2 sm:mb-3 uppercase tracking-wide font-mono">
                    {t("value2Title")}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-mono">{t("value2Text")}</p>
                </div>
                <div className="text-center p-4 sm:p-5 md:p-6 bg-slate-900/30 backdrop-blur-xl border border-orange-400/20 rounded-lg sm:rounded-xl hover:border-orange-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20">
                  <h3 className="text-base sm:text-lg font-bold text-orange-200 mb-2 sm:mb-3 uppercase tracking-wide font-mono">
                    {t("value3Title")}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-mono">{t("value3Text")}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default AboutPage;