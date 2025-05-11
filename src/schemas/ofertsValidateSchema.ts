import * as Yup from "yup";

export const ofertValidationSchema = Yup.object({
    title: Yup.string()
        .trim()
        .required("¡Este campo no puede quedar vacío!"),

    start_date: Yup.date()
        .typeError("Fecha no válida")
        .required("¡Este campo no puede quedar vacío!"),

    end_date: Yup.date()
        .typeError("Fecha no válida")
        .required("¡Este campo no puede quedar vacío!"),

    products: Yup.array()
        .min(1, "¡Debes seleccionar al menos un producto!")
        .of(Yup.string().required()),
        
    // image: Yup.mixed()
    //     .required("¡Debes subir una imagen!")
    //     .test("fileType", "Solo se permiten imágenes", (value: any) => {
    //         const file = value instanceof File ? value : value?.[0];
    //         if (!file) return false;
    //         return ["image/jpeg", "image/png", "image/webp", "image/gif"].includes(file.type);
    //     })
    //     .test("fileSize", "La imagen es muy grande (máximo 10MB)", (value: any) => {
    //         const file = value instanceof File ? value : value?.[0];
    //         if (!file) return false;
    //         return file.size <= 10 * 1024 * 1024;
    //     }),
});
