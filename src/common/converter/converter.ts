export function celsiusToFahrenheit(celsius: number) {
  return Number(((celsius * 9 / 5) + 32).toFixed(2));
}

export function celsiusToKelvin(celsius: number) {
  return Number((celsius + 273.15).toFixed(2));
}

export function fahrenheitToCelsius(fahrenheit: number) {
  return Number(((fahrenheit - 32) * 5 / 9).toFixed(2));
}

export function fahrenheitToKelvin(fahrenheit: number) {
  const kelvin = Number(((fahrenheit - 32) * 5 / 9 + 273.15).toFixed(2));
  return kelvin;
}

export function kelvinToCelsius(kelvin: number) {
  return Number((kelvin - 273.15).toFixed(2));
}


export function kelvinToFahrenheit(kelvin: number) {
  return Number(((kelvin * 9 / 5) - 459.67).toFixed(2));
}


