import { z } from "zod";

export const productSchema = z.object({
  id: z.string().optional(),
  cantidad: z.number(),
  marca: z.string(),
  titulo: z.string(),
  precio: z.number(),
  referencia: z.string(),
  categoria: z.string().optional(),
  subcategoria: z.string().optional(),
  descuento: z.number().optional(),
  descripcion: z.string(),
  image: z.string(),
});

export const categorySchema = z.object({
  id: z.string().optional(),
  nombre: z.string(),
  codigo: z.string().optional(),
});

export const ofertsSchema = z.object({
  title: z.string(),
  start_date: z.union([z.string(), z.date()]),
  end_date: z.union([z.string(), z.date()]),
  products: z.array(z.string()),
  image: z.instanceof(File).nullable(),
});

const rolesSchema = z.object({
  id: z.string(),
  nombre: z.string(),
});

export const userSchema = z.object({
  id: z.string(),
  nombre: z.string(),
  email: z.string().email(),
  estado: z.string(),
  picture: z.string().nullable(),
  direccion: z.string(),
  telefono: z.string(),
  ciudad: z.string(),
  departamento: z.string(),

  roles: rolesSchema,
});

export const detailOrder = z.object({
  id: z.number(),
  precio_unitario: z.string(),
  sub_total: z.string(),
  cantidad: z.number(),
  descuento: z.number(),
  createdAt: z.union([z.string(), z.date()]),
  updatedAt: z.union([z.string(), z.date()]),

  productos: productSchema,
});

export const orderSchema = z.object({
  id: z.string(),
  metodo_de_pago: z.string(),
  estado_pedido: z.string(),
  costo_de_envio: z.string(),
  status_mercadopago: z.string(),
  pago_total: z.string(),
  createdAt: z.union([z.string(), z.date()]),
  updatedAt: z.union([z.string(), z.date()]),

  usuario: userSchema,

  detalles_pedido: detailOrder.array(),
});

export const balanceSchema = z.object({
  users: z.number(),
  totalOrders: z.number(),
  totalSales: z.number(),
  totalPending: z.number(),
  totalShipped: z.number(),
});

export const notificationSchema = z.object({
  id: z.number(),
  status: z.boolean(),
  mensaje: z.string(),
  createdAt: z.string() || z.date(),
});

export const loginSchema = z.object({
  email: z.string().email({ message: "Este campo no puede quedar vacio" }),
  password: z
    .string({
      required_error: "Se requiere una contraseña",
    })
    .min(6, "Se requiere la contraseña"),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export type ProductSchema = z.infer<typeof productSchema>;

export type OfertsSchema = z.infer<typeof ofertsSchema>;

export type CategorySchema = z.infer<typeof categorySchema>;

export type OrderSchema = z.infer<typeof orderSchema>;

export type UserSchema = z.infer<typeof userSchema>;

export type BalanceSchema = z.infer<typeof balanceSchema>;

export type NotificationSchema = z.infer<typeof notificationSchema>;
