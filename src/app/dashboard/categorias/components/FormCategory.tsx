import { Formik, Field, ErrorMessage } from "formik";
import type { categorySchema } from "@/interfaces";
import { ButtonGrs } from "@/app/dashboard/components/ui/buttons/Button";
import { Dataabase } from "@/app/dashboard/components/icons";
import { createCategoria } from "../lib/categoria";
import { useToastStore } from "@/app/dashboard/components/context/global.context.app";

export function FormCategory() {
  const onSubmit = async (
    values: categorySchema,
    { resetForm }: { resetForm: () => void }
  ) => {
    const seToast = useToastStore.getState().setToast;
    const res = await createCategoria(values);

    if (res.success) {
      resetForm();
      seToast("Categoría creada con éxito", "toast-success");
    } else {
      if (res.status === 409) {
        seToast(
          res.message || "Ya existe una categoría con ese nombre",
          "error"
        );
      } else {
        seToast(
          res.message || "Error inesperado al crear la categoría",
          "error"
        );
      }
    }
  };

  return (
    <>
      <Formik
        initialValues={{ nombre: "" }}
        validate={(values: categorySchema) => {
          const errors: Partial<categorySchema> = {};
          if (!values.nombre) {
            errors.nombre = "¡Este campo no puede quedar vacío!";
          }
          return errors;
        }}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => (
          <div className="flex w-full gap-4">
            <form
              onSubmit={handleSubmit}
              className="w-[75%] shadow-md rounded-md p-4 bg-white"
            >
              <label
                htmlFor="nombre"
                className="block my-1 pt-4 mx-1 text-sm font-medium text-gray-900"
              >
                Nombre
              </label>
              <div className="relative max-w-2/4">
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

            <div className="w-[25%] shadow-md rounded-md p-4 bg-white flex items-center justify-center max-h-20">
              <ButtonGrs
                text="Guardar categoría"
                classNeme="w-full "
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
