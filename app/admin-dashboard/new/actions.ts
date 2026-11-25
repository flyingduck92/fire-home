"use server"

import { auth, firestore } from '@/firebase/server'
import { propertyDataSchema } from '@/validation/propertySchema'

type ISaveNewProperty = {
  address1: string
  address2?: string | undefined
  city: string
  postcode: string
  price: number
  description: string
  bedroom: number
  bathroom: number
  status: "draft" | "for-sale" | "withdrawn" | "sold"
  token: string
}

export async function saveNewProperty(data: ISaveNewProperty) {
  const { token, ...propertyFormSubmit } = data

  const verifiedToken = await auth.verifyIdToken(token)
  if (!verifiedToken.admin) {
    return {
      error: true,
      message: "Unauthorized"
    }
  }

  const validatedProperty = propertyDataSchema.safeParse(propertyFormSubmit)
  if (!validatedProperty.success) {
    return {
      error: true,
      message: validatedProperty.error.issues[0].message || "An error occurred"
    }
  }

  const savedProperty = await firestore.collection("properties").add({
    ...validatedProperty,
    createdAt: new Date(),
    updatedAt: new Date()
  })

  return { propertyId: savedProperty.id }
}