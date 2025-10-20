import { z } from "zod";

// Brazilian phone regex: (47) 99999-9999 or 47999999999
const phoneRegex = /^(\(?\d{2}\)?\s?)?\d{4,5}-?\d{4}$/;

// Email with extra security checks
const emailSchema = z
  .string()
  .trim()
  .email({ message: "E-mail inválido" })
  .max(255, { message: "E-mail muito longo" })
  .refine((email) => !email.includes(".."), {
    message: "E-mail inválido",
  });

// Phone with Brazilian format
const phoneSchema = z
  .string()
  .trim()
  .min(10, { message: "Telefone deve ter pelo menos 10 dígitos" })
  .max(15, { message: "Telefone muito longo" })
  .refine((phone) => phoneRegex.test(phone.replace(/\s/g, "")), {
    message: "Formato de telefone inválido. Use: (47) 99999-9999",
  });

// Company name validation
const companyNameSchema = z
  .string()
  .trim()
  .min(2, { message: "Nome da empresa deve ter pelo menos 2 caracteres" })
  .max(200, { message: "Nome da empresa muito longo" })
  .refine((name) => name.length > 0, {
    message: "Nome da empresa é obrigatório",
  });

// Full name validation
const fullNameSchema = z
  .string()
  .trim()
  .min(3, { message: "Nome completo deve ter pelo menos 3 caracteres" })
  .max(200, { message: "Nome muito longo" })
  .refine((name) => name.split(" ").length >= 2, {
    message: "Informe nome e sobrenome",
  });

// CNH category validation
const cnhCategorySchema = z.enum(["a", "ab", "A", "AB"], {
  errorMap: () => ({ message: "Categoria de CNH inválida" }),
});

// Client lead form schema
export const clientLeadSchema = z.object({
  company_name: companyNameSchema,
  email: emailSchema,
  phone: phoneSchema,
  business_type: z
    .string()
    .min(1, { message: "Selecione o tipo de negócio" })
    .max(100),
});

// Delivery application form schema
export const deliveryApplicationSchema = z.object({
  full_name: fullNameSchema,
  phone: phoneSchema,
  email: emailSchema,
  cnh_category: cnhCategorySchema,
  has_motorcycle: z.enum(["yes", "no"], {
    errorMap: () => ({ message: "Selecione se possui moto" }),
  }),
  previous_experience: z
    .string()
    .max(1000, { message: "Experiência muito longa (máximo 1000 caracteres)" })
    .optional(),
});

// Admin login schema
export const adminLoginSchema = z.object({
  email: emailSchema,
  password: z
    .string()
    .min(8, { message: "Senha deve ter pelo menos 8 caracteres" })
    .max(100, { message: "Senha muito longa" }),
});

// Sanitization helper
export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, "") // Remove potential HTML tags
    .substring(0, 1000); // Hard limit
};

// Type exports
export type ClientLeadInput = z.infer<typeof clientLeadSchema>;
export type DeliveryApplicationInput = z.infer<typeof deliveryApplicationSchema>;
export type AdminLoginInput = z.infer<typeof adminLoginSchema>;
