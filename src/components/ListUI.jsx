import styles from './app.module.css';

const ListUI = ({ value, onValueChange, list, error, onAdd, isDisabled, onInputButtonClick }) => (
  <div className={styles.app}>
    <h1 className={styles['page-heading']}>Ввод значения</h1>
    <p className={styles['no-margin-text']}>
      Текущее значение <code className={styles['current-value']}>{value}</code>
    </p>
    {error && <div className={styles.error}>{error}</div>}
    
<div className={styles.inputGroup}>
  <div className={styles['buttons-container']}>
    <input
      type="text"
      value={value}
      onChange={onValueChange}
      placeholder="Введите значение"
      className={styles.input}
    />
    <button onClick={onAdd} disabled={isDisabled} className={styles.button}>
      Добавить в список
    </button>
  </div>
  <button onClick={onInputButtonClick} className={styles.inputButton}>
    Ввести новое
  </button>
</div>


    <div className={styles['list-container']}>
      <h2 className={styles['list-heading']}>Список:</h2>
      {list.length === 0 ? (
        <p className={styles['no-margin-text']}>Нет добавленных элементов</p>
      ) : (
        <ul className={styles.list}>
          {list.map((item, index) => (
            <li key={index} className={styles['list-item']}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

export default ListUI;

