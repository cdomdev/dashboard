import { Formik, Field, ErrorMessage } from "formik";
import type { ProductSchema } from "@/interfaces";
import { ImageDrop } from "./Drag";
import { ButtonGrs } from "@/app/dashboard/components/ui/buttons/ButtonGrs";
import { Dataabase } from "@/app/dashboard/components/icons";

export function FormProducts() {
  const onSubmit = async (values: ProductSchema) => {
    console.log("Formulario enviado:", values);
    console.log(values);
  };
  return (
    <>
      <Formik
        initialValues={{
          cantidad: 0,
          marca: "",
          titulo: "",
          precio: 0,
          referencia: "",
          categoria: "",
          subcategoria: "",
          descripcion: "",
          image: null,
        }}
        validate={(values: ProductSchema) => {
          const errors: Partial<ProductSchema> = {};
          if (!values.cantidad) {
            errors.cantidad = "¡Este campo no puede quedar vacio!";
          }
          if (!values.marca.trim()) {
            errors.marca = "¡Este campo no puede quedar vacio!";
          }
          if (!values.titulo.trim()) {
            errors.titulo = "¡Este campo no puede quedar vacio!";
          }
          if (!values.referencia) {
            errors.referencia = "¡Este campo no puede quedar vacio!";
          }
          if (!values.precio) {
            errors.precio = "¡Este campo no puede quedar vacio!";
          }
          if (!values.categoria) {
            errors.categoria = "¡Este campo no puede quedar vacio!";
          }
          if (!values.subcategoria) {
            errors.subcategoria = "¡Este campo no puede quedar vacio!";
          }
          if (!values.descripcion) {
            errors.descripcion = "¡Este campo no puede quedar vacio!";
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
              <div className="flex gap-4">
                <div className="w-full">
                  <label
                    htmlFor="titulo"
                    className="block my-1 pt-4 mx-1 text-sm font-medium text-gray-900 "
                  >
                    Titulo
                  </label>
                  <div className="relative">
                    <Field
                      type="text"
                      id="titulo"
                      name="titulo"
                      placeholder="Titulo del producto"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring- focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5
   dark:placeholder-gray-400  dark:focus:ring-1 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                    />
                  </div>
                  <ErrorMessage
                    name="titulo"
                    component="div"
                    className="text-red-500 text-sm mt-1 my-2"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="marca"
                    className="block my-1 pt-4 mx-1 text-sm font-medium text-gray-900 "
                  >
                    Marca
                  </label>
                  <div className="relative">
                    <Field
                      type="text"
                      id="marca"
                      name="marca"
                      placeholder="Marca del producto"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring- focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5
   dark:placeholder-gray-400  dark:focus:ring-1 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                    />
                  </div>
                  <ErrorMessage
                    name="marca"
                    component="div"
                    className="text-red-500 text-sm mt-1 my-2"
                  />
                </div>
              </div>

              <div className=" flex gap-4">
                <div className="w-full">
                  <label
                    htmlFor="referencia"
                    className="block my-1 pt-4 mx-1 text-sm font-medium text-gray-900 "
                  >
                    Referencia
                  </label>
                  <div className="relative">
                    <Field
                      type="text"
                      id="referencia"
                      min={0}
                      name="referencia"
                      placeholder="Referencia"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring- focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5
    dark:placeholder-gray-400  dark:focus:ring-1 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                    />
                  </div>
                  <ErrorMessage
                    name="referencia"
                    component="div"
                    className="text-red-500 text-sm mt-1 my-2"
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="precio"
                    className="block my-1 pt-4 mx-1 text-sm font-medium text-gray-900 "
                  >
                    Precio
                  </label>
                  <div className="relative">
                    <Field
                      type="number"
                      id="precio"
                      name="precio"
                      min={0}
                      placeholder="Precio"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring- focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5
    dark:placeholder-gray-400  dark:focus:ring-1 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                    />
                  </div>
                  <ErrorMessage
                    name="precio"
                    component="div"
                    className="text-red-500 text-sm mt-1 my-2"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-full">
                  <label
                    htmlFor="categoria"
                    className="block my-1 pt-4 mx-1 text-sm font-medium text-gray-900 "
                  >
                    Categoria
                  </label>
                  <div className="relative">
                    <Field
                      id="categoria"
                      as="select"
                      name="categoria"
                      placeholder="selecciona una categoria"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring- focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5
   dark:placeholder-gray-400  dark:focus:ring-1 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                    />
                  </div>
                  <ErrorMessage
                    name="categoria"
                    component="div"
                    className="text-red-500 text-sm mt-1 my-2"
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="subcategoria"
                    className="block my-1 pt-4 mx-1 text-sm font-medium text-gray-900 "
                  >
                    Subcategoria
                  </label>
                  <div className="relative">
                    <Field
                      id="subcategoria"
                      as="select"
                      name="subcategoria"
                      placeholder="selecciona una categoria"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring- focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5
   dark:placeholder-gray-400  dark:focus:ring-1 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                    />
                  </div>
                  <ErrorMessage
                    name="subcategoria"
                    component="div"
                    className="text-red-500 text-sm mt-1 my-2"
                  />
                </div>
              </div>

              <div className="mb-3 flex gap-4">
                <div className="w-full">
                  <label
                    htmlFor="descripcion"
                    className="block my-1 pt-4 mx-1 text-sm font-medium text-gray-900 "
                  >
                    Descripcion
                  </label>
                  <div className="relative">
                    <Field
                      rows={5}
                      id="descripcion"
                      as="textarea"
                      min={0}
                      name="descripcion"
                      placeholder="Descripcion..."
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring- focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5
   dark:placeholder-gray-400  dark:focus:ring-1 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                    />
                  </div>
                  <ErrorMessage
                    name="descripcion"
                    component="div"
                    className="text-red-500 text-sm mt-1 my-2"
                  />
                </div>

                <div className="w-full">
                  <ImageDrop name="image" />
                </div>
              </div>
            </form>

            <div className="w-[25%] shadow-md rounded-md p-4 bg-white flex items-center justify-center max-h-20">
              <ButtonGrs
                classNeme="w-full"
                text="Guardar producto"
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
