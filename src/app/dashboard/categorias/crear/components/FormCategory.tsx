import { Formik, Field, ErrorMessage, Form } from "formik";
import type { categorySchema } from "@/interfaces";

export function FormCategory() {
  const onSubmit = async (values: categorySchema) => {
    console.log(values);
  };

  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
        }}
        validate={(values: categorySchema) => {
          const errors: Partial<categorySchema> = {};
          if (!values.nombre) {
            errors.nombre = "¡Este campo no puede quedar vacio!";
          }

          return errors;
        }}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="w-full">
            <div className="flex gap-4">
              <div className="max-w-1/2 w-full">
                <label
                  htmlFor="nombre"
                  className="block my-1 pt-4 mx-1 text-sm font-medium text-gray-900 "
                >
                  Titulo
                </label>
                <div className="relative">
                  <Field
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Titulo del producto"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring- focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5
                       dark:placeholder-gray-400  dark:focus:ring-1 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                  />
                </div>
                <ErrorMessage
                  name="nombre"
                  component="div"
                  className="text-red-500 text-sm mt-1 my-2"
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
