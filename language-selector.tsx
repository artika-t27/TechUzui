"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { indianLanguagesList } from "@/lib/language-context"

export function LanguageSelector() {
  const router = useRouter()
  const [selectedLanguage, setSelectedLanguage] = useState("en")
  const [searchQuery, setSearchQuery] = useState("")

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value)
    // In a real app, this would set the language in a context or cookie
    localStorage.setItem("preferredLanguage", value)
  }

  const filteredLanguages = indianLanguagesList.filter((lang) =>
    lang.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          placeholder="Search languages..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="h-[400px] overflow-y-auto pr-2">
        <RadioGroup value={selectedLanguage} onValueChange={handleLanguageChange} className="space-y-2">
          {filteredLanguages.map((language) => (
            <div
              key={language.code}
              className="flex items-center space-x-2 border rounded-md p-3 hover:bg-emerald-50 transition-colors"
            >
              <RadioGroupItem value={language.code} id={language.code} />
              <Label htmlFor={language.code} className="flex-1 cursor-pointer">
                {language.name}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  )
}
