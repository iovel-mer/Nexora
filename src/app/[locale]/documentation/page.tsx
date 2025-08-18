"use client";

import { useTranslations } from "next-intl";
import { Header } from "../components/Header/Header";
import Link from "next/link";
import { ArrowRight, Home, BookOpen, Shield, TrendingUp, Lightbulb } from "lucide-react";

const page = () => {
  const t = useTranslations("docs");

  return (
    <>
      <Header />
      <main className="min-h-screen container mx-auto relative bg-gradient-to-br from-slate-950 via-slate-900 to-orange-900 text-white py-12 px-6 md:px-20 overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        {/* Crypto Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,146,60,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(245,158,11,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.1),transparent_60%)]"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute top-40 left-40 w-2 h-2 bg-orange-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-60 right-60 w-1 h-1 bg-amber-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-60 left-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>

        <div className="p-10">
         <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-slate-900/60 backdrop-blur-sm rounded-full border-2 border-orange-400/30 hover:bg-slate-800/60 hover:border-orange-400/50 transition-all duration-300 group text-sm font-mono font-bold text-white shadow-[0_0_20px_rgba(251,146,60,0.2)]"
            >
              <Home className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300 text-orange-400" />
              <span className="hidden sm:inline">{t('backToHome')}</span>
              
              <ArrowRight className="h-4 w-4 ml-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300 text-orange-400" />
            </Link>

          <div className=" mx-auto mt-8 space-y-12">
            <div className="text-center mb-16">
              <h1 className="text-6xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-200 to-amber-200 uppercase font-mono drop-shadow-[0_0_30px_rgba(251,146,60,0.4)]">
                {t("title")}
              </h1>
            </div>

            {/* SECTION TEMPLATE */}
            {[
              {
                icon: <Shield className="w-6 h-6 text-white" />,
                title: t("blockchain.title"),
                text: t("blockchain.text"),
                colors: "from-blue-500 to-cyan-600",
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-white" />,
                title: t("popular.title"),
                colors: "from-orange-500 to-amber-600",
                content: (
                  <ul className="space-y-4 text-slate-300 text-lg font-mono">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-3"></div>
                      <span><strong className="text-orange-300">Bitcoin (BTC):</strong> {t("popular.bitcoin")}</span>
                    </li>
                  </ul>
                ),
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-white" />,
                title: t("buy.title"),
                colors: "from-green-500 to-emerald-600",
                content: (
                  <ol className="space-y-4 text-slate-300 text-lg font-mono">
                    {[1, 2].map((step) => (
                      <li key={step} className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-3"></div>
                        <span>{t(`buy.step${step}`)}</span>
                      </li>
                    ))}
                  </ol>
                ),
              },
              {
                icon: <Lightbulb className="w-6 h-6 text-white" />,
                title: t("tips.title"),
                colors: "from-purple-500 to-violet-600",
                content: (
                  <ul className="space-y-4 text-slate-300 text-lg font-mono">
                    {[1, 2].map((tip) => (
                      <li key={tip} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-3"></div>
                        <span>{t(`tips.tip${tip}`)}</span>
                      </li>
                    ))}
                  </ul>
                ),
              },
            ].map(({ icon, title, text, content, colors }, i) => (
              <section
                key={i}
                className="relative bg-slate-900/60 backdrop-blur-xl border-2 border-orange-400/20 rounded-3xl p-8 shadow-2xl overflow-hidden hover:border-orange-400/40 transition-all duration-300"
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${colors} rounded-xl flex items-center justify-center shadow-lg`}>
                      {icon}
                    </div>
                    <h2 className="text-3xl font-black mb-0 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 uppercase font-mono">{title}</h2>
                  </div>
                  {text && <p className="text-slate-300 text-lg leading-relaxed font-mono">{text}</p>}
                  {content}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default page;