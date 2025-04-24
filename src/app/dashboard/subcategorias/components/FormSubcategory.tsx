import { Formik, Field, ErrorMessage } from "formik";
import type { categorySchema } from "@/interfaces";
import { Subcategorias } from "../../components/icons";
import { ButtonGrs } from "../../components/ui/buttons/ButtonGrs";

export function FormSubcategory() {
  const onSubmit = async (values: categorySchema) => {
    console.log("Formulario enviado:", values);
    // const res = await createSubcategoria(values);
  };

  return (
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
                placeholder="Título del producto"
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
              text="Guardar subcategoría"
              icon={<Subcategorias />}
              onClick={handleSubmit} 
            />
          </div>
        </div>
      )}
    </Formik>
  );
}
