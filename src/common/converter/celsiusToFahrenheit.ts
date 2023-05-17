export default function celsiusToFahrenheit(celsius: number) {
  return Number(((celsius * 9 / 5) + 32).toFixed(3));
}

