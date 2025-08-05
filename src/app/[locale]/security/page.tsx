'use client';


import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ShieldCheck,
  Lock,
  Banknote,
  Gem,
  Lightbulb,
  FileText,
  Fingerprint,
  Scale,
  Landmark,
  Wallet,
  ClipboardList,
  Eye,
  ArrowRight,
  CheckCircle,
  Home,
  Shield,
  Bitcoin,
} from 'lucide-react';
import { Header } from '../components/Header/Header';
import { useTranslations } from 'next-intl';

export default function SecurityPage() {
  const t = useTranslations('security');  

  return (
    <>
      <Header />
      <main className='min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-orange-900 text-white relative overflow-hidden'>
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* Crypto Effects */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute -top-20 -right-20 w-72 h-72 bg-orange-400/15 rounded-full blur-2xl animate-pulse' />
          <div className='absolute bottom-10 left-1/3 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse delay-1000' />
          <div className='absolute top-1/3 -left-32 w-64 h-64 bg-yellow-500/10 rounded-full blur-2xl animate-pulse delay-2000' />
        </div>

        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-orange-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-amber-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>

        <div className='relative z-10'>
          <section className='container mx-auto text-center pt-20 pb-16 px-4 md:px-6'>
            <div className='animate-fade-in-up'>
              <div className='flex justify-start mb-8'>
                <Link
                  href="/"
                  className='inline-flex items-center px-6 py-3 bg-slate-900/60 backdrop-blur-sm rounded-full border-2 border-orange-400/30 hover:bg-slate-800/60 hover:border-orange-400/50 transition-all duration-300 group text-sm font-mono font-bold text-white shadow-[0_0_20px_rgba(251,146,60,0.2)]'
                >
                  <Home className='h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300 text-orange-400' />
                  {t('backToHome')}
                  <ArrowRight className='h-4 w-4 ml-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300 text-orange-400' />
                </Link>
              </div>

              <div className='inline-flex items-center px-6 py-3 bg-slate-900/50 backdrop-blur-sm rounded-full border-2 border-orange-400/40 mb-8 shadow-[0_0_25px_rgba(251,146,60,0.3)]'>
                <Shield className='h-5 w-5 text-orange-400 mr-2' />
                <span className='text-sm font-mono font-bold text-orange-200 uppercase tracking-wider'>{t('enhancedTrustVerification')}</span>
              </div>

              <h1 className='text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-200 to-amber-200 leading-tight uppercase font-mono drop-shadow-[0_0_30px_rgba(251,146,60,0.4)]'>
                {t('yourDigitalSafetyReimagined')}
              </h1>

              <p className='text-xl md:text-2xl text-orange-100 max-w-4xl mx-auto leading-relaxed mb-8 font-mono'>
                {t('securityDescription')}
              </p>

              <div className='flex flex-wrap justify-center gap-6 text-sm'>
                <div className='flex items-center px-4 py-2 bg-slate-900/40 backdrop-blur-sm border border-orange-400/30 rounded-full'>
                  <CheckCircle className='h-4 w-4 text-orange-400 mr-2' />
                  <span className='text-orange-200 font-mono'>{t('endToEndEncryption')}</span>
                </div>
                <div className='flex items-center px-4 py-2 bg-slate-900/40 backdrop-blur-sm border border-orange-400/30 rounded-full'>
                  <CheckCircle className='h-4 w-4 text-orange-400 mr-2' />
                  <span className='text-orange-200 font-mono'>{t('multiLayerAccess')}</span>
                </div>
                <div className='flex items-center px-4 py-2 bg-slate-900/40 backdrop-blur-sm border border-orange-400/30 rounded-full'>
                  <CheckCircle className='h-4 w-4 text-orange-400 mr-2' />
                  <span className='text-orange-200 font-mono'>{t('realTimeAudits')}</span>
                </div>
              </div>
            </div>
          </section>

          {/* Security Features Grid */}
          <section className='container mx-auto px-4 md:px-6 mb-20'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              
              {/* Advanced Encryption */}
              <Card className="group relative bg-slate-900/60 backdrop-blur-xl border-2 border-orange-400/20 text-white shadow-2xl shadow-orange-500/10 rounded-2xl overflow-hidden hover:border-orange-400/40 hover:shadow-orange-500/20 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-amber-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-orange-500/30">
                    <Lock className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 uppercase tracking-wider font-mono">
                    Advanced Encryption
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-slate-300 font-mono leading-relaxed">
                    Military-grade AES-256 encryption protects all your transactions and personal data with unbreakable security protocols.
                  </p>
                </CardContent>
              </Card>

              {/* Multi-Factor Authentication */}
              <Card className="group relative bg-slate-900/60 backdrop-blur-xl border-2 border-orange-400/20 text-white shadow-2xl shadow-orange-500/10 rounded-2xl overflow-hidden hover:border-orange-400/40 hover:shadow-orange-500/20 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-amber-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-amber-500/30">
                    <Fingerprint className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400 uppercase tracking-wider font-mono">
                    Multi-Factor Auth
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-slate-300 font-mono leading-relaxed">
                    Advanced biometric authentication and 2FA protocols ensure only you can access your crypto assets and trading account.
                  </p>
                </CardContent>
              </Card>

              {/* Cold Storage */}
              <Card className="group relative bg-slate-900/60 backdrop-blur-xl border-2 border-orange-400/20 text-white shadow-2xl shadow-orange-500/10 rounded-2xl overflow-hidden hover:border-orange-400/40 hover:shadow-orange-500/20 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-amber-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-yellow-500/30">
                    <Wallet className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 uppercase tracking-wider font-mono">
                    Cold Storage
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-slate-300 font-mono leading-relaxed">
                    98% of crypto assets stored offline in bank-grade cold storage vaults, completely isolated from internet threats.
                  </p>
                </CardContent>
              </Card>

              {/* Real-time Monitoring */}
              <Card className="group relative bg-slate-900/60 backdrop-blur-xl border-2 border-orange-400/20 text-white shadow-2xl shadow-orange-500/10 rounded-2xl overflow-hidden hover:border-orange-400/40 hover:shadow-orange-500/20 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-amber-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-red-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-orange-600/30">
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 uppercase tracking-wider font-mono">
                    24/7 Monitoring
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-slate-300 font-mono leading-relaxed">
                    AI-powered threat detection monitors all activities 24/7, instantly identifying and neutralizing suspicious behavior.
                  </p>
                </CardContent>
              </Card>

              {/* Regulatory Compliance */}
              <Card className="group relative bg-slate-900/60 backdrop-blur-xl border-2 border-orange-400/20 text-white shadow-2xl shadow-orange-500/10 rounded-2xl overflow-hidden hover:border-orange-400/40 hover:shadow-orange-500/20 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-amber-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-green-500/30">
                    <Scale className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 uppercase tracking-wider font-mono">
                    Compliance
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-slate-300 font-mono leading-relaxed">
                    Fully regulated and compliant with global financial standards including SOC 2, ISO 27001, and PCI DSS certifications.
                  </p>
                </CardContent>
              </Card>

              {/* Insurance Protection */}
              <Card className="group relative bg-slate-900/60 backdrop-blur-xl border-2 border-orange-400/20 text-white shadow-2xl shadow-orange-500/10 rounded-2xl overflow-hidden hover:border-orange-400/40 hover:shadow-orange-500/20 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-amber-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30">
                    <ShieldCheck className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 uppercase tracking-wider font-mono">
                    Insurance Coverage
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-slate-300 font-mono leading-relaxed">
                    $500M+ insurance coverage protects user funds against theft, hacking, and operational failures with Lloyd's of London.
                  </p>
                </CardContent>
              </Card>

            </div>
          </section>
        </div>
      </main>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </>
  );
}