import { Control, FieldErrors, UseFormRegister } from 'react-hook-form';
import * as z from 'zod';

export const formSchema = z.object({
  file: z
    .custom<FileList>()
    .refine((file) => file.length > 0, 'You need to upload something...'),
  name: z
    .string()
    .min(3, 'Name must be at least 3 characters')
    .max(30, 'Name max length is 30 characters'),
  externalLink: z.string().url().optional(),
  licenseType: z.string().optional(),
  numberOfCopies: z.optional(z.number().min(1).max(100).positive()),
  description: z
    .string()
    .min(10, 'Description must be at least 10 characters')
    .max(250, 'Description max length is 250 characters')
    .optional(),
  category: z.string(),
  price: z
    .number()
    .positive('Price must be greater than zero')
    .max(1000, 'Price max value is 1000'),
  royalty: z
    .number()
    .positive('Royalty must be greater than zero')
    .max(50, 'Royalty max value is 50'),
  blockchain: z.string(),
});

export type FormValues = z.infer<typeof formSchema>;

export type Register = {
  register?: UseFormRegister<FormValues>;
  control?: Control<FormValues>;
  errors?: FieldErrors<FormValues>;
};
