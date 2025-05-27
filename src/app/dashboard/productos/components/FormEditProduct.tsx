"use client";

import { Formik, Field, ErrorMessage, FieldProps } from "formik";
import type { ProductSchema } from "@/interfaces";
import { ButtonGrs } from "@/components/ui/custom/buttons/Button";
import { Dataabase } from "@/components/icons";
import { productValidationSchemaEdit } from "@/schemas/producvalidateSchema";
import { getProductBy, editProduct } from "../lib/products";
import { useToastStore } from "@/context/global.context.app";
import { useEffect, useState } from "react";
import { Spiner } from "@/components/ui/custom/loaders/Spiner";
import { useParams } from "next/navigation";
import { formatPrice, cleanPrice } from "../utils/formatPrice";

export function FormEditProduct() {
  const [loading, setLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<ProductSchema>();

  const params = useParams();
  const id = typeof params?.id === "string" ? params.id : undefined;

  useEffect(() => {
    async function fetchData() {
      const res = await getProductBy(id);
      if (res.status === 200) {
        setProduct(res.data.data);
      }
    }

    fetchData();
  }, [id]);
  const onSubmit = async (
    values: ProductSchema,
    { resetForm }: { resetForm: () => void }
  ) => {
    setLoading(true);
    const res = await editProduct(values);
    const setToast = useToastStore.getState().setToast;
    if (res.status === 201) {
      setToast(res.message || "Producto actulizado con exito", "toast-success");
      resetForm();
      setLoading(false);
    } else if (res.status === 401 || res.status === 402) {
      setToast(
        res.message ||
          "Algo salio mal con la sesion, por favor inicie sesion nuevamente en caso de persistir el error",
        "error"
      );
      setLoading(false);
    } else if (res.status === 500) {
      setToast(res.message || "Hubo un error al agregar el producto", "error");
      setLoading(false);
    }
  };

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          id: product?.id ?? "",
          cantidad: product?.cantidad ?? 1,
          marca: product?.marca ?? "",
          titulo: product?.titulo ?? "",
          precio: product?.precio ?? 0,
          descuento: product?.descuento ?? 0,
          referencia: product?.referencia ?? "",
          descripcion: product?.descripcion ?? "",
          image: "",
        }}
        validationSchema={productValidationSchemaEdit}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => (
          <div className="flex flex-col md:flex-row w-full gap-4">
            <form
              onSubmit={handleSubmit}
              className="md:w-[75%] shadow-md rounded-md p-4 bg-white dark:bg-gray-100 dark:text-gray-700"
            >
              <div className="grid md:grid-cols-2 gap-4">
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

              <div className="grid md:grid-cols-2 gap-4">
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
                    className="block my-1 pt-4 mx-1 text-sm font-medium text-gray-900"
                  >
                    Precio
                  </label>
                  <div className="relative">
                    <Field name="precio">
                      {({ field, form }: FieldProps<string, ProductSchema>) => (
                        <input
                          type="text"
                          id="precio"
                          placeholder="Precio"
                          value={
                            field.value !== undefined && field.value !== null
                              ? formatPrice(String(field.value))
                              : ""
                          }
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            const cleanValue = cleanPrice(e.target.value);
                            form.setFieldValue("precio", cleanValue);
                          }}
                          onBlur={field.onBlur}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring- focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-1 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                        />
                      )}
                    </Field>
                  </div>
                  <ErrorMessage
                    name="precio"
                    component="div"
                    className="text-red-500 text-sm mt-1 my-2"
                  />
                </div>
              </div>

              <div className=" grid md:grid-cols-2 gap-4">
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

                <div className="w-full">
                  <label
                    htmlFor="descuento"
                    className="block my-1 pt-4 mx-1 text-sm font-medium text-gray-900 "
                  >
                    Descuento
                  </label>
                  <div className="relative">
                    <Field
                      type="text"
                      id="descuento"
                      min={1}
                      name="descuento"
                      placeholder="Descuento"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring- focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5
    dark:placeholder-gray-400  dark:focus:ring-1 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                    />
                  </div>
                  <ErrorMessage
                    name="descuento"
                    component="div"
                    className="text-red-500 text-sm mt-1 my-2"
                  />
                </div>
              </div>


              <div className="mb-3 grid md:grid-cols-2 gap-4">
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
              </div>
            </form>

            <div className="md:w-[25%] shadow-md rounded-md p-4 bg-white flex items-center justify-center max-h-20 dark:bg-gray-100">
              <ButtonGrs
                classNeme="w-full w-fit"
                onClick={handleSubmit}
                text=""
                icon={<Dataabase />}
              >
                {loading ? (
                  <Spiner className="w-6 h-6" />
                ) : (
                  "Actulizar producto"
                )}
              </ButtonGrs>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}
