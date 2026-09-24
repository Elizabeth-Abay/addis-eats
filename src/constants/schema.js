import { z } from 'zod';

const mobileAuthSchema = z.object({
  authMethod: z.literal('mobile'),
  mobileNumber: z
    .string()
    .min(1, 'Mobile number is required')
    .regex(/^\+?251[79]\d{8}$|^0?[79]\d{8}$/, 'Enter a valid Ethiopian phone number'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const emailAuthSchema = z.object({
  authMethod: z.literal('email'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const authSchema = z.discriminatedUnion('authMethod', [
  mobileAuthSchema,
  emailAuthSchema,
]);



export const deliverySchema = z.object({
  subCity: z.string().min(1, 'Please select a sub-city'),
  houseNo: z.string().min(1, 'House number / street is required'),
  landmark: z.string().min(1, 'Landmark & gate color is required'),
});


export const paymentSchema = z
  .object({
    isSelected: z.boolean(),
    requiredElts: z.boolean().optional(),
    inputValue: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.isSelected && data.requiredElts && (!data.inputValue || !data.inputValue.trim())) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'This payment detail field is required',
        path: ['inputValue'],
      });
    }
  });



export const profileSchema = z.object({
  fullName: z
    .string()
    .min(1, 'Full name is required')
    .min(3, 'Full name must be at least 3 characters'),
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^\+?251[79]\d{8}$|^0?[79]\d{8}$/, 'Enter a valid phone number (e.g., +251911234567 or 0911234567)'),
});