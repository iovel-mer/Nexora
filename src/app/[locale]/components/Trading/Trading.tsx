"use client"

import React from "react"
import { useLocale, useTranslations } from "next-intl"
import { CheckCircle, TrendingUp, Shield, Zap, DollarSign, HeadphonesIcon, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const Trading: React.FC = () => {
  const t = useTranslations("trade")
  const locale = useLocale();

  const featureIcons = [
    TrendingUp,
    Shield,
    Zap,
    DollarSign,
    HeadphonesIcon,
    Globe
  ]

  const features = [
    {
      icon: featureIcons[0],
      title: t("features.analytics.title"),
      description: t("features.analytics.description"),
      gradient: "from-orange-400 to-amber-500",
      glow: "shadow-orange-500/50"
    },
    {
      icon: featureIcons[1],
      title: t("features.security.title"),
      description: t("features.security.description"),
      gradient: "from-green-400 to-emerald-500",
      glow: "shadow-green-500/50"
    },
    {
      icon: featureIcons[2],
      title: t("features.speed.title"),
      description: t("features.speed.description"),
      gradient: "from-amber-400 to-yellow-500",
      glow: "shadow-amber-500/50"
    },
    {
      icon: featureIcons[3],
      title: t("features.fees.title"),
      description: t("features.fees.description"),
      gradient: "from-yellow-400 to-orange-500",
      glow: "shadow-yellow-500/50"
    },
    {
      icon: featureIcons[4],
      title: t("features.support.title"),
      description: t("features.support.description"),
      gradient: "from-orange-500 to-red-500",
      glow: "shadow-orange-500/50"
    },
    {
      icon: featureIcons[5],
      title: t("features.access.title"),
      description: t("features.access.description"),
      gradient: "from-amber-500 to-orange-600",
      glow: "shadow-amber-500/50"
    }
  ]

  return (
    <section className="relative py-16 px-4 mx-auto overflow-hidden min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
      {/* Bitcoin-style background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.04)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-1/3 left-1/5 w-64 h-64 bg-gradient-conic from-orange-500 via-amber-500 to-yellow-500 rounded-full blur-3xl opacity-20 animate-spin" style={{animationDuration: '15s'}}></div>
      <div className="absolute bottom-1/3 right-1/5 w-72 h-72 bg-gradient-conic from-amber-500 via-orange-500 to-red-500 rounded-full blur-3xl opacity-20 animate-spin" style={{animationDuration: '18s', animationDirection: 'reverse'}}></div>
      
      {/* Floating Particles */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-orange-400 rounded-full animate-ping opacity-60"></div>
      <div className="absolute top-32 right-20 w-2 h-2 bg-amber-400 rounded-full animate-ping opacity-60" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-32 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-60" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 right-40 w-2 h-2 bg-orange-500 rounded-full animate-ping opacity-60" style={{animationDelay: '3s'}}></div>
      
      <div className="text-center relative z-10 max-w-6xl mx-auto">
        {/* Crypto-style Badge */}
        <div className="mb-8 inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-lg border-2 border-orange-400/40 px-6 py-3 text-sm font-bold uppercase tracking-widest text-orange-300 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105">
          <CheckCircle className="w-4 h-4 text-orange-400 animate-pulse" />
          <span className="text-orange-100">{t("badge")}</span>
        </div>

        {/* Crypto-inspired Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 uppercase tracking-wider">
          <span className="text-white font-extrabold drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            {t("title.line1")}
          </span>
          <br />
          <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent font-black drop-shadow-[0_0_20px_rgba(251,146,60,0.5)] animate-pulse">
            {t("title.line2")}
          </span>
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-300 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
          {t("description")}
        </p>

        {/* Crypto Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl p-6 border-2 border-slate-700/50 hover:border-orange-400/70 transition-all duration-500 hover:scale-105 overflow-hidden transform hover:-rotate-1"
              >
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
                
                {/* Icon */}
                <div className="relative mb-4">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg ${feature.glow} group-hover:shadow-2xl group-hover:${feature.glow} transition-all duration-300 transform group-hover:rotate-12`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative">
                  <h3 className="text-lg font-bold mb-3 text-orange-100 group-hover:text-white transition-colors font-mono uppercase tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Crypto Corner Effects */}
                <div className="absolute top-1 left-1 w-4 h-4 border-l-2 border-t-2 border-orange-400 opacity-60 group-hover:opacity-100 transition-opacity transform group-hover:scale-110" />
                <div className="absolute top-1 right-1 w-4 h-4 border-r-2 border-t-2 border-orange-400 opacity-60 group-hover:opacity-100 transition-opacity transform group-hover:scale-110" />
                <div className="absolute bottom-1 left-1 w-4 h-4 border-l-2 border-b-2 border-orange-400 opacity-60 group-hover:opacity-100 transition-opacity transform group-hover:scale-110" />
                <div className="absolute bottom-1 right-1 w-4 h-4 border-r-2 border-b-2 border-orange-400 opacity-60 group-hover:opacity-100 transition-opacity transform group-hover:scale-110" />
                
                {/* Crypto tier indicator */}
                <div className="absolute top-2 right-2 text-xs font-mono text-orange-400 opacity-50 group-hover:opacity-100 transition-opacity">
                  TIER {index + 1}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}