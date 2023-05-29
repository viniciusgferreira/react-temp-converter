import { Temp } from "..";
import { celsiusToFahrenheit, celsiusToKelvin, fahrenheitToCelsius, fahrenheitToKelvin, kelvinToCelsius, kelvinToFahrenheit } from "../../../../common/converter/converter";
import InfoButton from "./InfoButton";
import styles from './Item.module.scss'

interface Props {
    label: string;
    minimumTemp: number,
    temp: Temp,
    setTemp: React.Dispatch<React.SetStateAction<Temp>>
}


export default function Item({ label, temp, minimumTemp, setTemp }: Props) {
    function changeAllTemp(event: React.ChangeEvent<HTMLInputElement>) {
        const tempInputText = event.target.value;
        if (tempInputText == '-') {
            setTemp({
                celsius: '',
                fahrenheit: '',
                kelvin: '',
                [event.target.id]: event.target.id === 'kelvin' ? 'invalid' : '-'
            })
            return
        }

        let tempNumber = Number(tempInputText);

        if (isNaN(tempNumber)) { console.log('NaN'); return; }

        if (tempNumber < minimumTemp) {
            setTemp({
                celsius: '',
                fahrenheit: '',
                kelvin: '',
                [label]: 'invalid'
            })
            return;
        }

        switch (event.target.id) {
            case 'celsius':
                setTemp({
                    celsius: tempInputText,
                    fahrenheit: celsiusToFahrenheit(tempNumber),
                    kelvin: celsiusToKelvin(tempNumber)
                })
                break;
            case 'fahrenheit':
                setTemp({
                    celsius: fahrenheitToCelsius(tempNumber),
                    fahrenheit: tempInputText,
                    kelvin: fahrenheitToKelvin(tempNumber)
                })
                break;
            case 'kelvin':
                setTemp({
                    celsius: kelvinToCelsius(tempNumber),
                    fahrenheit: kelvinToFahrenheit(tempNumber),
                    kelvin: tempInputText
                })
        }
    }

    return (
        <li className={styles.item}>
            <div className={styles.item__label}>
                {label.toUpperCase()}
            </div>
            <div className={styles.temp}>
                <InfoButton minimumTemp={minimumTemp} label={label} />
                <input
                    className={styles.item__input}
                    type="text"
                    id={label}
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