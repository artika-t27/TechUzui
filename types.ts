export interface Scheme {
  id: string
  name: string
  description: string
  category: string
  type: "central" | "state"
  benefit: number
  benefitDescription: string
  eligibility: {
    income?: number
    minAge?: number
    maxAge?: number
    gender?: string
    state?: string
    education?: string
    occupation?: string
  }
  dates: {
    application?: string
    deadline?: string
  }
  documents?: string[]
  applicationUrl?: string
}

export interface UserProfile {
  id: string
  name: string
  age: number
  gender: string
  state: string
  district: string
  income: number
  occupation: string
  education: string
  maritalStatus: string
  language: string
}
