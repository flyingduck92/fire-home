"use client"

import PropertyForm from '@/components/property-form'
import { propertyDataSchema } from '@/validation/propertySchema'
import { PlusCircleIcon } from 'lucide-react'
import * as z from "zod"

export default function NewPropertyForm() {
  const handleSubmit = async (data: z.infer<typeof propertyDataSchema>) => {
    console.log({ data })
  }
  return (
    <div>
      <PropertyForm handleSubmitAction={handleSubmit} submitButtonLabel={
        <>
          <PlusCircleIcon /> Create Property
        </>
      } />
    </div>
  )
}