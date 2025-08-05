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

  const CryptoLogo = ({ coin, size = 48 }: { coin: MarketData; size?: number }) => {
    const hasError = imageErrors.has(coin.symbol)
    const logoSrc = `/assets/images/${coin.symbol.toLowerCase()}.png`

    if (hasError) {
      return (
        <div
          className="flex items-center justify-center bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 text-white font-black shadow-2xl border-2 border-orange-400/50"
          style={{ 
            width: size, 
            height: size,
           
          }}
        >
          <span className="text-xs font-mono">{coin.symbol?.slice(0, 2) || "??"}</span>
        </div>
      )
    }

    return (
      <div 
        className="relative overflow-hidden shadow-2xl rounded-full "
        style={{ 
          width: size, 
          height: size,
         
        }}
      >
        <Image
          src={logoSrc}
          width={size}
          height={size}
          alt={`${coin.name || coin.symbol} logo`}
          className="object-cover h-full   "
          onError={() => handleImageError(coin.symbol)}
          unoptimized
        />
      </div>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-orange-900 min-h-screen relative overflow-hidden">
      {/* Crypto Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.06)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      
      {/* Bitcoin Orbs */}
      <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-conic from-orange-400 via-amber-500 to-yellow-500 rounded-full blur-3xl opacity-30 animate-spin" style={{animationDuration: '20s'}}></div>
      <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-conic from-amber-400 via-orange-500 to-red-500 rounded-full blur-3xl opacity-25 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
      
      {/* Glow Lines */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/10 to-transparent h-2 animate-pulse"></div>
      
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-lg border-2 border-orange-400/40 text-sm font-mono uppercase tracking-widest text-orange-300 shadow-[0_0_30px_rgba(251,146,60,0.4)] mb-8"
               style={{clipPath: 'polygon(10% 0%, 90% 0%, 100% 25%, 100% 75%, 90% 100%, 10% 100%, 0% 75%, 0% 25%)'}}>
            <Activity className="w-5 h-5 text-orange-400 animate-pulse" />
            <span>{t("badge")}</span>
          </div>
          
          <h3 className="text-5xl text-white md:text-6xl lg:text-7xl font-black mb-8 uppercase tracking-tight font-mono">
            {t("title")}
          </h3>
          
          <p className="text-lg text-orange-100 max-w-3xl mx-auto font-mono leading-relaxed">
            {t("description")}
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32">
            <div className="relative">
              <div className="w-24 h-24 border-4 border-orange-500 border-t-transparent animate-spin shadow-[0_0_30px_rgba(251,146,60,0.6)]"
                   style={{clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'}}></div>
              <RefreshCw className="w-8 h-8 text-orange-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
            </div>
            <p className="mt-8 text-orange-200 text-xl font-mono uppercase tracking-wider">{t("loading")}</p>
            <div className="mt-6 flex space-x-3">
              <div className="w-3 h-3 bg-orange-400 rounded-full animate-bounce shadow-[0_0_10px_rgba(251,146,60,0.8)]"></div>
              <div className="w-3 h-3 bg-amber-400 rounded-full animate-bounce shadow-[0_0_10px_rgba(245,158,11,0.8)]" style={{animationDelay: '0.1s'}}></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce shadow-[0_0_10px_rgba(250,204,21,0.8)]" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        ) : error ? (
          <div className="text-center py-32">
            <div className="bg-gradient-to-br from-red-900/50 to-slate-900/50 backdrop-blur-xl border-2 border-red-500/50 p-12 max-w-lg mx-auto shadow-2xl shadow-red-500/30"
                 style={{clipPath: 'polygon(5% 0%, 95% 0%, 100% 25%, 95% 100%, 5% 100%, 0% 75%)'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(255,0,0,0.6)]"
                   style={{clipPath: 'polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)'}}>
                <TrendingDown className="w-8 h-8 text-white" />
              </div>
              <p className="text-red-300 text-lg font-mono uppercase tracking-wide">{error}</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {marketData.map((coin, index) => (
              <div
                key={coin.symbol}
                className="group relative bg-slate-900/60 hover:border-orange-400/70 transition-all duration-500 hover:scale-105 overflow-hidden p-6 shadow-2xl hover:shadow-orange-500/30"
                style={{
                  clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Holographic Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Scan Lines */}
                <div className="absolute top-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <CryptoLogo coin={coin} size={56}  />
                      <div>
                        <h4 className="font-black text-lg text-orange-100 uppercase tracking-wide font-mono">{coin.name}</h4>
                        <p className="text-orange-400/80 text-sm font-mono uppercase tracking-widest">{coin.symbol}</p>
                      </div>
                    </div>
                    
                    <div
                      className={`flex items-center gap-2 px-4 py-2 font-mono text-xs uppercase tracking-wider shadow-lg ${
                        coin.change >= 0
                          ? "bg-gradient-to-r from-green-500/30 to-emerald-500/30 text-green-300 border-2 border-green-400/50 shadow-[0_0_15px_rgba(0,255,0,0.3)]"
                          : "bg-gradient-to-r from-red-500/30 to-pink-500/30 text-red-300 border-2 border-red-400/50 shadow-[0_0_15px_rgba(255,0,0,0.3)]"
                      }`}
                      
                    >
                      {coin.change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                      {formatChange(coin.change)}
                    </div>
                  </div>

                  {/* Price Section */}
                  <div className="mb-6">
                    <p className="text-4xl font-black text-white mb-2 tracking-tight font-mono drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                      {formatPrice(coin.price)}
                    </p>
                    <p className="text-orange-300 text-sm font-mono uppercase tracking-wider flex items-center gap-2">
                      <BarChart3 className="w-4 h-4" />
                      {t("currentPrice")}
                    </p>
                  </div>

                  {/* Movement Section */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-orange-200 font-mono text-sm uppercase tracking-wider">{t("movement")}</span>
                      <span className={`font-black text-lg font-mono ${coin.change >= 0 ? "text-green-400" : "text-red-400"}`}>
                        {Math.abs(coin.change).toFixed(2)}%
                      </span>
                    </div>
                    
                    {/* Crypto Progress Bar */}
                    <div className="w-full bg-slate-800 h-2 relative overflow-hidden"
                        >
                      <div 
                        className={`h-2 transition-all duration-1000 ${
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
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-orange-400 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-amber-400 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-orange-400 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Data Stream Indicator
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-xs font-mono text-orange-400 opacity-50 group-hover:opacity-100 transition-opacity">
                  ID#{index.toString().padStart(3, '0')}
                </div> */}
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Bottom Bitcoin Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 opacity-80 shadow-[0_0_20px_rgba(251,146,60,0.5)]"></div>
    </section>
  )
}