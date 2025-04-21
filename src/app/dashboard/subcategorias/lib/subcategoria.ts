interface Subcategoria {
  nombre: string;
}

export function createSubcategoria({ nombre }: Subcategoria) {
  const res = fetch("http://localhost:3000/api/categories/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre }),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });

  return res;
}
