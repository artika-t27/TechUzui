"use client"

import { useLanguage, indianLanguagesList } from "@/lib/language-context"
import { Badge } from "@/components/ui/badge"
import { Globe } from "lucide-react"

export function LanguageDisplay() {
  const { language } = useLanguage()

  // Find the language name from the list
  const languageName = indianLanguagesList.find((lang) => lang.code === language)?.name || "English"

  return (
    <Badge variant="outline" className="flex items-center gap-1 text-emerald-600 border-emerald-600">
      <Globe className="h-3 w-3" />
      {languageName}
    </Badge>
  )
}
