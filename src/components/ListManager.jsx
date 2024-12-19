import { useState } from 'react';
import styles from './app.module.css';

const ListManager = () => {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const [error, setError] = useState('');

  
  const onInputButtonClick = () => {
    const promptValue = prompt('Введите значение'); 
    if (promptValue !== null && promptValue.trim().length > 0) {
      if (promptValue.trim().length < 3) {
        setError('Введенное значение должно содержать минимум 3 символа');
        setValue('');
      } else {
        setValue(promptValue.trim());
        setError(''); 
      }
    } else {
      setError('Введенное значение не может быть пустым');
    }
  };

  
  const onAddButtonClick = () => {
    if (value.trim().length >= 3) {
      const newItem = {
        id: Date.now(), 
        value,
        date: new Date().toLocaleString(), 
      };
      setList((prevList) => [...prevList, newItem]); 
      setValue(''); 
      setError(''); 
    }
  };

  
  const isValueValid = value.trim().length >= 3;

  return (
    <div className={styles.container}>
      <h1 className={styles['page-heading']}>Ввод значения</h1>
      <p className={styles['current-value']}>Текущее значение value: "{value}"</p>
      {error && <p className={styles.error}>{error}</p>} {/* Условный рендеринг ошибки */}
      
      <div className={styles['buttons-container']}>
        <button onClick={onInputButtonClick} className={styles.inputButton}>
          Ввести новое
        </button>
        <button
          onClick={onAddButtonClick}
          disabled={!isValueValid} 
          className={styles.button}
        >
          Добавить в список
        </button>
      </div>

      <div className={styles['list-container']}>
        <h2 className={styles['list-heading']}>Список:</h2>
        {list.length === 0 ? (
          <p className={styles['no-margin-text']}>Нет добавленных элементов</p>
        ) : (
          <ul className={styles.list}>
            {list.map((item) => (
              <li key={item.id} className={styles['list-item']}>
                {item.value} <span className={styles.date}>({item.date})</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ListManager;
