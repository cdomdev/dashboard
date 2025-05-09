import * as Yup from "yup";

export const productValidationSchema = Yup.object({
  cantidad: Yup.number()
    .required("¡Este campo no puede quedar vacío!")
    .min(1, "Debe ser al menos 1"),

  marca: Yup.string().trim().required("¡Este campo no puede quedar vacío!"),

  titulo: Yup.string().trim().required("¡Este campo no puede quedar vacío!"),

  precio: Yup.number()
    .required("¡Este campo no puede quedar vacío!")
    .min(1, "Debe ser mayor a 0"),

  referencia: Yup.string().required("¡Este campo no puede quedar vacío!"),

  categoria: Yup.string().notRequired(),

  subcategoria: Yup.string().notRequired(),

  descripcion: Yup.string().required("¡Este campo no puede quedar vacío!"),

  // image: Yup.mixed()
  //   .required("¡Debes subir una imagen!")
  //   .test("fileType", "Solo se permiten imágenes", (value) => {
  //     if (!value || !(value instanceof File)) return false;
  //     return ["image/jpeg", "image/png", "image/webp", "image/gif"].includes(
  //       value.type
  //     );
  //   })
  //   .test("fileSize", "La imagen es muy grande", (value) => {
  //     if (!value || !(value instanceof File)) return false;
  //     return value.size <= 10 * 1024 * 1024;
  //   }),
});
