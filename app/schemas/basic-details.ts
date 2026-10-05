import z from "zod";

export const basicDetailsSchema = z.object({
  businessName: z
    .string()
    .min(1, { message: "Business Name is required" })
    .max(50, { message: "Business Name must be less than 50 characters" }),
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(50, { message: "Name must be at most 50 characters" }),
  email: z.string().email({ message: "Invalid Email Address" }),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"),

    password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(20, { message: "Password must be at most 20 characters long" })
});
export type BasicDetailsForm = z.infer<typeof basicDetailsSchema>;