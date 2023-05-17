export default function fahrenheitToCelsius(fahrenheit: number) {
  return Number(((fahrenheit - 32) * 5 / 9).toFixed(3));
}
