import { Temp } from "..";
import { celsiusToFahrenheit, celsiusToKelvin, fahrenheitToCelsius, fahrenheitToKelvin, kelvinToCelsius, kelvinToFahrenheit } from "../../../../common/converter/converter";
import styles from './Item.module.scss'

interface Props {
    label: string;
    minimumTemp: number,
    temp: Temp,
    setTemp: React.Dispatch<React.SetStateAction<Temp>>
}



export default function Item({ label, temp, minimumTemp, setTemp }: Props) {
    function changeAllTemp(event: React.ChangeEvent<HTMLInputElement>) {
        if (isNaN(Number(event.target.value))) { console.log('if'); return }
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
        <li className={styles.item}>
            <div className={styles.item__label}>
                {label.toUpperCase()}
            </div>
            <div className={styles.temp}>
                <input
                    className={styles.item__input}
                    type="number"
                    id={label}
                    min={minimumTemp}
                    value={temp[label]}
                    onChange={e => {
                        changeAllTemp(e)
                    }}>
                </input>
                <span className={styles.item__unit}>
                    °{label.substring(0, 1).toUpperCase()}
                </span>
            </div >
        </li>
    )
}