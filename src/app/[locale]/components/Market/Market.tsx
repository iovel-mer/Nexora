"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { getMarketData, type MarketData } from "@/app/api/market/actions"
import { TrendingUp, TrendingDown, Activity, RefreshCw, BarChart3 } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { log } from "console"

export const Market: React.FC = () => {
  const [marketData, setMarketData] = useState<MarketData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())
  const t = useTranslations("Market")

  const fetchData = async () => {
    try {
      setLoading(true)
      const result = await getMarketData()
      console.log(result)
      if (result.success) {
        setMarketData(result.data as any)
        setError(null)
      } else {
        setError(result.error || t("errorGeneric"))
      }
    } catch (err) {
      setError(t("errorFetch"))
      console.error("Market data fetch error:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [t])

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData()
    }, 15000)
    return () => clearInterval(interval)
  }, [])

  const formatPrice = (price: number) => {
    const fractionDigits = price >= 1000 ? 2 : price >= 1 ? 4 : 6
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits,
    }).format(price)
  }

  const formatChange = (change: number) => {
    const sign = change >= 0 ? "+" : ""
    return `${sign}${change.toFixed(2)}%`
  }

  const handleImageError = (symbol: string) => {
    setImageErrors((prev) => new Set(prev).add(symbol))
  }

  const CryptoLogo = ({ coin }: { coin: MarketData }) => {
    const hasError = imageErrors.has(coin.symbol)
    const logoSrc = `/assets/images/${coin.symbol.toLowerCase()}.png`

    if (hasError) {
      return (
        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 text-white font-black shadow-2xl border-2 border-orange-400/50 rounded-full">
          <span className="text-xs font-mono">{coin.symbol?.slice(0, 2) || "??"}</span>
        </div>
      )
    }

    return (
      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 relative overflow-hidden shadow-2xl rounded-full">
        <Image
          src={logoSrc}
          fill
          alt={`${coin.name || coin.symbol} logo`}
          className="object-cover rounded-full"
          onError={() => handleImageError(coin.symbol)}
          unoptimized
        />
      </div>
    )
  }

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-orange-900 min-h-screen relative overflow-hidden">
      {/* Crypto Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.06)_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:30px_30px] md:bg-[size:40px_40px] lg:bg-[size:50px_50px] pointer-events-none" />
      
      {/* Bitcoin Orbs - Responsive positioning and sizing */}
      <div className="absolute top-1/4 left-4 sm:left-8 md:left-1/6 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-gradient-conic from-orange-400 via-amber-500 to-yellow-500 rounded-full blur-xl sm:blur-2xl md:blur-3xl opacity-15 sm:opacity-20 md:opacity-30 animate-spin" style={{animationDuration: '20s'}}></div>
      <div className="absolute bottom-1/4 right-4 sm:right-8 md:right-1/6 w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 bg-gradient-conic from-amber-400 via-orange-500 to-red-500 rounded-full blur-xl sm:blur-2xl md:blur-3xl opacity-10 sm:opacity-15 md:opacity-25 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
      
      {/* Glow Lines */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/10 to-transparent h-1 sm:h-2 animate-pulse"></div>
      
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-lg border-2 border-orange-400/40 text-xs sm:text-sm font-mono uppercase tracking-widest text-orange-300 shadow-[0_0_30px_rgba(251,146,60,0.4)] mb-4 sm:mb-6 md:mb-8"
               style={{clipPath: 'polygon(10% 0%, 90% 0%, 100% 25%, 100% 75%, 90% 100%, 10% 100%, 0% 75%, 0% 25%)'}}>
            <Activity className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-orange-400 animate-pulse" />
            <span>{t("badge")}</span>
          </div>
          
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black mb-4 sm:mb-6 md:mb-8 uppercase tracking-tight font-mono text-white px-2">
            {t("title")}
          </h3>
          
          <p className="text-sm sm:text-base md:text-lg text-orange-100 max-w-3xl mx-auto font-mono leading-relaxed px-4">
            {t("description")}
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-24 lg:py-32">
            <div className="relative">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 border-2 sm:border-4 border-orange-500 border-t-transparent animate-spin shadow-[0_0_30px_rgba(251,146,60,0.6)]"
                   style={{clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'}}></div>
              <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-orange-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
            </div>
            <p className="mt-4 sm:mt-6 md:mt-8 text-orange-200 text-base sm:text-lg md:text-xl font-mono uppercase tracking-wider">{t("loading")}</p>
            <div className="mt-3 sm:mt-4 md:mt-6 flex space-x-2 sm:space-x-3">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-orange-400 rounded-full animate-bounce shadow-[0_0_10px_rgba(251,146,60,0.8)]"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-amber-400 rounded-full animate-bounce shadow-[0_0_10px_rgba(245,158,11,0.8)]" style={{animationDelay: '0.1s'}}></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full animate-bounce shadow-[0_0_10px_rgba(250,204,21,0.8)]" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        ) : error ? (
          <div className="text-center py-12 sm:py-16 md:py-24 lg:py-32 px-4">
            <div className="bg-gradient-to-br from-red-900/50 to-slate-900/50 backdrop-blur-xl border-2 border-red-500/50 p-6 sm:p-8 md:p-10 lg:p-12 max-w-sm sm:max-w-md lg:max-w-lg mx-auto shadow-2xl shadow-red-500/30"
                 style={{clipPath: 'polygon(5% 0%, 95% 0%, 100% 25%, 95% 100%, 5% 100%, 0% 75%)'}}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 shadow-[0_0_20px_rgba(255,0,0,0.6)]"
                   style={{clipPath: 'polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)'}}>
                <TrendingDown className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <p className="text-red-300 text-sm sm:text-base lg:text-lg font-mono uppercase tracking-wide">{error}</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 justify-items-center">
            {marketData.map((coin, index) => (
              <div
                key={coin.symbol}
                className="group relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[300px] p-3 sm:p-4 md:p-5 lg:p-6 bg-slate-900/60 hover:border-orange-400/70 transition-all duration-500 hover:scale-105 overflow-hidden shadow-2xl hover:shadow-orange-500/30"
                style={{
                  clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Holographic Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Scan Lines */}
                <div className="absolute top-2 sm:top-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3 sm:mb-4 md:mb-6 gap-2">
                    <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 min-w-0 flex-1">
                      <CryptoLogo coin={coin} />
                      <div className="min-w-0 flex-1">
                        <h4 className="font-black text-xs sm:text-sm md:text-base lg:text-lg text-orange-100 uppercase tracking-wide font-mono truncate">{coin.name}</h4>
                        <p className="text-orange-400/80 text-xs sm:text-sm font-mono uppercase tracking-widest">{coin.symbol}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 font-mono text-xs sm:text-sm uppercase tracking-wider flex-shrink-0">
                      {coin.change >= 0 
                        ? <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" /> 
                        : <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
                      }
                      <span className={`text-xs sm:text-sm ${coin.change >= 0 ? "text-green-400" : "text-red-400"}`}>
                        <span className="hidden sm:inline mr-4">{formatChange(coin.change)}</span>
                        <span className="sm:hidden">{Math.abs(coin.change).toFixed(1)}%</span>
                      </span>
                    </div>
                  </div>

                  {/* Price Section */}
                  <div className="mb-3 sm:mb-4 md:mb-6">
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-1 sm:mb-2 tracking-tight font-mono drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] break-all">
                      {formatPrice(coin.price)}
                    </p>
                    <p className="text-orange-300 text-xs sm:text-sm font-mono uppercase tracking-wider flex items-center gap-1 sm:gap-2">
                      <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="truncate">{t("currentPrice")}</span>
                    </p>
                  </div>

                  {/* Movement Section */}
                  <div className="space-y-2 sm:space-y-3 md:space-y-4">
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-orange-200 font-mono text-xs sm:text-sm uppercase tracking-wider flex-shrink-0">{t("movement")}</span>
                      <span className={`font-black text-sm sm:text-base lg:text-lg font-mono flex-shrink-0 ${coin.change >= 0 ? "text-green-400" : "text-red-400"}`}>
                        {Math.abs(coin.change).toFixed(2)}%
                      </span>
                    </div>
                    
                    {/* Crypto Progress Bar */}
                    <div className="w-full bg-slate-800 h-1.5 sm:h-2 relative overflow-hidden rounded-full">
                      <div 
                        className={`h-full transition-all duration-1000 rounded-full ${
                          coin.change >= 0 
                            ? 'bg-gradient-to-r from-green-400 to-emerald-500 shadow-[0_0_10px_rgba(0,255,0,0.6)]' 
                            : 'bg-gradient-to-r from-red-400 to-pink-500 shadow-[0_0_10px_rgba(255,0,0,0.6)]'
                        }`}
                        style={{ width: `${Math.min(Math.abs(coin.change) * 10, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-1 sm:top-2 left-1 sm:left-2 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 border-l-2 border-t-2 border-orange-400 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-1 sm:top-2 right-1 sm:right-2 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 border-r-2 border-t-2 border-amber-400 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 border-l-2 border-b-2 border-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 border-r-2 border-b-2 border-orange-400 opacity-60 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Bottom Bitcoin Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 opacity-80 shadow-[0_0_20px_rgba(251,146,60,0.5)]"></div>
    </section>
  )
}