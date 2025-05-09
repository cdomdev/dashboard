import { getSubcategorias } from "@/app/dashboard/subcategorias/lib/subcategoria";
import { categorySchema, ProductSchema } from "@/interfaces";
import { useFormikContext, ErrorMessage } from "formik";
import { useEffect, useState } from "react";

export function SelectSub() {
  const [subcategories, setSubcategories] = useState<categorySchema[]>();

  const { setFieldValue, values } = useFormikContext<ProductSchema>();

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFieldValue("subcategoria", value);
  };

  useEffect(() => {
    async function fechtData() {
      const res = await getSubcategorias();
      if (res?.status === 200 && Array.isArray(res.data?.subcategorias)) {
        setSubcategories(res.data.subcategorias);
      }
    }
    fechtData();
  }, []);
  return (
    <>
      <label
        htmlFor="subcategoria"
        className="block my-1 pt-4 mx-1 text-sm font-medium text-gray-900 "
      >
        Categoría
      </label>
      <div className="relative">
        <select
          id="subcategoria"
          name="subcategoria"
          value={values.subcategoria}
          onChange={handleSelect}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-1 dark:focus:ring-blue-400 dark:focus:border-blue-400"
        >
          <option value="">Selecciona una Categoría</option>
          {subcategories?.map((item) => (
            <option key={item.id} value={item.id}>
              {item.nombre}
            </option>
          ))}
        </select>
      </div>
      <ErrorMessage
        name="subcategoria"
        component="div"
        className="text-red-500 text-sm mt-1 my-2"
      />
    </>
  );
}
