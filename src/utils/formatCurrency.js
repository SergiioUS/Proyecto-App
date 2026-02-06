export default function formatCurrency(value) {
  // Formatea a peso colombiano sin decimales
  const amount = Number(value) || 0;
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(amount);
}
