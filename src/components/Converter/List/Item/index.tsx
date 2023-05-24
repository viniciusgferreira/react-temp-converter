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
    function setEmptyTemp() {
        setTemp({
            celsius: '',
            fahrenheit: '',
            kelvin: ''
        })
    }

    function changeAllTemp(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.value == '-') {
            setTemp({
                celsius: '',
                fahrenheit: '',
                kelvin: '',
                [event.target.id]: event.target.id === 'kelvin' ? 'invalid' : '-'
            })
            return
        }

        const unit = Number(event.target.value);

        if (isNaN(unit)) { console.log('NaN'); return; }

        if (unit < minimumTemp) {
            //setEmptyTemp();
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
                    celsius: unit,
                    fahrenheit: celsiusToFahrenheit(unit),
                    kelvin: celsiusToKelvin(unit)
                })
                break;
            case 'fahrenheit':
                setTemp({
                    celsius: fahrenheitToCelsius(unit),
                    fahrenheit: unit,
                    kelvin: fahrenheitToKelvin(unit)
                })
                break;
            case 'kelvin':
                setTemp({
                    celsius: kelvinToCelsius(unit),
                    fahrenheit: kelvinToFahrenheit(unit),
                    kelvin: unit
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