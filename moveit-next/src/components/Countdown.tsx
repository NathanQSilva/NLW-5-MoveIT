import { useState, useEffect } from 'react';
import styles from '../styles/components/Contdown.module.css';

export function Contdown () {
    const [time, setTime] = useState(25 * 60);
    const [active, setActive] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startContdown () {
        setActive(true);

    }
    
    useEffect(() => {
        if (active && time > 0) {
            setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        }
    }, [active, time])

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minutesLeft}</span>
                    <span>{minutesRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            <button
                type="button"
                className={styles.counddownButton}
                onClick={startContdown}
            >
                Iniciar um ciclo
            </button>
        </div>
    );
}