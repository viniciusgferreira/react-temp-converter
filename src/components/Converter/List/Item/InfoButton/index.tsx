import { BsInfoCircle } from 'react-icons/bs'
import styles from './InfoButton.module.scss'

interface Props {
    minimumTemp: number,
    label: string
}

export default function InfoButton({ minimumTemp, label }: Props) {
    return (
        <span className={styles.tooltip}><BsInfoCircle size="15px" />
            <p className={styles.tooltiptext}>
                {label} minimum temp: {minimumTemp} °{label.substring(0, 1).toUpperCase()}
            </p>
        </span>
    )
}