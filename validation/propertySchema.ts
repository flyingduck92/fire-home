import * as z from 'zod'

export const propertyDataSchema = z.object({
  address1: z.string().min(1, "Address Line 1 must contains value"),
  address2: z.string().optional(),
  city: z.string().min(3, "City must contain at least 3 characters"),
  postcode: z.string().refine(postcode => {
    const postcodeRegex = /^[A-Z]{1,2}[0-9]{1,2}[A-Z]?\s?[0-9][A-Z]{2}$/i
    return postcodeRegex.test(postcode)
  }, "Invalid UK Postcode"),
  price: z.coerce.number().positive("Price must be greater than 0"),
  description: z.string().min(40, "Description must contain at least 40 characters"),
  bedroom: z.coerce.number().min(0, "Bedroom must be at least 0"),
  bathroom: z.coerce.number().min(0, "Bathroom must be at least 0"),
  status: z.enum(["draft", "for-sale", "withdrawn", "sold"]),
})