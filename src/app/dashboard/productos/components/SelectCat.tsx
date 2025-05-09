import { getCategorias } from "@/app/dashboard/categorias/lib/categoria";
import { categorySchema, ProductSchema } from "@/interfaces";
import { ErrorMessage, useFormikContext } from "formik";
import { useEffect, useState } from "react";

export function SelectCat() {
  const [categories, setCategories] = useState<categorySchema[]>([]);

  const { setFieldValue, values} = useFormikContext<ProductSchema>();

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFieldValue("categoria", value);
  };

  useEffect(() => {
    async function fetchData() {
      const res = await getCategorias();
      if (res?.status === 200 && Array.isArray(res.data?.categorias)) {
        setCategories(res.data.categorias);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <label
        htmlFor="categoria"
        className="block my-1 pt-4 mx-1 text-sm font-medium text-gray-900 "
      >
        Categoría
      </label>
      <div className="relative">
        <select
          id="categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleSelect}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-1 dark:focus:ring-blue-400 dark:focus:border-blue-400"
        >
          <option value="">Selecciona una Categoría</option>
          {categories.map((item) => (
            <option key={item.id} value={item.id}>
              {item.nombre}
            </option>
          ))}
        </select>
      </div>
      <ErrorMessage
        name="categoria"
        component="div"
        className="text-red-500 text-sm mt-1 my-2"
      />
    </>
  );
}
