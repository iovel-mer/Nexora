"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "../components/Header/Header"
import { ArrowRight, Home } from "lucide-react"

const PrivacyPolicyPage = () => {
  const t = useTranslations("Privacy")

  return (
    <>
      <Header />
      <div className="min-h-screen mx-auto px-3 sm:px-4 md:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-orange-900 relative overflow-hidden">
        {/* Back to Home Button */}
        <div className='px-3 sm:px-6 lg:px-10 py-6 sm:py-8 lg:py-10'>
          <Link
            href="/"
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-slate-900/60 backdrop-blur-sm rounded-full border-2 border-orange-400/30 hover:bg-slate-800/60 hover:border-orange-400/50 transition-all duration-300 group text-xs sm:text-sm font-mono font-bold text-white shadow-[0_0_20px_rgba(251,146,60,0.2)]"
          >
            <Home className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 group-hover:-translate-x-1 transition-transform duration-300 text-orange-400" />
            <span className="sm:block">{t('backToHome')}</span>
            
            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300 text-orange-400" />
          </Link>
        </div>

        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.03)_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:30px_30px] md:bg-[size:40px_40px] pointer-events-none"></div>
        
        {/* Crypto Effects - Hidden on small screens */}
        <div className="hidden sm:block absolute top-20 right-20 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br from-orange-500/15 to-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="hidden sm:block absolute bottom-20 left-20 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Floating Particles - Hidden on mobile */}
        <div className="hidden sm:block absolute top-40 left-40 w-2 h-2 bg-orange-400 rounded-full animate-bounce opacity-60"></div>
        <div className="hidden sm:block absolute top-60 right-60 w-1 h-1 bg-amber-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
        <div className="hidden lg:block absolute bottom-60 left-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>
        
        <div className="relative z-10 px-3 sm:px-6 py-8 sm:py-12 lg:py-16">
          <div className="max-w-5xl mx-auto">
            
            {/* Header Section */}
            <div className="mb-8 sm:mb-12">
              <div className="text-center mb-6 sm:mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-white via-orange-200 to-amber-200 bg-clip-text text-transparent uppercase font-mono drop-shadow-[0_0_30px_rgba(251,146,60,0.4)] leading-tight">
                  {t("title")}
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed font-mono px-4 sm:px-0">
                  {t("description")}
                </p>
                <div className="mt-4 sm:mt-6 inline-block px-4 sm:px-6 py-2 sm:py-3 bg-orange-500/20 backdrop-blur-sm border-2 border-orange-400/40 rounded-full text-orange-300 text-xs sm:text-sm font-mono font-bold shadow-[0_0_15px_rgba(251,146,60,0.3)]">
                  {t("lastUpdated")}
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-6 sm:space-y-8">
              {Array.from({ length: 2 }, (_, i) => {
                const section = i + 1
                return (
                  <div 
                    key={section}
                    className="group relative bg-slate-900/60 backdrop-blur-xl border-2 border-orange-400/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-10 hover:bg-slate-900/70 hover:border-orange-400/40 transition-all duration-500 overflow-hidden shadow-2xl shadow-orange-500/10"
                  >
                    {/* Section Number Badge */}
                    <div className="absolute top-3 sm:top-4 lg:top-6 right-3 sm:right-4 lg:right-6 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-black text-sm sm:text-base lg:text-lg shadow-lg shadow-orange-500/30">
                      {section}
                    </div>
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"></div>
                    
                    <div className="relative z-10 pr-10 sm:pr-12 lg:pr-16">
                      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 group-hover:from-orange-300 group-hover:to-amber-300 transition-all duration-300 uppercase tracking-wider font-mono leading-tight">
                        {t(`section${section}.title`)}
                      </h2>
                      
                      <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed mb-4 sm:mb-6 group-hover:text-slate-200 transition-colors duration-300 font-mono">
                        {t(`section${section}.description`)}
                      </p>
                      
                      {t.raw(`section${section}.list`)?.length > 0 && (
                        <div className="bg-slate-800/40 backdrop-blur-sm border border-orange-400/20 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                          <ul className="space-y-2 sm:space-y-3">
                            {t.raw(`section${section}.list`).map((item: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-2 sm:gap-3 text-slate-300">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                                <span className="text-sm sm:text-base leading-relaxed font-mono">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicyPage