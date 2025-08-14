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
      <section className="min-h-screen container mx-auto px-8 relative bg-gradient-to-br from-slate-950 via-slate-900 to-orange-900  overflow-hidden">
         <div className='p-10'>
                <Link
                  href={`/${locale}`}
                  className='inline-flex items-center px-6 py-3 bg-slate-900/60 backdrop-blur-sm rounded-full border-2 border-orange-400/30 hover:bg-slate-800/60 hover:border-orange-400/50 transition-all duration-300 group text-sm font-mono font-bold text-white shadow-[0_0_20px_rgba(251,146,60,0.2)]'
                >
                  <Home className='h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300 text-orange-400' />
                  {t('backToHome')}
                  <ArrowRight className='h-4 w-4 ml-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300 text-orange-400' />
                </Link>
              </div>
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* Crypto Effects */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-conic from-orange-500/15 via-amber-500/15 to-yellow-500/15 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-conic from-amber-500/10 via-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-orange-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-amber-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>

        {/* HERO SECTION */}
        <section className="py-10 md:py-10 text-center px-6 md:px-12 max-w-3xl mx-auto relative z-10">
          

          <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-200 to-amber-200 mb-6 tracking-wide uppercase font-mono drop-shadow-[0_0_20px_rgba(251,146,60,0.3)]">
            {t("title")}
          </h1>
          <p className="text-lg text-orange-100 max-w-xl mx-auto font-mono leading-relaxed">
            {t("subtitle")}
          </p>
        </section>

        {/* CONTENT SECTIONS */}
        <section className="max-w-2xl mx-auto px-6 md:px-12 pb-32 relative z-10 space-y-16">
          <div className="text-center p-8 bg-slate-900/40 backdrop-blur-xl border-2 border-orange-400/20 rounded-2xl shadow-2xl shadow-orange-500/10">
            <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 mb-6 uppercase tracking-wider font-mono">
              {t("missionTitle")}
            </h2>
            <p className="text-slate-300 leading-relaxed font-mono">{t("missionText")}</p>
          </div>

          <div className="text-center p-8 bg-slate-900/40 backdrop-blur-xl border-2 border-orange-400/20 rounded-2xl shadow-2xl shadow-orange-500/10">
            <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 mb-6 uppercase tracking-wider font-mono">
              {t("whoTitle")}
            </h2>
            <p className="text-slate-300 leading-relaxed font-mono">{t("whoText")}</p>
          </div>

          <div className="text-center p-8 bg-slate-900/40 backdrop-blur-xl border-2 border-orange-400/20 rounded-2xl shadow-2xl shadow-orange-500/10">
            <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 mb-6 uppercase tracking-wider font-mono">
              {t("whyTitle")}
            </h2>
            <p className="text-slate-300 leading-relaxed font-mono">{t("whyText")}</p>
          </div>

          <div className="pt-8 border-t-2 border-orange-400/30">
            <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 mb-12 text-center uppercase tracking-wider font-mono">
              {t("guidesTitle")}
            </h2>
            <div className="space-y-8">
              <div className="text-center p-6 bg-slate-900/30 backdrop-blur-xl border border-orange-400/20 rounded-xl hover:border-orange-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20">
                <h3 className="text-lg font-bold text-orange-200 mb-3 uppercase tracking-wide font-mono">
                  {t("value1Title")}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-mono">{t("value1Text")}</p>
              </div>
              <div className="text-center p-6 bg-slate-900/30 backdrop-blur-xl border border-orange-400/20 rounded-xl hover:border-orange-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20">
                <h3 className="text-lg font-bold text-orange-200 mb-3 uppercase tracking-wide font-mono">
                  {t("value2Title")}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-mono">{t("value2Text")}</p>
              </div>
              <div className="text-center p-6 bg-slate-900/30 backdrop-blur-xl border border-orange-400/20 rounded-xl hover:border-orange-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20">
                <h3 className="text-lg font-bold text-orange-200 mb-3 uppercase tracking-wide font-mono">
                  {t("value3Title")}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-mono">{t("value3Text")}</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default AboutPage;