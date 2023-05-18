import { useState } from "react";
import Item from "./Item";
import styles from './List.module.scss'

export type Temp = {
    celsius: number,
    fahrenheit: number,
    kelvin: number,
    [key: string]: number;
}

export default function List() {
    const [temp, setTemp] = useState<Temp>({
        celsius: 100,
        fahrenheit: 212,
        kelvin: 373.15
    });

    return (
        <ul className={styles.list}>
            <Item label="celsius"
                temp={temp} setTemp={setTemp}
            />

            <Item label="fahrenheit"
                temp={temp} setTemp={setTemp}
            />

            <Item label="kelvin"
                temp={temp} setTemp={setTemp}
            />
        </ul>
    )
}