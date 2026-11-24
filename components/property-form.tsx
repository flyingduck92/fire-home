"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { propertyDataSchema } from '@/validation/propertySchema'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea
} from '@/components/ui/input-group'
import {
  Field,
  FieldGroup,
  FieldDescription,
  FieldError,
  FieldLabel
} from '@/components/ui/field'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select'

export type Props = {
  handleSubmitAction: (data: z.infer<typeof propertyDataSchema>) => void
}

export default function PropertyForm({ handleSubmitAction }: Props) {
  const form = useForm({
    resolver: zodResolver(propertyDataSchema),
    defaultValues: {
      address1: "",
      address2: "",
      city: "",
      postcode: "",
      price: 0,
      bedroom: 0,
      bathroom: 0,
      status: "draft",
      description: "",
    }
  })

  return (
    <form id="property-form" onSubmit={form.handleSubmit(handleSubmitAction)}>
      <div className='grid grid-cols-2'>
        <FieldGroup>
          <Controller
            name="status"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="property-form-status">Status</FieldLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger id="property-form-status" aria-invalid={fieldState.invalid}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="for-sale">For Sale</SelectItem>
                      <SelectItem value="withdrawn">Withdrawn</SelectItem>
                      <SelectItem value="sold">Sold</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Select>
              </Field>
            )}
          />
          <Controller
            name="address1"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="property-form-address1">Address 1</FieldLabel>
                <Input {...field}
                  id="property-form-address1"
                  aria-invalid={fieldState.invalid}
                  placeholder="College Rd"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="address2"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="property-form-address2">Address 2</FieldLabel>
                <Input {...field}
                  id="property-form-address2"
                  aria-invalid={fieldState.invalid}
                  placeholder="No. 45"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="city"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="property-form-city">City</FieldLabel>
                <Input {...field}
                  id="property-form-city"
                  aria-invalid={fieldState.invalid}
                  placeholder="Stoke-on-Trent"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="postcode"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="property-form-postcode">Postcode</FieldLabel>
                <Input {...field}
                  id="property-form-postcode"
                  aria-invalid={fieldState.invalid}
                  placeholder="ST4 1NL"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>
      </div>
    </form>
  )
}