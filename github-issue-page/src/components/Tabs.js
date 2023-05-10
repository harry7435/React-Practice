import styles from './Tabs.module.css';
import cx from 'clsx';

const tabList = ['Code', 'Issues', 'Pull Request'];

export default function Tabs() {
  return (
    <ul className={styles.tabList}>
      {tabList.map((tab) => (
        <Tab selected={true} title={tab} />
      ))}
    </ul>
  );
}

function Tab({ title, selected, onClick, number }) {
  return (
    <li>
      <button
        onClick={onClick}
        className={cx(styles.tab, { [styles.selected]: selected })}
      >
        <span>{title}</span>
        {number && <div className={styles.circle}>{number}</div>}
      </button>
    </li>
  );
}
