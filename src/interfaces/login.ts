import { z } from "zod";


export const loginSchema = z.object({
  email: z.string().email({ message: "Este campo no puede quedar vacio" }),
  password: z.string({
    required_error: "Se requiere una contraseña",
  }).min(6, "Se requiere la contraseña"),
  
});

export type LoginSchema = z.infer<typeof loginSchema>;
