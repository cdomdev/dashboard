import { Formik, Field, ErrorMessage } from "formik";
import type { ProductSchema } from "@/interfaces";
import { ButtonGrs } from "@/components/ui/custom/buttons/Button";
import { Dataabase } from "@/components/icons";
import { SelectSub } from "./SelectSub";
import { SelectCat } from "./SelectCat";
import { productValidationSchema } from "@/schemas/producvalidateSchema";
import { createProduct } from "../lib/products";
import { ImageDrop } from "./Drag";
import { useToastStore } from "@/context/global.context.app";
import { useState } from "react";
import { Spiner } from "@/components/ui/custom/loaders/Spiner";

export function FormProducts() {
  const [loading, setLoading] = useState<boolean>(false);
  const onSubmit = async (
    values: ProductSchema,
    { resetForm }: { resetForm: () => void }
  ) => {
    setLoading(true);
    const res = await createProduct(values);
    const seToast = useToastStore.getState().setToast;
    if (res.status === 200) {
      seToast(res.message || "Producto agregado con exito", "toast-success");
      resetForm();
      setLoading(false);
    } else {
      seToast(res.message || "Hubo un error al agregar el producto", "error");
      setLoading(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          cantidad: 1,
          marca: "",
          titulo: "",
          precio: 0,
          referencia: "",
          categoria: "",
          subcategoria: "",
          descripcion: "",
          image: "",
        }}
        validationSchema={productValidationSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => (
          <div className="flex w-full gap-4">
            <form
              onSubmit={handleSubmit}
              className="w-[75%] shadow-md rounded-md p-4 bg-white dark:bg-gray-100"
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

              <div className=" flex gap-4 max-w-2/4">
                <div className="w-full">
                  <label
                    htmlFor="cantidad"
                    className="block my-1 pt-4 mx-1 text-sm font-medium text-gray-900 "
                  >
                    Cantidad
                  </label>
                  <div className="relative">
                    <Field
                      type="text"
                      id="cantidad"
                      min={1}
                      name="cantidad"
                      placeholder="Referencia"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring- focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5
    dark:placeholder-gray-400  dark:focus:ring-1 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                    />
                  </div>
                  <ErrorMessage
                    name="cantidad"
                    component="div"
                    className="text-red-500 text-sm mt-1 my-2"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-full">
                  <SelectCat />
                </div>

                <div className="w-full">
                  <SelectSub />
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

            <div className="w-[25%] shadow-md rounded-md p-4 bg-white flex items-center justify-center max-h-20 dark:bg-gray-100">
              <ButtonGrs
                classNeme="w-full"
                onClick={handleSubmit}
                text=""
                icon={<Dataabase />}
              >
                {loading ? <Spiner className="w-6 h-6" /> : "Guardar producto"}
              </ButtonGrs>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}
