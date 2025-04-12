"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

interface SchemeFilterProps {
  onApply: (filters: any) => void
}

export function SchemeFilter({ onApply }: SchemeFilterProps) {
  const [filters, setFilters] = useState({
    minBenefit: 0,
    maxAge: 0,
    states: [] as string[],
  })

  const handleStateChange = (state: string, checked: boolean) => {
    setFilters((prev) => {
      if (checked) {
        return { ...prev, states: [...prev.states, state] }
      } else {
        return { ...prev, states: prev.states.filter((s) => s !== state) }
      }
    })
  }

  const handleSliderChange = (name: string, value: number[]) => {
    setFilters((prev) => ({ ...prev, [name]: value[0] }))
  }

  const handleReset = () => {
    setFilters({
      minBenefit: 0,
      maxAge: 0,
      states: [],
    })
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Minimum Benefit Amount (₹)</Label>
        <div className="pt-2 pb-1">
          <Slider
            value={[filters.minBenefit]}
            max={100000}
            step={5000}
            onValueChange={(value) => handleSliderChange("minBenefit", value)}
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>₹0</span>
            <span>₹{filters.minBenefit.toLocaleString()}</span>
            <span>₹1,00,000+</span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Maximum Age Limit</Label>
        <div className="pt-2 pb-1">
          <Slider
            value={[filters.maxAge]}
            max={80}
            step={5}
            onValueChange={(value) => handleSliderChange("maxAge", value)}
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>0 years</span>
            <span>{filters.maxAge > 0 ? `${filters.maxAge} years` : "No limit"}</span>
            <span>80+ years</span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label>States</Label>
        <div className="grid grid-cols-2 gap-2 mt-1">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="state-ap"
              checked={filters.states.includes("andhra-pradesh")}
              onCheckedChange={(checked) => handleStateChange("andhra-pradesh", checked as boolean)}
            />
            <Label htmlFor="state-ap" className="text-sm">
              Andhra Pradesh
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="state-ka"
              checked={filters.states.includes("karnataka")}
              onCheckedChange={(checked) => handleStateChange("karnataka", checked as boolean)}
            />
            <Label htmlFor="state-ka" className="text-sm">
              Karnataka
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="state-tn"
              checked={filters.states.includes("tamil-nadu")}
              onCheckedChange={(checked) => handleStateChange("tamil-nadu", checked as boolean)}
            />
            <Label htmlFor="state-tn" className="text-sm">
              Tamil Nadu
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="state-mh"
              checked={filters.states.includes("maharashtra")}
              onCheckedChange={(checked) => handleStateChange("maharashtra", checked as boolean)}
            />
            <Label htmlFor="state-mh" className="text-sm">
              Maharashtra
            </Label>
          </div>
        </div>
      </div>

      <div className="flex gap-2 pt-2">
        <Button variant="outline" size="sm" className="flex-1" onClick={handleReset}>
          Reset
        </Button>
        <Button size="sm" className="flex-1 bg-emerald-600 hover:bg-emerald-700" onClick={() => onApply(filters)}>
          Apply Filters
        </Button>
      </div>
    </div>
  )
}
