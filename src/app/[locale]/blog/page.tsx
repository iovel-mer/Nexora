"use client";

import { useTranslations } from "next-intl";
import { Header } from "../components/Header/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Zap,
  Shield,
  HelpCircle,
  Clock,
  User,
  Home,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const Page = () => {
  const t = useTranslations("blog");

  const tableOfContents = [
    { id: "overview", title: t("overview.title"), icon: BookOpen },
    { id: "quickStart", title: t("quickStart.title"), icon: Zap },
    { id: "authentication", title: t("authentication.title"), icon: Shield },
    { id: "faq", title: t("faq.title"), icon: HelpCircle },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header />
    <div className="min-h-screen container mx-auto bg-gradient-to-br from-slate-950 via-slate-900 to-orange-900 relative">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* Crypto Background Effects */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-orange-500/15 to-amber-500/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      {/* Floating Particles */}
      <div className="absolute top-40 left-40 w-2 h-2 bg-orange-400 rounded-full animate-bounce opacity-60"></div>
      <div className="absolute top-60 right-60 w-1 h-1 bg-amber-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-60 left-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>

      <main className=" py-8 md:py-12 lg:py-16">
        <div className="p-10">
          <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-slate-900/60 backdrop-blur-sm rounded-full border-2 border-orange-400/30 hover:bg-slate-800/60 hover:border-orange-400/50 transition-all duration-300 group text-sm font-mono font-bold text-white shadow-[0_0_20px_rgba(251,146,60,0.2)]"
            >
              <Home className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300 text-orange-400" />
              <span className="hidden sm:inline">{t('backToHome')}</span>
              
              <ArrowRight className="h-4 w-4 ml-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300 text-orange-400" />
            </Link>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-200 to-amber-200 md:text-5xl lg:text-6xl mb-6 uppercase font-mono drop-shadow-[0_0_30px_rgba(251,146,60,0.4)]">
              {t("title")}
            </h1>
            <p className="text-xl text-orange-100 max-w-4xl mx-auto leading-relaxed font-mono">
              {t("subtitle")}
            </p>

            {/* Meta Info */}
            <div className="flex items-center justify-center gap-6 mt-8 text-sm">
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 text-orange-200 rounded-full border border-orange-400/30 font-mono">
                <Clock className="w-4 h-4 text-orange-400" />
                <span>{t("meta.readTime")}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 text-orange-200 rounded-full border border-orange-400/30 font-mono">
                <User className="w-4 h-4 text-orange-400" />
                <span>{t("meta.updated")}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <article className="prose prose-lg prose-gray max-w-none">
              
              <section id="overview" className="mb-12">
                <Card className="bg-slate-900/60 backdrop-blur-xl border-2 border-orange-400/20 shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 hover:border-orange-400/40 rounded-3xl overflow-hidden">
                  <CardContent className="p-8 text-white">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl shadow-lg shadow-orange-500/30">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 m-0 uppercase font-mono">
                        {t("overview.title")}
                      </h2>
                    </div>
                    <p className="text-slate-300 leading-relaxed m-0 font-mono text-lg">
                      {t("overview.content")}
                    </p>
                  </CardContent>
                </Card>
              </section>

              

             
            </article>
          </div>
        </div>
      </main>
    </div>
    </>
  );
};

export default Page;