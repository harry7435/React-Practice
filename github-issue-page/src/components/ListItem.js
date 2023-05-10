import Badge from './Badge';
import styles from './ListItem.module.css';
import ListItemLayout from './ListItemLayout';

export default function ListItem({ checked, onChangeCheckBox, onClickTitle }) {
  return (
    <ListItemLayout>
      <div>
        <div role="button" onClick={onClickTitle} className={styles.title}>
          Issue Example
          <Badge title="Bug" color="red" />
        </div>
        <div className={styles.description}># Description</div>
      </div>
    </ListItemLayout>
  );
}
