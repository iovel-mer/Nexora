"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Header } from "../components/Header/Header"
import { ArrowRight, Home } from "lucide-react"

export default function CookiePage() {
  const t = useTranslations("Cookie")

  return (
    <>
      <Header />
      <main className="w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-orange-900 px-3 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden">
        {/* Crypto Background Orbs - Responsive */}
        <div className="absolute top-1/4 right-4 sm:right-8 md:right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-conic from-orange-500/15 via-amber-500/15 to-yellow-500/15 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-4 sm:left-8 md:left-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gradient-conic from-amber-500/10 via-orange-500/10 to-red-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

        {/* Floating Particles - Responsive */}
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-20 sm:top-40 right-16 sm:right-32 w-1 h-1 bg-amber-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-16 sm:bottom-32 left-1/3 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-yellow-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>

        <div className="container mx-auto relative z-10">
          {/* Back to Home Button - Fixed Size */}
          <div className="mb-6 sm:mb-8">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-slate-900/60 backdrop-blur-sm rounded-full border-2 border-orange-400/30 hover:bg-slate-800/60 hover:border-orange-400/50 transition-all duration-300 group text-sm font-mono font-bold text-white shadow-[0_0_20px_rgba(251,146,60,0.2)]"
            >
              <Home className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300 text-orange-400" />
              <span className="hidden sm:inline">{t('backToHome')}</span>
              <span className="sm:hidden">Home</span>
              <ArrowRight className="h-4 w-4 ml-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300 text-orange-400" />
            </Link>
          </div>

          <div className="px-4 sm:px-6 py-8 sm:py-12">
            <div className="max-w-6xl mx-auto">
              
              {/* Header Section */}
              <div className="text-center mb-8 sm:mb-12 md:mb-16">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-200 to-amber-200 animate-pulse uppercase font-mono drop-shadow-[0_0_30px_rgba(251,146,60,0.4)] px-2">
                  {t("title")}
                </h1>
                
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-orange-100 max-w-4xl mx-auto leading-relaxed font-mono px-4">
                  {t("description")}
                </p>
              </div>

              {/* Cookie Content Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-12 md:mb-16">
                
                {/* Left Column */}
                <div className="space-y-6 sm:space-y-8">
                  
                  {/* Section 3 - Network & Security */}
                  <div className="group relative bg-slate-900/60 backdrop-blur-xl border-2 border-orange-400/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:border-orange-400/40 transition-all duration-500 overflow-hidden shadow-2xl shadow-orange-500/10">
                    <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-full translate-y-6 sm:translate-y-8 md:translate-y-10 -translate-x-6 sm:-translate-x-8 md:-translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-amber-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 flex items-center gap-2 sm:gap-3 uppercase font-mono">
                        {t("section3.title")}
                      </h2>
                      <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-mono">{t("section3.text")}</p>
                    </div>
                  </div>

                  {/* Section 5 - User Consent */}
                  <div className="group relative bg-slate-900/60 backdrop-blur-xl border-2 border-green-400/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:border-green-400/40 transition-all duration-500 overflow-hidden shadow-2xl shadow-green-500/10">
                    <div className="absolute top-1/2 right-0 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full translate-x-5 sm:translate-x-6 md:translate-x-8 group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-emerald-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 flex items-center gap-2 sm:gap-3 uppercase font-mono">
                        {t("section5.title")}
                      </h2>
                      <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-mono">{t("section5.text")}</p>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6 sm:space-y-8">
                  
                  {/* Section 2 - Cookie Types */}
                  <div className="group relative bg-slate-900/60 backdrop-blur-xl border-2 border-blue-400/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:border-blue-400/40 transition-all duration-500 overflow-hidden shadow-2xl shadow-blue-500/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"></div>
                    <div className="relative z-10">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 sm:mb-5 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center gap-2 sm:gap-3 uppercase font-mono">
                        {t("section2.title")}
                      </h2>
                      <div className="space-y-3 sm:space-y-4">
                        {t.raw("section2.items").map((item: string, i: number) => (
                          <div key={i} className="flex items-start gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 bg-slate-800/40 backdrop-blur-sm border border-orange-400/20 rounded-xl sm:rounded-2xl hover:bg-slate-700/40 hover:border-orange-400/30 transition-all duration-300">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full mt-1 sm:mt-2 flex-shrink-0 animate-pulse"></div>
                            <div className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-mono" dangerouslySetInnerHTML={{ __html: item }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}