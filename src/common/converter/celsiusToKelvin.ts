export default function celsiusToKelvin(celsius: number) {
  return Number((celsius + 273.15).toFixed(2));
}