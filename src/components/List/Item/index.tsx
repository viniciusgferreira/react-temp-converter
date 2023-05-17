import { Temp } from "..";
import celsiusToFahrenheit from "../../../common/converter/celsiusToFahrenheit";
import celsiusToKelvin from "../../../common/converter/celsiusToKelvin";
import fahrenheitToCelsius from "../../../common/converter/fahrenheitToCelsius";
import fahrenheitToKelvin from "../../../common/converter/fahrenheitToKelvin";
import kelvinToCelsius from "../../../common/converter/kelvinToCelsius";
import kelvinToFahrenheit from "../../../common/converter/kelvinToFahrenheit";

interface Props {
    label: string;
    temp: Temp,
    setTemp: React.Dispatch<React.SetStateAction<Temp>>
}



export default function Item({ label, temp, setTemp }: Props) {
    function changeAllTemp(event: React.ChangeEvent<HTMLInputElement>) {
        switch (event.target.id) {
            case 'celsius':
                const celsius = Number(event.target.value)
                setTemp({
                    celsius: celsius,
                    fahrenheit: celsiusToFahrenheit(celsius),
                    kelvin: celsiusToKelvin(celsius)
                })
                break;
            case 'fahrenheit':
                const fahrenheit = Number(event.target.value)
                setTemp({
                    celsius: fahrenheitToCelsius(fahrenheit),
                    fahrenheit: fahrenheit,
                    kelvin: fahrenheitToKelvin(fahrenheit)
                })
                break;
            case 'kelvin':
                const kelvin = Number(event.target.value)
                setTemp({
                    celsius: kelvinToCelsius(kelvin),
                    fahrenheit: kelvinToFahrenheit(kelvin),
                    kelvin: kelvin
                })
        }
    }

    return (
        <label>
            {label}
            <input
                type="text"
                id={label}
                value={temp[label]}
                onChange={e => {
                    changeAllTemp(e)
                }}>
            </input>
        </label >
    )
}