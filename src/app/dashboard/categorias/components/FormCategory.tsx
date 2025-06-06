"use client";

import { Formik, Field, ErrorMessage } from "formik";
import type { CategorySchema } from "@/interfaces";
import { ButtonGrs } from "@/components/ui/custom/buttons/Button";
import { Dataabase } from "@/components/icons";
import { createCategoria } from "../lib/categoria";
import { useToastStore } from "@/context/global.context.app";

export function FormCategory() {
  const { showToast } = useToastStore();
  const onSubmit = async (
    values: CategorySchema,
    { resetForm }: { resetForm: () => void }
  ) => {
    const res = await createCategoria(values);

    if (res.success) {
      resetForm();
      showToast("Categoría creada con éxito", "success");
    } else {
      if (res.status === 409) {
        showToast(
          res.message || "Ya existe una categoría con ese nombre",
          "error"
        );
      } else if (res.status === 401 || res.status === 403) {
        showToast(
          "Algo salio mal con la sesion, si el problma persiste inicie sesion nuevamente",
          "error"
        );
      }
    }
  };

  return (
    <>
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
          <div className="grid grid-cols-1 md:flex w-full gap-4 ">
            <form
              onSubmit={handleSubmit}
              className="shadow-md rounded-md p-4 bg-white  md:w-2/3"
            >
              <label
                htmlFor="nombre"
                className="block my-1 pt-4 mx-1 text-sm font-medium text-gray-900"
              >
                Nombre
              </label>
              <div className="relative w-full lg:max-w-3/4">
                <Field
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Nombre de la categoria"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring- focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-1 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                />
              </div>
              <ErrorMessage
                name="nombre"
                component="div"
                className="text-red-500 text-sm mt-1 my-2"
              />
            </form>

            <div className="shadow-md rounded-md p-4 bg-white flex items-center justify-center max-h-20 dark:bg-gray-200 lg:w-1/3">
              <ButtonGrs
                text="Guardar categoría"
                icon={<Dataabase />}
                onClick={handleSubmit}
              />
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}
