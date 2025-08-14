'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Cpu, Bitcoin, Rocket, Zap } from 'lucide-react';

export default function Footer() {
  const tFooter = useTranslations('footer');
  const locale = useLocale();

  const routeMapping = {
    'About Us': `/${locale}/about`,
    Security: `/${locale}/security`,
    'Help Center': `/${locale}/help`,
    'Contact Us': `/${locale}/contact`,
    Blog: `/${locale}/blog`,
    Documentation: `/${locale}/documentation`,
    TermsOfService: `/${locale}/terms`,
    PrivacyPolicy: `/${locale}/privacy`,
    CookiePolicy: `/${locale}/cookie`,
  };

  const translationMapping = {
    'About Us': 'aboutUs',
    Security: 'security',
    'Help Center': 'helpCenter',
    'Contact Us': 'contactUs',
    Blog: 'blog',
    Documentation: 'documentation',
    TermsOfService: 'terms.title',
    PrivacyPolicy: 'privacy.title',
    CookiePolicy: 'cookies.title',
  };

  return (
   
  <footer className='py-8 container mx-auto sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-950 to-orange-900 relative text-white overflow-hidden'>

    {/* Bitcoin Grid Background */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.04)_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:25px_25px] pointer-events-none" />

    {/* Animated Background Elements */}
    <div className="absolute top-0 left-1/4 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-gradient-conic from-orange-400/20 via-amber-400/20 to-yellow-400/20 rounded-full blur-2xl sm:blur-3xl animate-spin" style={{ animationDuration: '30s' }}></div>
    <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-gradient-conic from-amber-400/15 via-orange-400/15 to-red-400/15 rounded-full blur-2xl sm:blur-3xl animate-spin" style={{ animationDuration: '35s', animationDirection: 'reverse' }}></div>

    {/* Bitcoin Border Top */}
    <div className="absolute top-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 animate-pulse shadow-[0_0_20px_rgba(251,146,60,0.5)]"></div>

    {/* Floating Data Points */}
    <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full animate-ping opacity-80"></div>
    <div className="absolute top-20 sm:top-40 right-16 sm:right-32 w-1 h-1 bg-amber-400 rounded-full animate-ping opacity-80" style={{ animationDelay: '0.5s' }}></div>
    <div className="absolute bottom-20 sm:bottom-40 left-1/3 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-yellow-400 rounded-full animate-ping opacity-80" style={{ animationDelay: '1s' }}></div>
    <div className="absolute bottom-30 sm:bottom-60 right-1/4 w-1 h-1 bg-orange-500 rounded-full animate-ping opacity-80" style={{ animationDelay: '1.5s' }}></div>

    <div className='container mx-auto relative z-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 mb-6 sm:mb-8'>
        {/* Brand / Description */}
        <div className='lg:col-span-4 sm:col-span-2 pr-0 sm:pr-4 lg:pr-8'>
          <div className='flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6'>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 blur opacity-40 transition duration-300 group-hover:opacity-60"
                style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' }} />
            </div>
            <div className='flex gap-2 sm:gap-3 lg:gap-4 items-center'>
              <Bitcoin size={20} className="sm:w-6 sm:h-6 text-white" />
              <span className='text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-wider bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(251,146,60,0.5)]'>
                NEXORA
              </span>
            </div>
          </div>
          <p className='text-orange-100 mb-4 sm:mb-6 max-w-sm text-sm sm:text-base lg:text-lg leading-relaxed font-mono'>
            {tFooter('description')}
          </p>

          {/* Circuit Lines */}
          <div className="space-y-1 opacity-50">
            <div className="h-px bg-gradient-to-r from-orange-400 to-transparent w-3/4 shadow-[0_0_5px_rgba(251,146,60,0.5)]"></div>
            <div className="h-px bg-gradient-to-r from-amber-400 to-transparent w-1/2 shadow-[0_0_5px_rgba(245,158,11,0.5)]"></div>
            <div className="h-px bg-gradient-to-r from-yellow-400 to-transparent w-2/3 shadow-[0_0_5px_rgba(250,204,21,0.5)]"></div>
          </div>
        </div>

        {/* Footer Columns */}
        {[
          {
            title: tFooter('company'),
            links: ['About Us', 'Security'],
            color: 'from-orange-400 to-amber-400',
            glow: 'shadow-orange-400/30'
          },
          {
            title: tFooter('terms.title'),
            links: ['TermsOfService', 'PrivacyPolicy', 'CookiePolicy'],
            color: 'from-amber-400 to-yellow-400',
            glow: 'shadow-amber-400/30'
          },
          {
            title: tFooter('support'),
            links: ['Help Center', 'Contact Us'],
            color: 'from-yellow-400 to-orange-500',
            glow: 'shadow-yellow-400/30'
          },
          {
            title: tFooter('resources'),
            links: ['Blog', 'Documentation'],
            color: 'from-orange-500 to-red-500',
            glow: 'shadow-orange-500/30'
          },
        ].map((section, index) => (
          <div key={section.title} className='lg:col-span-2 sm:col-span-1'>
            <h3 className={`font-black mb-3 sm:mb-4 lg:mb-6 text-sm sm:text-base lg:text-lg uppercase tracking-wider bg-gradient-to-r ${section.color} bg-clip-text text-transparent font-mono drop-shadow-lg`}>
              {section.title}
            </h3>
            <ul className='space-y-2 sm:space-y-3 lg:space-y-4'>
              {section.links.map(link => (
                <li key={link} className="relative group">
                  <Link
                    href={routeMapping[link as keyof typeof routeMapping]}
                    className='text-gray-300 hover:text-white transition-all duration-300 cursor-pointer font-mono text-xs sm:text-sm lg:text-base relative inline-block group-hover:text-orange-400'
                  >
                    <span className="relative z-10">
                      {tFooter(
                        translationMapping[
                          link as keyof typeof translationMapping
                        ]
                      )}
                    </span>
                  
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Legal Info Section */}
      <div className='relative p-4 sm:p-6 lg:p-8 mb-8 sm:mb-10 lg:mb-12 overflow-hidden shadow-2xl shadow-orange-400/20'
        style={{ clipPath: 'polygon(2% 0%, 98% 0%, 100% 15%, 98% 100%, 2% 100%, 0% 85%)' }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-pulse"></div>

        <div className='flex flex-col w-full space-y-3 sm:space-y-4 lg:space-y-6'>
          <p className='text-orange-100 font-mono text-xs sm:text-sm lg:text-base leading-relaxed'>{tFooter('company_info')}</p>
          <p className='text-amber-100 font-mono text-xs sm:text-sm lg:text-base leading-relaxed'>{tFooter('risk_warning')}</p>
          <p className='text-yellow-100 font-mono text-xs sm:text-sm lg:text-base leading-relaxed'>{tFooter('execution_notice')}</p>
          <p className='text-orange-200 font-mono text-xs sm:text-sm lg:text-base leading-relaxed'>{tFooter('age_restriction')}</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center relative">
        <div className="inline-flex items-center space-x-2 sm:space-x-4 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-orange-400/30 font-mono"
          style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)' }}>
          <span className="text-orange-400 animate-pulse"></span>
          <span className="text-gray-300 text-xs sm:text-sm lg:text-base">
            © {new Date().getFullYear()} NEXORA {tFooter('rights')}
          </span>
        </div>
      </div>
    </div>
  </footer>


  );
}