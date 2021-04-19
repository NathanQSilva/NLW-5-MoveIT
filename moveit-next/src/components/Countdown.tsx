import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Contdown.module.css';

export function Contdown () {
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        startContdown,
        resetCountdown
    } = useContext(CountdownContext)

    const [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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

            { hasFinished ? (
                <button
                disabled
                className={styles.counddownButton}
                >
                    Ciclo encerrado
                </button>
            ) : (
                <>
                    { isActive ? (
                        <button
                        type="button"
                        className={`${styles.counddownButton} ${styles.counddownButtonActive}`}
                        onClick={resetCountdown}
                        >
                            Abandonar ciclo
                        </button>
                    ) : (
                        <button
                        type="button"
                        className={styles.counddownButton}
                        onClick={startContdown}
                        >
                            Iniciar ciclo
                        </button>
                    ) }
                </>
                ) }
            
        </div>
    );
}