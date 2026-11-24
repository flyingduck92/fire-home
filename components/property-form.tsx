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
  submitButtonLabel: React.ReactNode
}

export default function PropertyForm({ handleSubmitAction, submitButtonLabel }: Props) {
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
      <div className='grid grid-cols-2 gap-4'>
        <FieldGroup className='gap-4'>
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
                <FieldLabel htmlFor="property-form-address1">Address Line 1</FieldLabel>
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
                <FieldLabel htmlFor="property-form-address2">Address Line 2</FieldLabel>
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
        <FieldGroup className='gap-4'>
          <Controller
            name="price"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="property-form-price">Price</FieldLabel>
                <Input {...field}
                  type="number"
                  value={field.value as number}
                  id="property-form-price"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="bedroom"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="property-form-bedroom">Bedroom</FieldLabel>
                <Input {...field}
                  type="number"
                  value={field.value as number}
                  id="property-form-bedroom"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="bathroom"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="property-form-bathroom">Bathroom</FieldLabel>
                <Input {...field}
                  type="number"
                  value={field.value as number}
                  id="property-form-bathroom"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="description"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="property-form-description">
                  Description
                </FieldLabel>
                <InputGroup>
                  <InputGroupTextarea
                    {...field}
                    placeholder="Write property description and facilities here"
                    id="property-form-description"
                    className="max-h-16 overflow-y-auto resize-none"
                    aria-invalid={fieldState.invalid}
                  />
                  <InputGroupAddon align="block-end">
                    <InputGroupText className="tabular-nums">
                      {field.value.length} characters
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
                <FieldDescription className='text-gray-800 font-semibold'>
                  Please include other facilities and aminities on description
                </FieldDescription>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>
      </div>
      <Button type="submit" className="max-w-md mx-auto mt-2 w-full flex gap-2">
        {submitButtonLabel}
      </Button>
    </form>
  )
}