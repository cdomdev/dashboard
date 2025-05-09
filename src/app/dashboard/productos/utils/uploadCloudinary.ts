export async function uploadImageToCloudinary(
  file: File
): Promise<string | null> {
  const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDNAME;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "upload-images");

  try {
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    if (res.ok) {
      // Retornamos una URL transformada: webp, calidad auto, tamaño 500x500
      const transformedUrl = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_webp,q_auto,w_300,h_300,c_fill/${data.public_id}.${data.format}`;
      return transformedUrl;
    }    
    console.error("Cloudinary error:", data);
    return null;
  } catch (error) {
    console.error("Upload failed:", error);
    return null;
  }
}

