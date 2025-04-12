import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Scheme } from "@/lib/types"
import { ExternalLink, Calendar, Users, CheckCircle, AlertCircle } from "lucide-react"

interface SchemeCardProps {
  scheme: Scheme
}

export function SchemeCard({ scheme }: SchemeCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl text-emerald-800">{scheme.name}</CardTitle>
            <CardDescription className="mt-1">{scheme.description}</CardDescription>
          </div>
          <Badge
            variant={scheme.type === "central" ? "default" : "outline"}
            className={scheme.type === "central" ? "bg-emerald-600" : "text-emerald-600 border-emerald-600"}
          >
            {scheme.type === "central" ? "Central Govt." : "State Govt."}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex items-start space-x-2">
            <Users className="h-5 w-5 text-emerald-600 mt-0.5" />
            <div>
              <h4 className="font-medium">Eligibility</h4>
              <ul className="text-sm text-gray-600 list-disc list-inside">
                {scheme.eligibility.income && (
                  <li>Income: Up to ₹{scheme.eligibility.income.toLocaleString()} per annum</li>
                )}
                {scheme.eligibility.age && (
                  <li>
                    Age: {scheme.eligibility.minAge} to {scheme.eligibility.maxAge} years
                  </li>
                )}
                {scheme.eligibility.gender && <li>Gender: {scheme.eligibility.gender}</li>}
                {scheme.eligibility.education && <li>Education: {scheme.eligibility.education}</li>}
                {scheme.eligibility.occupation && <li>Occupation: {scheme.eligibility.occupation}</li>}
              </ul>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <Calendar className="h-5 w-5 text-emerald-600 mt-0.5" />
            <div>
              <h4 className="font-medium">Important Dates</h4>
              <ul className="text-sm text-gray-600 list-disc list-inside">
                {scheme.dates.application && <li>Application: {scheme.dates.application}</li>}
                {scheme.dates.deadline && <li>Deadline: {scheme.dates.deadline}</li>}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-emerald-50 p-3 rounded-md">
          <h4 className="font-medium flex items-center text-emerald-800 mb-2">
            <CheckCircle className="h-4 w-4 mr-2 text-emerald-600" />
            Benefits
          </h4>
          <p className="text-sm text-gray-700">{scheme.benefitDescription}</p>
          {scheme.benefit > 0 && (
            <p className="text-sm font-medium text-emerald-700 mt-2">
              Financial Assistance: Up to ₹{scheme.benefit.toLocaleString()}
            </p>
          )}
        </div>

        {scheme.documents && scheme.documents.length > 0 && (
          <div className="mt-4">
            <h4 className="font-medium flex items-center mb-2">
              <AlertCircle className="h-4 w-4 mr-2 text-amber-500" />
              Required Documents
            </h4>
            <ul className="text-sm text-gray-600 list-disc list-inside">
              {scheme.documents.map((doc, index) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" className="text-emerald-600 border-emerald-600">
          Save for Later
        </Button>
        <Button className="bg-emerald-600 hover:bg-emerald-700">
          Apply Now
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}
