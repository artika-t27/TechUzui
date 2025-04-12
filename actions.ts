"use server"

import type { Scheme } from "./types"
import { mockSchemes } from "./mock-data"

// In a real application, this would interact with a database
export async function checkEligibility(formData: any): Promise<{ id: string }> {
  // Simulate server processing time
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Generate a random ID for the user profile
  const id = Math.random().toString(36).substring(2, 15)

  // In a real app, this would save the user profile to a database
  console.log("User profile submitted:", formData)

  return { id }
}

export async function getEligibleSchemes(userId: string): Promise<Scheme[]> {
  // Simulate server processing time
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // In a real app, this would fetch the user profile from a database
  // and then use AI to analyze the profile and match with eligible schemes

  // For demo purposes, we'll return mock data
  return mockSchemes
}
