"use client"

import { parseISO, format } from "date-fns"
import type React from "react"
import { useState, useEffect } from "react"
import { ArrowLeft, Check, ChevronDown, CalendarDays } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Command, CommandInput, CommandEmpty, CommandGroup, CommandItem, CommandList } from "@/components/ui/command"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { postRegistration } from "@/app/api/auth/postRegistration"
import { getCountries } from "@/app/api/countries/getCountries"
import { getLanguages } from "@/app/api/languages/getLanguages"
import type { Country } from "@/app/api/types/countries"
import type { Language } from "@/app/api/types/languages"
import { useLocale, useTranslations } from "next-intl"

export default function RegisterPage() {
  const router = useRouter()
  const t = useTranslations('register');
  const locale  = useLocale();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    phoneNumber: "",
    telephone: "",
    country: "",
    language: "",
    dateOfBirth: "", 
    source: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [countries, setCountries] = useState<Country[]>([])
  const [languages, setLanguages] = useState<Language[]>([])
  const [countrySearch, setCountrySearch] = useState("")
  const [languageSearch, setLanguageSearch] = useState("")
  const [showCountryDropdown, setShowCountryDropdown] = useState(false)
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false)
  const [showDatePicker, setShowDatePicker] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setFormData((prev) => ({
        ...prev,
        source: window.location.origin,
      }))
    }
    const fetchData = async () => {
      try {
        const [countriesResponse, languagesData] = await Promise.all([getCountries(), getLanguages()])
        if (countriesResponse.success && countriesResponse.data) {
          const allCountries = countriesResponse.data
          setCountries(allCountries)
          try {
            const res = await fetch("https://ipapi.co/json/")
            const locationData = await res.json()
            const detectedCountryCode = locationData?.country_code
            if (detectedCountryCode) {
              const matched = allCountries.find((c) => c.code === detectedCountryCode)
              if (matched) {
                setFormData((prev) => ({
                  ...prev,
                  country: matched.code,
                }))
              }
            }
          } catch (geoError) {
            console.warn("Could not detect location via IP:", geoError)
          }
        }
        setLanguages(languagesData)
      } catch (error) {
        console.error("Error fetching countries or languages:", error)
      }
    }
    fetchData()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value === "" ? "" : value,
    }))
  }

  const handleDateSelect = (date: Date | undefined) => {
    setFormData((prev) => ({
      ...prev,
      dateOfBirth: date ? format(date, "yyyy-MM-dd") : "", 
    }))
    setShowDatePicker(false) 
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    
    if (formData.dateOfBirth) {
    const birthDate = parseISO(formData.dateOfBirth)
    const today = new Date()
    let age = today.getFullYear() - birthDate.getFullYear()
    const m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age-- // not had birthday yet this year
    }

    if (age < 18) {
      setError("You must be at least 18 years old to register.")
      setIsLoading(false)
      return
    }
  } else {
    setError("Please select your date of birth.")
    setIsLoading(false)
    return
  }
    const response = await postRegistration(formData)
    if (response?.errors) {
      setError(response.message ?? "An unknown error occurred")
      setIsLoading(false)
      return
    }
    router.push("/login?registered=true")
    setIsLoading(false)
  }

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
      country.code.toLowerCase().includes(countrySearch.toLowerCase()),
  )
  const filteredLanguages = languages.filter(
    (language) =>
      language.name.toLowerCase().includes(languageSearch.toLowerCase()) ||
      language.code.toLowerCase().includes(languageSearch.toLowerCase()),
  )

  const handleCountrySelect = (countryCode: string) => {
    setFormData((prev) => ({ ...prev, country: countryCode }))
    setCountrySearch("")
    setShowCountryDropdown(false)
  }

  const handleLanguageSelect = (languageCode: string) => {
    setFormData((prev) => ({ ...prev, language: languageCode }))
    setLanguageSearch("")
    setShowLanguageDropdown(false)
  }

  const selectedCountry = countries.find((c) => c.code === formData.country)
  const selectedLanguage = languages.find((l) => l.code === formData.language)

  const dateOfBirthDate = formData.dateOfBirth ? parseISO(formData.dateOfBirth) : undefined

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-orange-900 flex flex-col lg:flex-row relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* Crypto Effects */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-conic from-orange-500/20 via-amber-500/20 to-yellow-500/20 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-conic from-amber-500/15 via-orange-500/15 to-red-500/15 rounded-full blur-3xl animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
      
      {/* Floating Particles */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-orange-400 rounded-full animate-bounce opacity-60"></div>
      <div className="absolute top-40 right-32 w-1 h-1 bg-amber-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>
      
      {/* Left-side Registration Form */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-8 overflow-y-auto relative z-10">
        <Card className="w-full max-w-md bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-xl border-2 border-orange-400/30 text-white shadow-2xl shadow-orange-500/20 rounded-2xl">
          <CardHeader className="pb-4">
            <Link href={`/${locale}`} className="inline-flex items-center max-w-[140px] text-orange-300 hover:text-white mb-4 transition-colors font-mono">
              <ArrowLeft className="w-4 h-4 mr-2" /> {t("back")}
            </Link>
            <CardTitle className="text-3xl font-black text-white text-center uppercase tracking-wider font-mono">{t("createAccount")}</CardTitle>
            <p className="text-orange-200 text-center font-mono">{t("subtitle")}</p>
          </CardHeader>
          <CardContent>
            {error && (
              <div className="p-3 mb-4 bg-red-500/20 border-2 border-red-400/50 rounded-lg shadow-[0_0_20px_rgba(255,0,0,0.3)]">
                <p className="text-red-300 text-sm font-mono">{error}</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-orange-200 font-mono uppercase tracking-wider text-sm">
                     {t("firstName")}
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder={t("pfirstName")}
                    value={formData.firstName}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    required
                    className="bg-slate-800/50 border-2 border-orange-400/30 text-white placeholder:text-slate-500 focus:border-orange-400 focus:ring-orange-400/20 backdrop-blur-sm font-mono shadow-[0_0_10px_rgba(251,146,60,0.2)]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-orange-200 font-mono uppercase tracking-wider text-sm">
                    {t("lastName")}
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder={t("plastName")}
                    value={formData.lastName}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    required
                    className="bg-slate-800/50 border-2 border-orange-400/30 text-white placeholder:text-slate-500 focus:border-orange-400 focus:ring-orange-400/20 backdrop-blur-sm font-mono shadow-[0_0_10px_rgba(251,146,60,0.2)]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-orange-200 font-mono uppercase tracking-wider text-sm">
                  {t("email")}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder= {t("pemail")}
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  required
                  className="bg-slate-800/50 border-2 border-orange-400/30 text-white placeholder:text-slate-500 focus:border-orange-400 focus:ring-orange-400/20 backdrop-blur-sm font-mono shadow-[0_0_10px_rgba(251,146,60,0.2)]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="username" className="text-orange-200 font-mono uppercase tracking-wider text-sm">
                  {t("username")}
                </Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder= {t("pusername")}
                  value={formData.username}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  required
                  className="bg-slate-800/50 border-2 border-orange-400/30 text-white placeholder:text-slate-500 focus:border-orange-400 focus:ring-orange-400/20 backdrop-blur-sm font-mono shadow-[0_0_10px_rgba(251,146,60,0.2)]"
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
                  placeholder={t("ppassword")}
                  value={formData.password}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  required
                  className="bg-slate-800/50 border-2 border-orange-400/30 text-white placeholder:text-slate-500 focus:border-orange-400 focus:ring-orange-400/20 backdrop-blur-sm font-mono shadow-[0_0_10px_rgba(251,146,60,0.2)]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="text-orange-200 font-mono uppercase tracking-wider text-sm">
                   {t("phoneNumber")}
                </Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  placeholder= {t("pphoneNumber")}
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  required
                  className="bg-slate-800/50 border-2 border-orange-400/30 text-white placeholder:text-slate-500 focus:border-orange-400 focus:ring-orange-400/20 backdrop-blur-sm font-mono shadow-[0_0_10px_rgba(251,146,60,0.2)]"
                />
              </div>
              {/* Country Selector */}
              <div className="space-y-2">
                <Label htmlFor="country" className="text-orange-200 font-mono uppercase tracking-wider text-sm">
                    {t("country")}
                </Label>
                <Popover open={showCountryDropdown} onOpenChange={setShowCountryDropdown}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={showCountryDropdown}
                      className="w-full justify-between bg-slate-800/50 border-2 border-orange-400/30 text-white hover:bg-slate-700/50 backdrop-blur-sm focus:border-orange-400 font-mono shadow-[0_0_10px_rgba(251,146,60,0.2)]"
                      disabled={isLoading}
                    >
                      {selectedCountry ? selectedCountry.name : "Select your country"}
                      <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[--radix-popover-trigger-width] p-0 bg-slate-900/90 backdrop-blur-xl border-2 border-orange-400/30 text-white">
                    <Command className="bg-transparent text-white">
                      <CommandInput
                        placeholder={t("searchCountries")}
                        value={countrySearch}
                        onValueChange={setCountrySearch}
                        className="bg-slate-800/50 border-orange-400/20 text-white placeholder:text-slate-500 focus:ring-orange-400 font-mono"
                      />
                      <CommandList className="max-h-60 overflow-y-auto">
                        <CommandEmpty>{t("selectCountry")}</CommandEmpty>
                        <CommandGroup>
                          {filteredCountries.map((country) => (
                            <CommandItem
                              key={country.code}
                              value={country.name}
                              onSelect={() => handleCountrySelect(country.code)}
                              className="cursor-pointer hover:bg-orange-500/20 text-white data-[selected=true]:bg-orange-500/30 font-mono"
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  formData.country === country.code ? "opacity-100" : "opacity-0",
                                )}
                              />
                              {country.name}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
              {/* Language Selector */}
              <div className="space-y-2">
                <Label htmlFor="language" className="text-orange-200 font-mono uppercase tracking-wider text-sm">
                 {t("language")}
                </Label>
                <Popover open={showLanguageDropdown} onOpenChange={setShowLanguageDropdown}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={showLanguageDropdown}
                      className="w-full justify-between bg-slate-800/50 border-2 border-orange-400/30 text-white hover:bg-slate-700/50 backdrop-blur-sm focus:border-orange-400 font-mono shadow-[0_0_10px_rgba(251,146,60,0.2)]"
                      disabled={isLoading}
                    >
                      <span className={selectedLanguage ? "text-white" : "text-slate-500"}>
                        {selectedLanguage ? selectedLanguage.name : t("selectLanguage")}
                      </span>
                      <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[--radix-popover-trigger-width] p-0 bg-slate-900/90 backdrop-blur-xl border-2 border-orange-400/30 text-white">
                    <Command className="bg-transparent text-white">
                      <CommandInput
                        placeholder="Search languages..."
                        value={languageSearch}
                        onValueChange={setLanguageSearch}
                        className="bg-slate-800/50 border-orange-400/20 text-white placeholder:text-slate-500 focus:ring-orange-400 font-mono"
                      />
                      <CommandList className="max-h-60 overflow-y-auto">
                        <CommandEmpty>No language found.</CommandEmpty>
                        <CommandGroup>
                          {filteredLanguages
                            .sort((a, b) => {
                              const priorityOrder = ["en", "de"]
                              const indexA = priorityOrder.indexOf(a.code)
                              const indexB = priorityOrder.indexOf(b.code)
                              if (indexA !== -1 || indexB !== -1) {
                                return (
                                  (indexA === -1 ? Number.POSITIVE_INFINITY : indexA) -
                                  (indexB === -1 ? Number.POSITIVE_INFINITY : indexB)
                                )
                              }
                              return a.name.localeCompare(b.name)
                            })
                            .map((language) => (
                              <CommandItem
                                key={language.code}
                                value={language.name}
                                onSelect={() => handleLanguageSelect(language.code)}
                                className="cursor-pointer text-white hover:bg-orange-500/20 data-[selected=true]:bg-orange-500/30 font-mono"
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    formData.language === language.code ? "opacity-100" : "opacity-0",
                                  )}
                                />
                                {language.name}
                              </CommandItem>
                            ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
              {/* Date of Birth */}
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth" className="text-orange-200 font-mono uppercase tracking-wider text-sm">
                 {t("dateOfBirth")}
                </Label>
                <Popover open={showDatePicker} onOpenChange={setShowDatePicker}>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal bg-slate-800/50 border-2 border-orange-400/30 text-white hover:bg-slate-700/50 backdrop-blur-sm focus:border-orange-400 font-mono shadow-[0_0_10px_rgba(251,146,60,0.2)]",
                        !formData.dateOfBirth && "text-slate-500",
                      )}
                      disabled={isLoading}
                    >
                      <CalendarDays className="mr-2 size-4" />
                      {formData.dateOfBirth ? format(dateOfBirthDate!, "PPP") : <span>{t("pickDate")}</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-slate-900/90 backdrop-blur-xl border-2 border-orange-400/30 text-white">
                    <Calendar
                      mode="single"
                      selected={dateOfBirthDate}
                      onSelect={handleDateSelect}
                      initialFocus
                      captionLayout="dropdown"
                      fromYear={1900}
                      toYear={new Date().getFullYear()}
                       className="[&_td]:text-slate-200 [&_th]:text-orange-300 [&_button]:text-slate-200 [&_button]:hover:bg-orange-500/20 [&_button]:focus:bg-orange-500/20 [&_div.rdp-day_selected]:bg-orange-500 [&_div.rdp-day_selected]:text-black [&_div.rdp-day_today]:text-orange-400 [&_select]:bg-slate-800/50 [&_select]:text-white [&_select]:border-orange-400/30 [&_select]:rounded-md [&_select]:focus:ring-orange-400 font-mono"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-green-500 text-white font-black py-3 uppercase tracking-wider font-mono transition-all duration-200 transform hover:scale-105 shadow-[0_0_20px_rgba(251,146,60,0.4)]"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    {t("loading")}
                  </div>
                ) : (
                  t("submit")
                )}
              </Button>
            </form>
            <p className="text-center text-slate-300 mt-4 font-mono">
              {t("alreadyHaveAccount")}{" "}
              <Link href="/login" className="text-orange-400 hover:text-orange-300 font-bold transition-colors">
                {t("signIn")}
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
      {/* Right-side Benefits Panel */}
      <div className="flex-1 bg-gradient-to-br from-orange-900/10 to-amber-900/10 backdrop-blur-sm p-8 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
        </div>
        <div className="max-w-lg space-y-8 z-10 text-center lg:text-left">
          <h2 className="text-4xl font-black text-white mb-8 leading-tight uppercase tracking-wider font-mono">{t("benefitsTitle")}</h2>
          <div className="space-y-6">
            {t.raw("benefits").map((benefit: string, idx: number) => (
              <div key={idx} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-slate-200 leading-relaxed text-lg font-mono">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 items-center sm:grid-cols-3 gap-6 pt-8 border-t border-orange-400/30 mt-8">
            <div className="text-center">
              <p className="text-orange-300 text-sm mb-1 font-mono uppercase tracking-wider">{t("volume")}</p>
              <p className="text-3xl font-black text-orange-400 font-mono drop-shadow-[0_0_15px_rgba(251,146,60,0.6)]">$8.5B+</p>
            </div>
            <div className="text-center">
              <p className="text-orange-300 text-sm mb-1 font-mono uppercase tracking-wider">{t("traders")}</p>
              <p className="text-3xl font-black text-orange-400 font-mono drop-shadow-[0_0_15px_rgba(251,146,60,0.6)]">1M+</p>
            </div>
            <div className="text-center">
              <p className="text-orange-300 text-sm mb-1 font-mono uppercase tracking-wider">{t("countries")}</p>
              <p className="text-3xl font-black text-orange-400 font-mono drop-shadow-[0_0_15px_rgba(251,146,60,0.6)]">200+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}