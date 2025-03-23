'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if ((inputValue.toLowerCase() === 'cinthia')||(inputValue.toLowerCase() === 'cinthia edith')||(inputValue.toLowerCase() === 'cinthia vazquez')||(inputValue.toLowerCase() === 'cinthia vazquez tolentino')||(inputValue.toLowerCase() === 'cinthia edith vazquez tolentino')) {
      router.push('/Principal');
    } else {
      setErrorMessage('Error: quien eres?');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>QUIEN ERES?</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Escribe tu nombre..."
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Enviar
        </button>
      </form>

      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
}