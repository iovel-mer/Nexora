"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Header } from "../components/Header/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sparkles,
  TrendingUp,
  Shield,
  Users,
  Zap,
  Home,
  ArrowRight,
} from "lucide-react";

const Page = () => {
  const t = useTranslations("help");

  const helpCategories = [
    {
      icon: TrendingUp,
      title: t("categories.trading.title"),
      description: t("categories.trading.description"),
      gradient: "from-orange-400 via-amber-500 to-yellow-600",
      bgGlow: "bg-gradient-to-br from-orange-500/20 to-yellow-500/20",
      items: [
        t("categories.trading.items.0"),
        t("categories.trading.items.1"),
        t("categories.trading.items.2"),
      ],
    },
    {
      icon: Shield,
      title: t("categories.security.title"),
      description: t("categories.security.description"),
      gradient: "from-green-400 via-emerald-500 to-teal-600",
      bgGlow: "bg-gradient-to-br from-green-500/20 to-teal-500/20",
      items: [
        t("categories.security.items.0"),
        t("categories.security.items.1"),
        t("categories.security.items.2"),
      ],
    },
    {
      icon: Users,
      title: t("categories.account.title"),
      description: t("categories.account.description"),
      gradient: "from-blue-400 via-cyan-500 to-indigo-600",
      bgGlow: "bg-gradient-to-br from-blue-500/20 to-indigo-500/20",
      items: [
        t("categories.account.items.0"),
        t("categories.account.items.1"),
        t("categories.account.items.2"),
      ],
    },
    {
      icon: Zap,
      title: t("categories.features.title"),
      description: t("categories.features.description"),
      gradient: "from-amber-400 via-orange-500 to-red-600",
      bgGlow: "bg-gradient-to-br from-amber-500/20 to-red-500/20",
      items: [
        t("categories.features.items.0"),
        t("categories.features.items.1"),
        t("categories.features.items.2"),
      ],
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-gradient-to-br from-slate-950 via-slate-900 to-orange-900 relative px-4 py-16 sm:px-6 lg:px-8 mx-auto min-h-screen overflow-hidden text-white">
          <div className='flex justify-start mt-2'>
                <Link
                  href="/"
                  className='inline-flex items-center px-6 py-3 bg-slate-900/60 backdrop-blur-sm rounded-full border-2 border-orange-400/30 hover:bg-slate-800/60 hover:border-orange-400/50 transition-all duration-300 group text-sm font-mono font-bold text-white shadow-[0_0_20px_rgba(251,146,60,0.2)]'
                >
                  <Home className='h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300 text-orange-400' />
                  {t('backToHome')}
                  <ArrowRight className='h-4 w-4 ml-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300 text-orange-400' />
                </Link>
              </div>
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        {/* Crypto Background Orbs */}
        <div className="absolute top-20 right-16 w-64 h-64 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-gradient-to-br from-amber-500/15 to-yellow-500/15 rounded-full blur-3xl animate-bounce" style={{animationDuration: '6s'}}></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-gradient-to-br from-orange-500/15 to-red-500/15 rounded-full blur-2xl animate-ping" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-56 h-56 bg-gradient-to-br from-yellow-500/15 to-orange-500/15 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s'}}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-orange-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-amber-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>

        {/* Page Content */}
        <div className="relative z-10 max-w-7xl mx-auto mt-16">
          {/* Hero Section */}
          <section className="text-center mb-24">
 
            {/* Hero Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-slate-900/50 backdrop-blur-md rounded-full border-2 border-orange-400/40 mb-8 shadow-[0_0_25px_rgba(251,146,60,0.3)]">
              <Sparkles className="w-5 h-5 mr-2 text-orange-400 animate-pulse" />
              <span className="text-orange-200 font-mono font-bold uppercase tracking-wider">{t('helpCenter')}</span>
            </div>

            {/* Hero Title */}
            <h1 className="text-6xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-200 to-amber-200 leading-tight uppercase font-mono drop-shadow-[0_0_30px_rgba(251,146,60,0.4)]">
             {t('title')}
            </h1>
            <p className="text-orange-100 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-mono">
             {t('subtitle')}
            </p>
          </section>

          {/* Help Categories Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 uppercase font-mono">{t("browse.title")}</h2>
              <p className="text-slate-300 text-xl font-mono max-w-2xl mx-auto">{t("browse.subtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {helpCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <Card
                    key={index}
                    className="group relative bg-slate-900/60 backdrop-blur-xl border-2 border-orange-400/20 hover:border-orange-400/40 transition-all duration-500 hover:scale-110 cursor-pointer overflow-hidden rounded-3xl shadow-2xl shadow-orange-500/10"
                  >
                    {/* Enhanced Glow Effect */}
                    <div
                      className={`absolute -inset-1 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-2xl rounded-3xl`}
                    />
                    
                    {/* Background Glow Pattern */}
                    <div className={`absolute inset-0 ${category.bgGlow} opacity-40 group-hover:opacity-60 transition-opacity duration-500 rounded-3xl`}></div>

                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-3xl overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                        style={{
                          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                          maskComposite: 'xor',
                          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                          WebkitMaskComposite: 'xor',
                          padding: '2px'
                        }}
                      />
                    </div>

                    <CardHeader className="relative z-10 pb-4">
                      <div
                        className={`w-18 h-18 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}
                      >
                        <IconComponent className="w-9 h-9 text-white drop-shadow-lg" />
                      </div>
                      <CardTitle className="text-white text-xl font-black group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text transition-all duration-300 mb-3 uppercase font-mono">
                        {category.title}
                      </CardTitle>
                      <CardDescription className="text-slate-400 group-hover:text-slate-200 transition-colors duration-300 text-base font-mono leading-relaxed">
                        {category.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="relative z-10 pt-0 pb-6">
                        {category.items.map((item, itemIndex) => (
                          <p
                            key={itemIndex}
                            className="text-slate-500 text-sm hover:text-slate-200 transition-colors duration-300  flex items-center gap-3 group/item font-mono mb-2"
                          >
                            <span className="group-hover/item:translate-x-1 transition-transform duration-300">
                              {item}
                            </span>
                          </p>
                        ))}
                    </CardContent>
                    
                    {/* Enhanced Bottom Accent */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${category.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center rounded-b-3xl shadow-lg`}
                    />
                  </Card>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Page;