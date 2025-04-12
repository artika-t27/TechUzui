"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type LanguageContextType = {
  language: string
  setLanguage: (lang: string) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// List of all official Indian languages
const indianLanguagesList = [
  { code: "en", name: "English" },
  { code: "hi", name: "हिन्दी (Hindi)" },
  { code: "bn", name: "বাংলা (Bengali)" },
  { code: "te", name: "తెలుగు (Telugu)" },
  { code: "mr", name: "मराठी (Marathi)" },
  { code: "ta", name: "தமிழ் (Tamil)" },
  { code: "ur", name: "اردو (Urdu)" },
  { code: "gu", name: "ગુજરાતી (Gujarati)" },
  { code: "kn", name: "ಕನ್ನಡ (Kannada)" },
  { code: "ml", name: "മലയാളം (Malayalam)" },
  { code: "pa", name: "ਪੰਜਾਬੀ (Punjabi)" },
  { code: "as", name: "অসমীয়া (Assamese)" },
  { code: "or", name: "ଓଡ଼ିଆ (Odia)" },
  { code: "ks", name: "कॉशुर (Kashmiri)" },
  { code: "sd", name: "سنڌي (Sindhi)" },
  { code: "sa", name: "संस्कृतम् (Sanskrit)" },
  { code: "ne", name: "नेपाली (Nepali)" },
  { code: "kok", name: "कोंकणी (Konkani)" },
  { code: "doi", name: "डोगरी (Dogri)" },
  { code: "mni", name: "মৈতৈলোন্ (Manipuri)" },
  { code: "brx", name: "बड़ो (Bodo)" },
  { code: "sat", name: "ᱥᱟᱱᱛᱟᱲᱤ (Santali)" },
]

// Simple translations for demonstration
// In a real app, this would be much more comprehensive and loaded from files
const translations: Record<string, Record<string, string>> = {
  en: {
    "eligibility.title": "Eligibility Check",
    "eligibility.description": "Provide your details to find government schemes you're eligible for",
    "personal.name": "Full Name",
    "personal.age": "Age",
    "personal.gender": "Gender",
    "personal.maritalStatus": "Marital Status",
    "location.state": "State",
    "location.district": "District",
    "income.label": "Annual Income (₹)",
    "education.level": "Education Level",
    "occupation.label": "Occupation",
    "button.next": "Next",
    "button.previous": "Previous",
    "button.cancel": "Cancel",
    "button.findSchemes": "Find Schemes",
    backToHome: "Back to Home",
    "personal.namePlaceholder": "Enter your full name",
    "personal.agePlaceholder": "Enter your age",
    "personal.genderPlaceholder": "Select gender",
    "personal.male": "Male",
    "personal.female": "Female",
    "personal.other": "Other",
    "personal.maritalStatusPlaceholder": "Select marital status",
    "personal.single": "Single",
    "personal.married": "Married",
    "personal.divorced": "Divorced",
    "personal.widowed": "Widowed",
    "location.statePlaceholder": "Select state",
    "location.districtPlaceholder": "Enter your district",
    "income.annualIncome": "Annual Income (₹)",
    "education.educationLevel": "Education Level",
    "education.educationLevelPlaceholder": "Select education level",
    "education.noFormalEducation": "No Formal Education",
    "education.primarySchool": "Primary School",
    "education.secondarySchool": "Secondary School",
    "education.higherSecondary": "Higher Secondary",
    "education.graduate": "Graduate",
    "education.postGraduate": "Post Graduate",
    "occupation.occupation": "Occupation",
    "occupation.occupationPlaceholder": "Select occupation",
    "occupation.student": "Student",
    "occupation.unemployed": "Unemployed",
    "occupation.farmer": "Farmer",
    "occupation.selfEmployed": "Self-Employed",
    "occupation.privateSector": "Private Sector Employee",
    "occupation.publicSector": "Public Sector Employee",
    "occupation.retired": "Retired",
    "language.preferredLanguage": "Preferred Language",
    // Add more translations as needed
  },
  hi: {
    "eligibility.title": "पात्रता जांच",
    "eligibility.description": "आप जिन सरकारी योजनाओं के लिए पात्र हैं, उन्हें खोजने के लिए अपना विवरण प्रदान करें",
    "personal.name": "पूरा नाम",
    "personal.age": "आयु",
    "personal.gender": "लिंग",
    "personal.maritalStatus": "वैवाहिक स्थिति",
    "location.state": "राज्य",
    "location.district": "जिला",
    "income.label": "वार्षिक आय (₹)",
    "education.level": "शिक्षा स्तर",
    "occupation.label": "व्यवसाय",
    "button.next": "अगला",
    "button.previous": "पिछला",
    "button.cancel": "रद्द करें",
    "button.findSchemes": "योजनाएं खोजें",
    backToHome: "होम पेज पर वापस जाएं",
    "personal.namePlaceholder": "अपना पूरा नाम दर्ज करें",
    "personal.agePlaceholder": "अपनी आयु दर्ज करें",
    "personal.genderPlaceholder": "लिंग चुनें",
    "personal.male": "पुरुष",
    "personal.female": "महिला",
    "personal.other": "अन्य",
    "personal.maritalStatusPlaceholder": "वैवाहिक स्थिति चुनें",
    "personal.single": "अविवाहित",
    "personal.married": "विवाहित",
    "personal.divorced": "तलाकशुदा",
    "personal.widowed": "विधवा/विधुर",
    "location.statePlaceholder": "राज्य चुनें",
    "location.districtPlaceholder": "अपना जिला दर्ज करें",
    "income.annualIncome": "वार्षिक आय (₹)",
    "education.educationLevel": "शिक्षा स्तर",
    "education.educationLevelPlaceholder": "शिक्षा स्तर चुनें",
    "education.noFormalEducation": "कोई औपचारिक शिक्षा नहीं",
    "education.primarySchool": "प्राथमिक विद्यालय",
    "education.secondarySchool": "माध्यमिक विद्यालय",
    "education.higherSecondary": "उच्च माध्यमिक",
    "education.graduate": "स्नातक",
    "education.postGraduate": "स्नातकोत्तर",
    "occupation.occupation": "व्यवसाय",
    "occupation.occupationPlaceholder": "व्यवसाय चुनें",
    "occupation.student": "छात्र",
    "occupation.unemployed": "बेरोजगार",
    "occupation.farmer": "किसान",
    "occupation.selfEmployed": "स्वरोजगार",
    "occupation.privateSector": "निजी क्षेत्र कर्मचारी",
    "occupation.publicSector": "सार्वजनिक क्षेत्र कर्मचारी",
    "occupation.retired": "सेवानिवृत्त",
    "language.preferredLanguage": "पसंदीदा भाषा",
    // Add more translations as needed
  },
  // Add more languages as needed
}

// Add basic translations for other languages
indianLanguagesList.forEach((lang) => {
  if (!translations[lang.code]) {
    translations[lang.code] = translations.en // Fallback to English
  }
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    // Load language preference from localStorage on client side
    const savedLanguage = localStorage.getItem("preferredLanguage")
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export { indianLanguagesList }
