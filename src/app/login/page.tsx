"use client";

import { LoginSchema } from "@/interfaces/login";
import { useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { loginAdmin } from "./actions";
import { useToastStore } from "../../context/global.context.app";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const seToast = useToastStore.getState().setToast;

  useToastStore();
  const onSubmit = async (data: LoginSchema) => {
    setIsLoading(true);

    const res = await loginAdmin(data);
    const { result, response } = res;
    console.log(result);
    console.log(response);
    if (res) {
      seToast(
        `${result ? result.message : "Hubo un error en el inicio de sesion"} `,
        "erros"
      );
      setIsLoading(false);
    } else {
      seToast(
        "Algo salio mal con el inicio de sesion, intente mas tarde",
        "error"
      );
    }
  };

  return (
    <section className="text-white  min-h-screen bg-gradient-to-r from-[rgba(191,190,167,1)] via-[rgba(200,200,200,1)] to-[rgba(195,195,195,1)] bg-[112deg] flex justify-center flex-col items-center gap-3 auth">
      <div className="w-80 md:w-96 p-4 h-auto md:min-h-96 flex flex-col items-center rounded-lg shadow-xl bg-white">
        <div className="my-4">
          <h1 className="font-semibold text-lg md:text-2xl  text-black text-center">
            Bienvenido
          </h1>
          <p className="text-slate-700 text-xs md:text-sm">
            Por favor ingrese sus credenciales
          </p>
        </div>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values: LoginSchema) => {
            const errors: Partial<LoginSchema> = {};
            if (!values.email) {
              errors.email = "¡Este campo no puede quedar vacio!";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Ingrese una dirección de correo válida";
            }
            if (!values.password) {
              errors.password = "¡Este campo no puede quedar vacio!";
            }
            return errors;
          }}
          onSubmit={onSubmit}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit} className="w-full">
              <div className="mb-3">
                <label
                  htmlFor="email-address-icon"
                  className="block my-1 pt-4 mx-1 text-sm font-medium text-gray-900 "
                >
                  Correo electronico
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"></path>
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"></path>
                    </svg>
                  </div>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@example.com"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring- focus:ring-blue-400 focus:border-blue-400 block w-full ps-10 p-2.5
             dark:bg-gray-600 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-1 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                  />
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1 my-2"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email-address-icon"
                  className="block my-1 mx-1 text-sm font-medium text-gray-900 "
                >
                  Contraseña
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 -start-1 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      className="w-6 h-6 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="evenodd"
                        d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Ingrese su contraseña"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring- focus:ring-blue-400 focus:border-blue-400 block w-full ps-10 p-2.5
                    dark:bg-gray-600 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-1 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                  />
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1 "
                />
              </div>
              <button
                type="submit"
                className="bg-blue-700 w-full text-white mt-3 rounded-md py-2.5 text-xs md:text-sm uppercase hover:bg-blue-500 duration-150"
              >
                {isLoading ? (
                  <p className="text-xs uppercase font-normal">
                    Validando datos...
                  </p>
                ) : (
                  <p className="text-xs uppercase font-normal">
                    Iniciar sesion
                  </p>
                )}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
