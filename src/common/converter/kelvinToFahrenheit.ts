export default function kelvinToFahrenheit(kelvin: number) {
  return Number(((kelvin * 9 / 5) - 459.67).toFixed(2));
}
