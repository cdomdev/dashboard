import { Formik, Field, ErrorMessage } from "formik";
import { useState } from "react";
import type { CategorySchema } from "@/interfaces";
import { ButtonGrs } from "@/components/ui/custom/buttons/Button";
import { Dataabase } from "@/components/icons";
import { editCategory } from "../lib/categoria";
import { useToastStore } from "@/context/global.context.app";
import { Modal } from "../../../../components/ui/custom/Modals/Modal";
import { Editbutton } from "@/components/ui/custom/buttons";

interface PropForm {
  nombre: string;
  category: string;
  id?: string;
}

interface Props {
  category: CategorySchema;
  setCategorias: React.Dispatch<React.SetStateAction<CategorySchema[]>>;
}

export function FormEditCat({ category, setCategorias }: Props) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const onSubmit = async (
    values: PropForm,
    { resetForm }: { resetForm: () => void }
  ) => {
    const seToast = useToastStore.getState().setToast;

    const res = await editCategory(values);

    if (res.success) {
      resetForm();
      setIsDeleteOpen(false);
      seToast("Categoría actalizada con éxito", "toast-success");
      setCategorias((prev) =>
        prev.map((cat) =>
          cat.id === category.id ? { ...cat, nombre: values.nombre } : cat
        )
      );
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
      <Editbutton onClick={() => setIsDeleteOpen(true)} />

      <Modal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        modalTitle="¿Está seguro?"
        modalContent="Esta acción modificara la categoría seleccionada."
      >
        <Formik
          initialValues={{
            nombre: category.nombre,
            id: category.id,
            category: category.nombre,
          }}
          validate={(values: PropForm) => {
            const errors: Partial<PropForm> = {};
            if (values.nombre === category.nombre) {
              errors.nombre =
                "¡Debe cambiar o ingresar una categoria con nombre distinto!";
            }
            return errors;
          }}
          onSubmit={onSubmit}
        >
          {({ handleSubmit }) => (
            <>
              <p className="text-red-500 font-medium text-base text-balance">
                <strong>¡Atención!</strong> Si la categoría seleccionada tiene
                productos asociados, se recomienda no modificarla.
              </p>
              <p className="text-red-500 font-medium text-base text-balance">
                Modificar esta categoría podría romper la referencia entre la
                categoría y los productos relacionados, lo que puede generar
                problemas de vinculación.
              </p>

              <form
                onSubmit={handleSubmit}
                className="rounded-md p-4 flex flex-col items-start"
              >
                <label
                  htmlFor="nombre"
                  className="my-1 mx-1 text-sm font-medium text-gray-900"
                >
                  Nombre
                </label>
                <div className="relative w-full">
                  <Field
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="nombre"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring- focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-1 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                  />
                </div>
                <ErrorMessage
                  name="nombre"
                  component="div"
                  className="text-red-500 text-sm mt-1 my-2"
                />
              </form>

              <div className="rounded-md p-4 bg-white flex items-center justify-center max-h-20">
                <ButtonGrs
                  text="Actulizar categoría"
                  classNeme="w-full "
                  icon={<Dataabase />}
                  onClick={handleSubmit}
                />
              </div>
            </>
          )}
        </Formik>
      </Modal>
    </>
  );
}
