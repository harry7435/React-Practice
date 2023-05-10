import styles from './Tab.module.css';

export default function Tab({ title, number }) {
  return (
    <li>
      <button className={styles.tab}>
        <span>{title}</span>
        {number && <div className={styles.circle}>{number}</div>}
      </button>
    </li>
  );
}
