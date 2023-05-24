import { useState } from "react";
import Item from "./Item";
import styles from './List.module.scss'

export type Temp = {
    celsius: number | string,
    fahrenheit: number | string,
    kelvin: number | string,
    [key: string]: number | string;
}

export default function List() {
    const [temp, setTemp] = useState<Temp>({
        celsius: '',
        fahrenheit: '',
        kelvin: '',
    });

    return (
        <ul className={styles.list}>
            <Item label="celsius" minimumTemp={-273.15}
                temp={temp} setTemp={setTemp}
            />

            <Item label="fahrenheit" minimumTemp={-459.67}
                temp={temp} setTemp={setTemp}
            />

            <Item label="kelvin" minimumTemp={0}
                temp={temp} setTemp={setTemp}
            />
        </ul>
    )
}