"use client"

import { useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import type { OfertsSchema } from "@/interfaces";
import { ButtonGrs } from "@/components/ui/custom/buttons/Button";
import { Dataabase } from "@/components/icons";
import { ofertValidationSchema } from "@/schemas/ofertsValidateSchema";
import { ImageDrop } from "@/app/dashboard/productos/components/Drag";
import { PopoverProducts } from './ProductsList'
// import { useToastStore } from "@/context/global.context.app";
import { Spiner } from "@/components/ui/custom/loaders/Spiner";

export function FormOferts() {
    const [loading, setLoading] = useState<boolean>(false);
    const onSubmit = async (
        values: OfertsSchema,
        // { resetForm }: { resetForm: () => void }
    ) => {
        setLoading(true);
        console.log(values)
        setLoading(false)
        // const res = await createProduct(values);
        // const seToast = useToastStore.getState().setToast;
        // if (res.status === 200) {
        //   seToast(res.message || "Producto agregado con exito", "toast-success");
        //   resetForm();
        //   setLoading(false);
        // } else {
        //   seToast(res.message || "Hubo un error al agregar el producto", "error");
        //   setLoading(false);
        // }
    };

    return (
        <>
            <Formik
                initialValues={{
                    title: "",
                    start_date: "",
                    end_date: "",
                    products: [],
                    image: null,
                }}
                validationSchema={ofertValidationSchema}
                onSubmit={onSubmit}
            >
                {({ handleSubmit, setFieldValue, values }) => (
                    <div className="flex flex-col md:flex-row w-full gap-4">
                        <form
                            onSubmit={handleSubmit}
                            className="md:w-[75%] shadow-md rounded-md p-4 bg-white dark:bg-gray-100"
                        >
                            <div className="grid  gap-4">
                                <div className="w-full">
                                    <label
                                        htmlFor="title"
                                        className="block my-1 pt-4 mx-1 text-sm font-medium text-gray-900 "
                                    >
                                        Titulo
                                    </label>
                                    <div className="relative">
                                        <Field
                                            type="text"
                                            id="title"
                                            name="title"
                                            placeholder="Titulo de la oferta"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring- focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5
   dark:placeholder-gray-400  dark:focus:ring-1 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                                        />
                                    </div>
                                    <ErrorMessage
                                        name="title"
                                        component="div"
                                        className="text-red-500 text-sm mt-1 my-2"
                                    />
                                </div>

                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="w-full">
                                    <label
                                        htmlFor="start_date"
                                        className="block my-1 pt-4 mx-1 text-sm font-medium text-gray-900 "
                                    >
                                        Fecha de inicio de la oferta
                                    </label>
                                    <div className="relative">
                                        <Field
                                            type="date"
                                            id="start_date"
                                            name="start_date"
                                            placeholder="Fecha de inicio"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring- focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5
    dark:placeholder-gray-400  dark:focus:ring-1 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                                        />
                                    </div>
                                    <ErrorMessage
                                        name="start_date"
                                        component="div"
                                        className="text-red-500 text-sm mt-1 my-2"
                                    />
                                </div>

                                <div className="w-full">
                                    <label
                                        htmlFor="end_date"
                                        className="block my-1 pt-4 mx-1 text-sm font-medium text-gray-900 "
                                    >
                                        Fecha final de la oferta
                                    </label>
                                    <div className="relative">
                                        <Field
                                            type="date"
                                            id="end_date"
                                            name="end_date"
                                            placeholder="Fecha final"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring- focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5
    dark:placeholder-gray-400  dark:focus:ring-1 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                                        />
                                    </div>
                                    <ErrorMessage
                                        name="end_date"
                                        component="div"
                                        className="text-red-500 text-sm mt-1 my-2"
                                    />
                                </div>
                            </div>

                            <div className="mb-3 gap-4">
                                <label
                                    htmlFor="end_date"
                                    className="block my-1 pt-4 mx-1 text-sm font-medium text-gray-900 "
                                >
                                    Productos para la oferta
                                </label>
                                <span className="text-md dark:text-black">Productos seleccionados: {values.products.length || ""}</span>
                                <PopoverProducts selectedproducts={values.products} setSelectedProducts={(prods) => setFieldValue("products", prods)} />
                            </div>


                            <div className="mb-3 gap-4">

                                <div className="w-full">
                                    <ImageDrop name="image" />
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
                                {loading ? <Spiner className="w-6 h-6" /> : "Guardar oferta"}
                            </ButtonGrs>
                        </div>
                    </div>
                )}
            </Formik>
        </>
    );
}
