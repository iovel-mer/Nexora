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
      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-orange-900 relative overflow-hidden">
        
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.04)_2px,transparent_2px),linear-gradient(90deg,rgba(251,146,60,0.04)_2px,transparent_2px)] bg-[size:60px_60px]"></div>
        
        {/* Crypto Background Orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-conic from-orange-500/15 via-amber-500/15 to-yellow-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-conic from-amber-500/10 via-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-orange-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-amber-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>

        <div className="relative z-10 px-6 py-12">
          <div className="max-w-6xl mx-auto">
            
            {/* Header Section */}
            <div className="text-center mb-16">
               <Link
                  href="/"
                  className='inline-flex items-center px-6 py-3 bg-slate-900/60 backdrop-blur-sm rounded-full border-2 border-orange-400/30 hover:bg-slate-800/60 hover:border-orange-400/50 transition-all duration-300 group text-sm font-mono font-bold text-white shadow-[0_0_20px_rgba(251,146,60,0.2)]'
                >
                  <Home className='h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300 text-orange-400' />
                  {t('backToHome')}
                  <ArrowRight className='h-4 w-4 ml-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300 text-orange-400' />
                </Link>

              <h1 className="text-6xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-200 to-amber-200 mt-8 animate-pulse uppercase font-mono drop-shadow-[0_0_30px_rgba(251,146,60,0.4)]">
                {t("title")}
              </h1>
              
              <p className="text-2xl text-orange-100 max-w-4xl mx-auto leading-relaxed font-mono">
                {t("description")}
              </p>
            </div>

            {/* Cookie Content Layout */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              
              {/* Left Column */}
              <div className="space-y-8">
                
                {/* Section 3 - Network & Security */}
                <div className="group relative bg-slate-900/60 backdrop-blur-xl border-2 border-orange-400/20 rounded-3xl p-8 hover:border-orange-400/40 transition-all duration-500 overflow-hidden shadow-2xl shadow-orange-500/10">
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-full translate-y-10 -translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-amber-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <h2 className="text-3xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 flex items-center gap-3 uppercase font-mono">
                      {/* <span className="text-4xl">🌐</span> */}
                      {t("section3.title")}
                    </h2>
                    <p className="text-lg text-slate-300 leading-relaxed font-mono">{t("section3.text")}</p>
                  </div>
                </div>

                {/* Section 5 - User Consent */}
                <div className="group relative bg-slate-900/60 backdrop-blur-xl border-2 border-green-400/20 rounded-3xl p-8 hover:border-green-400/40 transition-all duration-500 overflow-hidden shadow-2xl shadow-green-500/10">
                  <div className="absolute top-1/2 right-0 w-16 h-16 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full translate-x-8 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-emerald-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <h2 className="text-3xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 flex items-center gap-3 uppercase font-mono">
                      {/* <span className="text-4xl">✅</span> */}
                      {t("section5.title")}
                    </h2>
                    <p className="text-lg text-slate-300 leading-relaxed font-mono">{t("section5.text")}</p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                
                {/* Section 2 - Cookie Types */}
                <div className="group relative bg-slate-900/60 backdrop-blur-xl border-2 border-blue-400/20 rounded-3xl p-8 hover:border-blue-400/40 transition-all duration-500 overflow-hidden shadow-2xl shadow-blue-500/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  <div className="relative z-10">
                    <h2 className="text-3xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center gap-3 uppercase font-mono">
                      {/* <span className="text-4xl">📊</span> */}
                      {t("section2.title")}
                    </h2>
                    <div className="space-y-4">
                      {t.raw("section2.items").map((item: string, i: number) => (
                        <div key={i} className="flex items-start gap-4 p-4 bg-slate-800/40 backdrop-blur-sm border border-orange-400/20 rounded-2xl hover:bg-slate-700/40 hover:border-orange-400/30 transition-all duration-300">
                          <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                          <div className="text-slate-300 leading-relaxed font-mono" dangerouslySetInnerHTML={{ __html: item }} />
                        </div>
                      ))}
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