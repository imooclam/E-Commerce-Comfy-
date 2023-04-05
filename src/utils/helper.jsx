export const formatPrice = number => {
  return Intl.NumberFormat('es-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100);
};
