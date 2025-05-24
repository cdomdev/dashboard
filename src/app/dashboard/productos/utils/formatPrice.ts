export const formatPrice = (value: string | number): string => {
  if (!value) return "";
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const cleanPrice = (value: string): string => {
  return value.replace(/\./g, "");
};
