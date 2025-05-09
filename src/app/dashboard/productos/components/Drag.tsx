import { useDropzone } from "react-dropzone";
import { useField, useFormikContext } from "formik";
import { useCallback, useEffect } from "react";
import Image from "next/image";
import { uploadImageToCloudinary } from "../utils/uploadCloudinary";
import { useState } from "react";
type ImageDropProps = {
  name: string;
};

export const ImageDrop = ({ name }: ImageDropProps) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  const [preview, setPreview] = useState<string | null>(field.value ?? null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPreview(field.value ?? null);
  }, [field.value]);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (!file) return;

      setLoading(true);
      const url = await uploadImageToCloudinary(file);
      setLoading(false);

      if (url) {
        setFieldValue(name, url);
        setPreview(url);
      }
    },
    [name, setFieldValue]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    multiple: false,
  });

  return (
    <div className="w-full">
      <label className="block my-1 pt-4 mx-1 text-sm font-medium text-gray-900">
        Imagen
      </label>
      <div
        {...getRootProps()}
        className={`bg-gray-50 border-2 border-dashed p-5 text-center cursor-pointer rounded-lg ${
          isDragActive ? "border-blue-400" : "border-gray-300"
        }`}
      >
        <input {...getInputProps()} />
        {loading ? (
          <p className="text-gray-500 text-sm">Subiendo imagen...</p>
        ) : preview ? (
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm text-gray-700">Imagen subida</p>
            <Image
              src={preview}
              alt="Previsualización"
              width={96}
              height={96}
              objectFit="contain"
            />
          </div>
        ) : (
          <p className="text-sm text-gray-500 flex items-center justify-center gap-2 flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-photo-scan size-12"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 8h.01" />
              <path d="M6 13l2.644 -2.644a1.21 1.21 0 0 1 1.712 0l3.644 3.644" />
              <path d="M13 13l1.644 -1.644a1.21 1.21 0 0 1 1.712 0l1.644 1.644" />
              <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
              <path d="M4 16v2a2 2 0 0 0 2 2h2" />
              <path d="M16 4h2a2 2 0 0 1 2 2v2" />
              <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
            </svg>
            Arrastra una imagen aquí, o haz clic para seleccionar
          </p>
        )}
      </div>
      {meta.touched && meta.error && (
        <div className="text-red-500 text-sm mt-1 my-2">{meta.error}</div>
      )}
    </div>
  );
};
