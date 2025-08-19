"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import type { LoginCredentials } from "@/app/api/types/auth"
import { postLogin } from "@/app/api/auth/postLogin"
import { useCredentials } from "@/hooks/use-credentials"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useLocale, useTranslations } from "next-intl"

export default function LoginPage() {
  const { storeCredentials } = useCredentials()
  const router = useRouter()
  const t = useTranslations("login")
  const locale = useLocale();
  const [formData, setFormData] = useState({
    emailOrUsername: "",
    password: "",
    twoFactorCode: "",
    rememberMe: false,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [showTwoFactor, setShowTwoFactor] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    const credentials: LoginCredentials = {
      emailOrUsername: formData.emailOrUsername,
      password: formData.password,
      ...(showTwoFactor && { twoFactorCode: formData.twoFactorCode }),
      ...(formData.rememberMe && { rememberMe: formData.rememberMe }),
    }

    const response = await postLogin(credentials)

    if (!response.success) {
      setError(response.message || "Login failed")
      setIsLoading(false)
      return
    }

    storeCredentials(credentials)
    window.location.href = "/dashboard"
  }

  const benefits = [
    t("benefits.pairAccess"),
    t("benefits.advancedTools"),
    t("benefits.secureWallet"),
    t("benefits.customerSupport"),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-orange-900 flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* Crypto Effects */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-conic from-orange-500/20 via-amber-500/20 to-yellow-500/20 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-conic from-amber-500/15 via-orange-500/15 to-red-500/15 rounded-full blur-3xl animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
      
      {/* Floating Particles */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-orange-400 rounded-full animate-bounce opacity-60"></div>
      <div className="absolute top-40 right-32 w-1 h-1 bg-amber-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>
      
      <div className="flex flex-col lg:flex-row w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-xl border-2 border-orange-400/30 relative z-10">
        {/* Left Side - Login Form */}
        <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
          <Link href={`/${locale}`} className="inline-flex items-center max-w-[140px] text-orange-300 hover:text-white transition-colors mb-8 font-mono">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t("backToHome")}
          </Link>
          <Card className="w-full bg-slate-800/50 backdrop-blur-sm border-2 border-orange-400/30 text-white shadow-2xl shadow-orange-500/20 rounded-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-black text-white uppercase tracking-wider font-mono ">{t("signIn")}</CardTitle>
              <CardDescription className="text-orange-200 font-mono">{t("welcomeBack")}</CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <div className="p-3 mb-4 bg-red-500/20 border-2 border-red-400/50 rounded-lg shadow-[0_0_20px_rgba(255,0,0,0.3)]">
                  <p className="text-red-300 text-sm font-mono">{error}</p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="emailOrUsername" className="text-orange-200 font-mono uppercase tracking-wider text-sm">
                    {t("emailOrUsername")}
                  </Label>
                  <Input
                    id="emailOrUsername"
                    name="emailOrUsername"
                    type="text"
                    placeholder={t("placemail")}
                    value={formData.emailOrUsername}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    className="bg-slate-800/50 border-2 border-orange-400/30 text-white placeholder:text-slate-500 focus:border-orange-400 focus:ring-orange-400/20 backdrop-blur-sm font-mono shadow-[0_0_10px_rgba(251,146,60,0.2)]"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-orange-200 font-mono uppercase tracking-wider text-sm">
                    {t("password")}
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder= {t("placepass")}
                    value={formData.password}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    className="bg-slate-800/50 border-2 border-orange-400/30 text-white placeholder:text-slate-500 focus:border-orange-400 focus:ring-orange-400/20 backdrop-blur-sm font-mono shadow-[0_0_10px_rgba(251,146,60,0.2)]"
                    required
                  />
                </div>
                {showTwoFactor && (
                  <div className="space-y-2">
                    <Label htmlFor="twoFactorCode" className="text-orange-200 font-mono uppercase tracking-wider text-sm">
                      {t("twoFactorCode")}
                    </Label>
                    <Input
                      id="twoFactorCode"
                      name="twoFactorCode"
                      type="text"
                      placeholder="Enter 2FA code"
                      value={formData.twoFactorCode}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      className="bg-slate-800/50 border-2 border-orange-400/30 text-white placeholder:text-slate-500 focus:border-orange-400 focus:ring-orange-400/20 backdrop-blur-sm font-mono shadow-[0_0_10px_rgba(251,146,60,0.2)]"
                    />
                  </div>
                )}
               
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-green-500 hover:to-amber-500 text-white font-black py-3 uppercase tracking-wider font-mono transition-all duration-200 transform hover:scale-105 rounded-lg shadow-[0_0_20px_rgba(251,146,60,0.4)]"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      {t("signingIn")}
                    </div>
                  ) : (
                    t("signIn")
                  )}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="text-center flex flex-col">
              <p className="text-slate-300 font-mono">
                {t("dontHaveAccount")}{" "}
                <Link href="/register" className="text-orange-400 hover:text-orange-300 font-bold transition-colors">
                   {t("signUp")}
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
        
        {/* Right Side - Trading Benefits */}
       <div className="flex-1 p-8 lg:p-12 bg-gradient-to-br from-orange-900/10 to-amber-900/10 backdrop-blur-sm flex flex-col justify-center border-l border-orange-400/30 lg:border-t-0 border-t">
          <h2 className="text-3xl font-black text-white mb-8 uppercase tracking-wider font-mono ">{t("startTrading")}</h2>

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mt-0.5 ">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-slate-200 leading-relaxed font-mono">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 mt-8 border-t border-orange-400/30">
            <div className="text-center">
              <p className="text-orange-300 text-sm mb-1 font-mono uppercase tracking-wider">{t("totalVolume")}</p>
              <p className="text-2xl font-black text-orange-400 font-mono drop-shadow-[0_0_15px_rgba(251,146,60,0.6)]">$7.8B+</p>
            </div>
            <div className="text-center">
              <p className="text-orange-300 text-sm mb-1 font-mono uppercase tracking-wider">{t("activeTraders")}</p>
              <p className="text-2xl font-black text-orange-400 font-mono drop-shadow-[0_0_15px_rgba(251,146,60,0.6)]">900K+</p>
            </div>
            <div className="text-center">
              <p className="text-orange-300 text-sm mb-1 font-mono uppercase tracking-wider">{t("countries")}</p>
              <p className="text-2xl font-black text-orange-400 font-mono drop-shadow-[0_0_15px_rgba(251,146,60,0.6)]">195+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}