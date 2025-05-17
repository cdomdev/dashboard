"use client";

import { Formik, Field, ErrorMessage } from "formik";
import type { CategorySchema } from "@/interfaces";
import { Dataabase } from "../../../../components/icons";
import { ButtonGrs } from "../../../../components/ui/custom/buttons/Button";
import { createSubcategoria } from "../lib/subcategoria";
import { useToastStore } from "@/context/global.context.app";

export function FormSubcategory() {
  const onSubmit = async (
    values: CategorySchema,
    { resetForm }: { resetForm: () => void }
  ) => {
    const seToast = useToastStore.getState().setToast;
    try {
      const res = await createSubcategoria(values);
      if (res?.status === 201) {
        resetForm();
        seToast("Subcategoría creada con éxito", "toast-success");
      } else if (res.status === 409) {
        seToast(
          res.message || "Ya existe una subcategoría con ese nombre",
          "error"
        );
      } else {
        seToast(
          res.message || "Error inesperado al crear la subcategoría",
          "error"
        );
      }
    } catch (error) {
      console.error("Error creating subcategoria:", error);
    }
  };

  return (
    <Formik
      initialValues={{ nombre: "" }}
      validate={(values: CategorySchema) => {
        const errors: Partial<CategorySchema> = {};
        if (!values.nombre) {
          errors.nombre = "¡Este campo no puede quedar vacío!";
        }
        return errors;
      }}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <div className="grid grid-cols-1 md:flex w-full gap-4 mt-5">
          <form
            onSubmit={handleSubmit}
            className="shadow-md rounded-md p-4 bg-white md:w-2/3"
          >
            <label
              htmlFor="nombre"
              className="block my-1 pt-4 mx-1 text-sm font-medium text-gray-900"
            >
              Nombre
            </label>
            <div className="relative lg:max-w-3/4">
              <Field
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Nombre de la subcategoria"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring- focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-1 dark:focus:ring-blue-400 dark:focus:border-blue-400"
              />
            </div>
            <ErrorMessage
              name="nombre"
              component="div"
              className="text-red-500 text-sm mt-1 my-2"
            />
          </form>

          <div className="shadow-md rounded-md p-4 bg-white flex items-center justify-center max-h-20 lg:w-1/3">
            <ButtonGrs
              text="Guardar subcategoría"
              icon={<Dataabase />}
              onClick={handleSubmit}
            />
          </div>
        </div>
      )}
    </Formik>
  );
}
