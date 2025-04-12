"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getEligibleSchemes } from "@/lib/actions"
import type { Scheme } from "@/lib/types"
import { ArrowLeft, Download, Filter } from "lucide-react"
import { SchemeCard } from "@/components/scheme-card"
import { SchemeFilter } from "@/components/scheme-filter"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/lib/language-context"

export default function Results() {
  const searchParams = useSearchParams()
  const id = searchParams.get("id")
  const { t } = useLanguage()

  const [schemes, setSchemes] = useState<Scheme[]>([])
  const [filteredSchemes, setFilteredSchemes] = useState<Scheme[]>([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState("all")
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    const fetchSchemes = async () => {
      if (!id) return

      try {
        const data = await getEligibleSchemes(id)
        setSchemes(data)
        setFilteredSchemes(data)
      } catch (error) {
        console.error("Error fetching schemes:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchSchemes()
  }, [id])

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)

    if (category === "all") {
      setFilteredSchemes(schemes)
    } else {
      setFilteredSchemes(schemes.filter((scheme) => scheme.category === category))
    }
  }

  const handleFilterApply = (filters: any) => {
    let filtered = schemes

    // Apply filters based on the filter object
    if (filters.minBenefit) {
      filtered = filtered.filter((scheme) => scheme.benefit >= filters.minBenefit)
    }

    if (filters.maxAge) {
      filtered = filtered.filter((scheme) => scheme.eligibility.maxAge >= filters.maxAge)
    }

    if (filters.states.length > 0) {
      filtered = filtered.filter(
        (scheme) => filters.states.includes(scheme.eligibility.state) || scheme.eligibility.state === "all",
      )
    }

    setFilteredSchemes(filtered)
    setShowFilters(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-700 mx-auto mb-4"></div>
          <p className="text-emerald-700 text-lg">Analyzing your profile and finding eligible schemes...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <Link href="/" className="flex items-center text-emerald-700 hover:text-emerald-500">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <LanguageSwitcher />
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-emerald-800 mb-2">Your Eligible Schemes</h1>
          <p className="text-gray-600">
            Based on your profile, we've identified {schemes.length} government schemes you may be eligible for.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="text-lg">Filters</CardTitle>
                <CardDescription>Refine your scheme results</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full mb-4 flex items-center justify-center"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="mr-2 h-4 w-4" />
                  {showFilters ? "Hide Filters" : "Show Filters"}
                </Button>

                {showFilters && <SchemeFilter onApply={handleFilterApply} />}

                <div className="mt-4">
                  <h3 className="font-medium mb-2">Categories</h3>
                  <div className="space-y-1">
                    <button
                      className={`w-full text-left px-3 py-2 rounded-md ${
                        activeCategory === "all" ? "bg-emerald-100 text-emerald-700" : "hover:bg-gray-100"
                      }`}
                      onClick={() => handleCategoryChange("all")}
                    >
                      All Schemes
                    </button>
                    <button
                      className={`w-full text-left px-3 py-2 rounded-md ${
                        activeCategory === "education" ? "bg-emerald-100 text-emerald-700" : "hover:bg-gray-100"
                      }`}
                      onClick={() => handleCategoryChange("education")}
                    >
                      Education
                    </button>
                    <button
                      className={`w-full text-left px-3 py-2 rounded-md ${
                        activeCategory === "healthcare" ? "bg-emerald-100 text-emerald-700" : "hover:bg-gray-100"
                      }`}
                      onClick={() => handleCategoryChange("healthcare")}
                    >
                      Healthcare
                    </button>
                    <button
                      className={`w-full text-left px-3 py-2 rounded-md ${
                        activeCategory === "agriculture" ? "bg-emerald-100 text-emerald-700" : "hover:bg-gray-100"
                      }`}
                      onClick={() => handleCategoryChange("agriculture")}
                    >
                      Agriculture
                    </button>
                    <button
                      className={`w-full text-left px-3 py-2 rounded-md ${
                        activeCategory === "employment" ? "bg-emerald-100 text-emerald-700" : "hover:bg-gray-100"
                      }`}
                      onClick={() => handleCategoryChange("employment")}
                    >
                      Employment
                    </button>
                    <button
                      className={`w-full text-left px-3 py-2 rounded-md ${
                        activeCategory === "housing" ? "bg-emerald-100 text-emerald-700" : "hover:bg-gray-100"
                      }`}
                      onClick={() => handleCategoryChange("housing")}
                    >
                      Housing
                    </button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center"
                  onClick={() => {
                    // In a real app, this would generate a PDF report
                    alert("This would download a PDF report of all eligible schemes in your preferred language.")
                  }}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Report
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="md:w-3/4">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="all">All Schemes</TabsTrigger>
                <TabsTrigger value="central">Central Govt.</TabsTrigger>
                <TabsTrigger value="state">State Govt.</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                {filteredSchemes.length > 0 ? (
                  filteredSchemes.map((scheme) => <SchemeCard key={scheme.id} scheme={scheme} />)
                ) : (
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-center py-8">
                        <p className="text-gray-500 mb-4">No schemes match your current filters.</p>
                        <Button
                          variant="outline"
                          onClick={() => {
                            setFilteredSchemes(schemes)
                            setActiveCategory("all")
                            setShowFilters(false)
                          }}
                        >
                          Reset Filters
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="central" className="space-y-4">
                {filteredSchemes
                  .filter((scheme) => scheme.type === "central")
                  .map((scheme) => (
                    <SchemeCard key={scheme.id} scheme={scheme} />
                  ))}
              </TabsContent>

              <TabsContent value="state" className="space-y-4">
                {filteredSchemes
                  .filter((scheme) => scheme.type === "state")
                  .map((scheme) => (
                    <SchemeCard key={scheme.id} scheme={scheme} />
                  ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
